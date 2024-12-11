from pydantic import BaseModel
from datetime import date
from typing import Optional, List

# Base Pydantic model to handle common fields
class BaseUser(BaseModel):
    email: str
    first_name: str
    last_name: str
    date_of_birth: Optional[date] = None
    image: Optional[str] = None
    nationality: Optional[str] = None
    gender: Optional[str] = None
    user_role: Optional[str] = None

    class Config:
        orm_mode = True

# User schema
class UserCreate(BaseUser):
    password_hash: str

class UserUpdate(BaseUser):
    password_hash: Optional[str] = None

class UserInDB(BaseUser):
    user_id: int
    employee_id: Optional[int] = None

# Employee schema
class EmployeeCreate(BaseModel):
    designation: str
    department: str
    joining_date: date
    employee_status: str
    work_type: str
    reporting_manager_user_id: Optional[int] = None

    class Config:
        orm_mode = True

class EmployeeUpdate(BaseModel):
    designation: Optional[str] = None
    department: Optional[str] = None
    employee_status: Optional[str] = None
    work_type: Optional[str] = None
    reporting_manager_user_id: Optional[int] = None

    class Config:
        orm_mode = True

class EmployeeInDB(BaseModel):
    employee_id: int
    designation: str
    department: str
    joining_date: date
    employee_status: str
    work_type: str
    reporting_manager_user_id: Optional[int] = None

    class Config:
        orm_mode = True

# Address schema
class AddressCreate(BaseModel):
    home: Optional[str] = None
    current: Optional[str] = None

    class Config:
        orm_mode = True

class AddressInDB(AddressCreate):
    address_id: int
    employee_id: int

    class Config:
        orm_mode = True

# Contact schema
class ContactCreate(BaseModel):
    work_email: Optional[str] = None
    work_phone: Optional[str] = None
    personal_email: Optional[str] = None
    personal_phone: Optional[str] = None
    emergency_contact_person: Optional[str] = None
    emergency_contact_number: Optional[str] = None

    class Config:
        orm_mode = True

class ContactInDB(ContactCreate):
    contact_id: int
    employee_id: int

    class Config:
        orm_mode = True

# BankInfo schema
class BankInfoCreate(BaseModel):
    bank_name: Optional[str] = None
    acccount_holder_name: Optional[str] = None
    account_number: Optional[str] = None
    code: Optional[str] = None
    tax_id: Optional[str] = None
    branch_name: Optional[str] = None
    routing_number: Optional[str] = None

    class Config:
        orm_mode = True

class BankInfoInDB(BankInfoCreate):
    bankInfo_id: int
    employee_id: int

    class Config:
        orm_mode = True

# Notification schema
class NotificationCreate(BaseModel):
    title: Optional[str] = None
    details: Optional[str] = None
    created_by: Optional[str] = None
    created_at: Optional[date] = None
    target_department: Optional[str] = None
    target_user: Optional[str] = None

    class Config:
        orm_mode = True

class NotificationInDB(NotificationCreate):
    notification_id: int
    employee_id: int

    class Config:
        orm_mode = True

# Attendance schema
class AttendanceCreate(BaseModel):
    date: date
    start_time: Optional[str] = None
    end_time: Optional[str] = None
    start_time2: Optional[str] = None
    end_time2: Optional[str] = None
    working_hours: Optional[int] = None

    class Config:
        orm_mode = True

class AttendanceInDB(AttendanceCreate):
    attendnance_id: int
    employee_id: int

    class Config:
        orm_mode = True

# Leave schema
class LeaveCreate(BaseModel):
    leave_type: str
    leave_status: str
    leave_from: date
    leave_to: date
    leave_days: int
    created_at: Optional[date] = None
    created_by: Optional[str] = None

    class Config:
        orm_mode = True

class LeaveInDB(LeaveCreate):
    leave_id: int
    employee_id: int

    class Config:
        orm_mode = True

# Response Model for listing multiple items
class EmployeeListResponse(BaseModel):
    employees: List[EmployeeInDB]

    class Config:
        orm_mode = True

class UserListResponse(BaseModel):
    users: List[UserInDB]

    class Config:
        orm_mode = True
