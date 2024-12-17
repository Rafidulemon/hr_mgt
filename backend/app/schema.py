from pydantic import BaseModel, EmailStr
from datetime import datetime
from enum import Enum


# Enums for Gender and User Role
class GenderEnum(str, Enum):
    Male = "Male"
    Female = "Female"


class UserRoleEnum(str, Enum):
    Employee = "Employee"
    Management = "Management"
    HR = "HR"
    Leader = "Leader"


# Shared fields for User
class UserBase(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    nationality: str
    gender: GenderEnum
    user_role: UserRoleEnum

    class Config:
        orm_mode = True  # Enables compatibility with SQLAlchemy models


# Fields required to create a new User
class UserCreate(UserBase):
    password: str  # Include password when creating a new user
    date_of_birth: datetime
    image: str | None  # Image is optional


# Response model for a single User
class User(UserBase):
    user_id: int
    date_of_birth: datetime
    image: str | None
    created_at: datetime


# Response model for a list of Users
class UserList(BaseModel):
    users: list[User]
