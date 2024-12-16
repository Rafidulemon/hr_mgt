from pydantic import BaseModel

class UserBase(BaseModel):
    name: str
    address: str
    role: str
    is_active: int

class UserCreate(UserBase):
    pass