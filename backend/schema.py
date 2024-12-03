from sqlalchemy import (
    Column, String, Integer, ForeignKey, Enum, Date, Table, Boolean, create_engine, Time
)
from sqlalchemy.orm import relationship, declarative_base

import enum

Base = declarative_base()

class GenderEnum(enum.Enum):
    male = "Male"
    female = "Female"

class DepartmentEnum(enum.Enum):
    frontend = "Frontend"
    backend = "Backend"
    ui_ux = "UI_UX"
    hr = "HR"
    management = "Management"
    business = "Business"
    research = "Research"

class EmployeeStatusEnum(enum.Enum):
    intern = "Intern"
    probation = "Probation"
    permanent = "Permanent"
    resigned = "Resigned"

class EmployeeTypeEnum(enum.Enum):
    employee = "Employee"
    team_lead = "Team_lead"
    project_manager = "Project_manager"
    manager = "Manager"
    management = "Management"

class WorkType(enum.Enum):
    remote = "Remote"
    on_site = "On_Site"
    hybrid = "Hybrid"
    
class LeaveStatus(enum.Enum):
    pending = "Pending"
    approved = "Approved"
    rejected = "Rejected"

class LeaveType(enum.Enum):
    casual = "Casual"
    sick = "Sick"
    annual = "Annual"
    maternity = "Paternity/ Maternity"
    other = "Other"


class BasicInfo(Base):
    __tablename__ = "basic_info"
    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    gender = Column(Enum(GenderEnum), nullable=False)
    date_of_birth = Column(Date, nullable=False)
    nationality = Column(String(50), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    image = Column(String(255), nullable=True)

    contact_info = relationship("ContactInfo", uselist=False, back_populates="user")
    address = relationship("Address", uselist=False, back_populates="user")
    employee_info = relationship("EmployeeInfo", uselist=False, back_populates="user")
    bank_info = relationship("BankInfo", uselist=False, back_populates="user")


class ContactInfo(Base):
    __tablename__ = "contact_info"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("basic_info.id"), nullable=False)
    work_email = Column(String(100), nullable=False)
    personal_email = Column(String(100), nullable=True)
    work_phone = Column(String(15), nullable=False)
    personal_phone = Column(String(15), nullable=True)
    emergency_contact_person = Column(String(100), nullable=False)
    emergency_contact_number = Column(String(15), nullable=False)

    user = relationship("BasicInfo", back_populates="contact_info")


class Address(Base):
    __tablename__ = "address"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("basic_info.id"), nullable=False)
    home = Column(String(255), nullable=False)
    current = Column(String(255), nullable=True)

    user = relationship("BasicInfo", back_populates="address")


class EmployeeInfo(Base):
    __tablename__ = "employee_info"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("basic_info.id"), nullable=False)
    employee_id = Column(String(20), unique=True, nullable=False)
    designation = Column(String(100), nullable=False)
    department = Column(Enum(DepartmentEnum), nullable=False)
    joining_date = Column(Date, nullable=False)
    employee_status = Column(Enum(EmployeeStatusEnum), nullable=False)
    employee_type = Column(Enum(EmployeeTypeEnum), nullable=False)
    work_type = Column(Enum(WorkType), nullable=False)
    reporting_manager_id = Column(Integer, ForeignKey("basic_info.id"), nullable=True)

    user = relationship("BasicInfo", back_populates="employee_info")
    reporting_manager = relationship("BasicInfo", foreign_keys=[reporting_manager_id])


class BankInfo(Base):
    __tablename__ = "bank_info"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("basic_info.id"), nullable=False)
    bank_name = Column(String(100), nullable=False)
    account_holder_name = Column(String(100), nullable=False)
    account_number = Column(String(20), unique=True, nullable=False)
    code = Column(String(50), nullable=False)
    tax_id = Column(String(50), nullable=True)

    user = relationship("BasicInfo", back_populates="bank_info")


class Holiday(Base):
    __tablename__ = "holidays"

    id = Column(Integer, primary_key=True)
    date = Column(Date, nullable=False)
    name = Column(String, nullable=False)
    details = Column(String, nullable=True)
    
class Notification(Base):
    __tablename__ = "notifications"

    notification_id = Column(Integer, primary_key=True)
    title = Column(String(255), nullable=False)
    details = Column(String, nullable=True)
    created_at = Column(Date, default=Date.utcnow, nullable=False)
    created_by = Column(Integer, ForeignKey("basic_info.id"), nullable=False)
    target_department = Column(Enum(DepartmentEnum), nullable=True)
    target_user_id = Column(Integer, ForeignKey("basic_info.id"), nullable=True)

    created_by_user = relationship("BasicInfo", foreign_keys=[created_by])
    target_user = relationship("BasicInfo", foreign_keys=[target_user_id])

class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True)
    attendance_id = Column(String(50), unique=True, nullable=False)
    employee_id = Column(Integer, ForeignKey("basic_info.id"), nullable=False)
    employee_name = Column(String(100), nullable=False)
    date = Column(Date, nullable=False)
    start_time = Column(Time, nullable=True)
    end_time = Column(Time, nullable=True)
    start_time2 = Column(Time, nullable=True)
    end_time2 = Column(Time, nullable=True)
    working_hours = Column(String(50), nullable=True)

    employee = relationship("BasicInfo", back_populates="attendance_records")

class Leave(Base):
    __tablename__ = "leave"

    leave_id = Column(Integer, primary_key=True)
    employee_id = Column(Integer, ForeignKey("basic_info.id"), nullable=False)
    employee_name = Column(String(100), nullable=False)
    leave_type = Column(Enum(LeaveType), nullable=False)
    leave_status = Column(Enum(LeaveStatus), nullable=False)
    leave_from = Column(Date, nullable=False)
    leave_till = Column(Date, nullable=False)
    leave_days = Column(String(100), nullable=False)
    created_at = Column(Date, default=Date.utcnow, nullable=False)
    created_by = Column(Integer, ForeignKey("basic_info.id"), nullable=False)