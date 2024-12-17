from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from . import models, schema , utils
from .database import engine, get_db


# Create tables
models.Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()


# GET request to retrieve all users
@app.get("/users" , response_model=schema.UserList)
def get_users(db: Session = Depends(get_db) ):
    users = db.query(models.User).all()
    return {"users": users}


# GET request to retrieve a single user by ID
@app.get("/users/{user_id}", response_model=schema.User)
def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == user_id).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found"
        )

    print(user)  # Log the SQLAlchemy object to verify
    return user



# POST request to create a new user
@app.post("/users", status_code=status.HTTP_201_CREATED)
def create_user(user: schema.UserCreate, db: Session = Depends(get_db)):
    # Convert schema object to dictionary
    user_data = user.dict()

    # Hash the password
    hashed_password = utils.hash(user_data['password_hash'])
    user_data['password_hash'] = hashed_password

    # Create a new User instance with only valid fields
    new_user = models.User(**user_data)  # Ensure model fields match dictionary keys
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user



# DELETE request to delete a user by ID
@app.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    # Use `user_id` instead of `id` to filter the query
    user = db.query(models.User).filter(models.User.user_id == user_id).first()
    
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    db.delete(user)
    db.commit()
    
    return {"message": "User deleted successfully"}


# PUT request to update a user by ID
@app.put("/users/{user_id}", status_code=status.HTTP_200_OK)
def update_user(user_id: int, user: schema.UserBase, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.user_id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")

    # Update only provided fields
    update_data = user.dict(exclude_unset=True)
    for key, value in update_data.items():
        setattr(db_user, key, value)

    db.commit()
    db.refresh(db_user)
    return db_user