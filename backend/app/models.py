
from sqlalchemy import Column, Integer, String
from .database import Base  # Ensure this is correct

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    address = Column(String)
    role = Column(String)
    is_active = Column(Integer)
