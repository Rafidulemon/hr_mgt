from pydantic import BaseModel, EmailStr
from datetime import datetime
from enum import Enum
from typing import List, Optional


# Enums for Gender and User Role
class GenderEnum(str, Enum):
    Male = "Male"
    Female = "Female"


class UserRoleEnum(str, Enum):
    Employee = "Employee"
    Management = "Management"
    HR = "HR"
    Leader = "Leader"


# Shared fields for User (Base class)
class UserBase(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    nationality: str
    gender: GenderEnum
    user_role: UserRoleEnum

    class Config:
        orm_mode = True


# Fields required to create a new User
class UserCreate(UserBase):
    password: str  # Include password when creating a new user
    date_of_birth: datetime
    image: Optional[str] = None  # Image is optional


# Response model for a single User
class User(BaseModel):
    email: EmailStr
    first_name: str
    last_name: str
    nationality: str
    image: Optional[str] = None 
    class Config:
        orm_mode = True


# Response model for a list of Users
class UserList(BaseModel):
    users: List[User]  # List of User objects


