# app/main.py
from fastapi import FastAPI, Depends, HTTPException, Response, status
from . import models
from .database import engine, get_db
from sqlalchemy.orm import Session
from pydantic import BaseModel

# Create tables
models.Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

#pydentic model for user 
class User(BaseModel):
    name:str
    address:str 
    role:str 
    is_active:int

# Test endpoint
@app.get("/users")
def test_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    return {"data": users}



# To create a new user 
@app.post("/users", status_code=status.HTTP_201_CREATED)
def create_users(user: User, db: Session = Depends(get_db)):
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


