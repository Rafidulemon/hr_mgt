from fastapi import FastAPI, Depends, HTTPException, Response, status
from backend.app.models import User
from . import models 
from . import schema
from .database import engine, get_db
from sqlalchemy.orm import Session
# from mypackage import User, engine, SessionLocal, Base    # syntax of importint from the __init__.py file 


# Create tables
models.Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Pydantic model for user input validation


# GET request to retrieve all users
@app.get("/users")
def get_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return {"data": users}

# GET request to retrieve a single user by ID
@app.get("/users/{user_id}")
def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return {"data": user}

# POST request to create a new user
@app.post("/users", status_code=status.HTTP_201_CREATED)
def create_user(user: schema.CreateUser, db: Session = Depends(get_db)):
    new_user = models.User(
        name=user.name, 
        address=user.address, 
        role=user.role, 
        is_active=user.is_active
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"data": new_user}

# DELETE request to delete a user by ID
@app.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    db.delete(user)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)


# PUT request to update a user by ID
@app.put("/users/{user_id}", status_code=status.HTTP_200_OK)
def update_user(user_id: int, user: schema.User, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    db_user.name = user.name
    db_user.address = user.address
    db_user.role = user.role
    db_user.is_active = user.is_active
    
    db.commit()
    db.refresh(db_user)
    return {"data": db_user}
