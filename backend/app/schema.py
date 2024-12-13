from pydantic import BaseModel

class User(BaseModel):
    name: str
    address: str
    role: str
    is_active: int

class CreateUser(User):
    pass