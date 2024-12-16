from pydantic import BaseModel
from datetime import datetime

# Shared fields for User
class UserBase(BaseModel):
    name: str
    address: str
    role: str
    is_active: int

    class Config:
        orm_mode = True


# Fields required to create a new User
class UserCreate(UserBase):
    pass


# Response model for single User
class User(UserBase):
    id: int
    created_at: datetime


# Response model for list of Users
class UserList(BaseModel):
    users: list[User]
