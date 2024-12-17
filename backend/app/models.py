from sqlalchemy import Column, Integer, String, Enum, TIMESTAMP
from sqlalchemy.sql.expression import text
from .database import Base
import enum


# Enum for Gender
class GenderEnum(enum.Enum):
    Male = "Male"
    Female = "Female"


# Enum for User Role
class UserRoleEnum(enum.Enum):
    Employee = "Employee"
    Management = "Management"
    HR = "HR"
    Leader = "Leader"


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True) 
    email = Column(String, unique=True, nullable=False)  
    first_name = Column(String, nullable=False)  
    last_name = Column(String, nullable=False) 
    password_hash = Column(String, nullable=False) 
    date_of_birth = Column(TIMESTAMP(timezone=True), nullable=False)  
    image = Column(String, nullable=True)  
    nationality = Column(String, nullable=False) 
    gender = Column(Enum(GenderEnum), nullable=False, default=GenderEnum.Male)
    user_role = Column(Enum(UserRoleEnum), nullable=False, default=UserRoleEnum.Employee) 
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text('now()'))

