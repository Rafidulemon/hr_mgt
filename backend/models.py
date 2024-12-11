from sqlalchemy import Column, Integer, String, Date, ForeignKey, Enum, Text
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    date_of_birth = Column(Date)
    image = Column(String)
    nationality = Column(String)
    gender = Column(Enum('Male', 'Female', name='gender_enum'))
    user_role = Column(String)
    employee_id = Column(Integer, ForeignKey('employees.employee_id'))
    employee = relationship("Employee", back_populates="user", foreign_keys=[employee_id])

class Employee(Base):
    __tablename__ = "employees"

    employee_id = Column(Integer, primary_key=True, index=True)
    designation = Column(String, nullable=False)
    department = Column(String, nullable=False)
    joining_date = Column(Date, nullable=False)
    employee_status = Column(String, nullable=False)
    work_type = Column(String, nullable=False)
    reporting_manager_user_id = Column(Integer, ForeignKey('users.user_id'))
    user = relationship("User", back_populates="employee", foreign_keys=[reporting_manager_user_id])
    addresses = relationship("Address", back_populates="employee")
    contacts = relationship("Contact", back_populates="employee")
    bank_info = relationship("BankInfo", back_populates="employee")
    notifications = relationship("Notification", back_populates="employee")
    attendance = relationship("Attendance", back_populates="employee")
    leaves = relationship("Leave", back_populates="employee")


class Address(Base):
    __tablename__ = "addresses"

    address_id = Column(Integer, primary_key=True, index=True)
    home = Column(Text)
    current = Column(Text)
    employee_id = Column(Integer, ForeignKey('employees.employee_id'))

    employee = relationship("Employee", back_populates="addresses")

class Contact(Base):
    __tablename__ = "contacts"

    contact_id = Column(Integer, primary_key=True, index=True)
    work_email = Column(String)
    work_phone = Column(String)
    personal_email = Column(String)
    personal_phone = Column(String)
    emergency_contact_person = Column(String)
    emergency_contact_number = Column(String)
    employee_id = Column(Integer, ForeignKey('employees.employee_id'))

    employee = relationship("Employee", back_populates="contacts")

class BankInfo(Base):
    __tablename__ = "bank_infos"

    bankInfo_id = Column(Integer, primary_key=True, index=True)
    bank_name = Column(String)
    acccount_holder_name = Column(String)
    account_number = Column(String)
    code = Column(String)
    tax_id = Column(String)
    branch_name = Column(String)
    routing_number = Column(String)
    employee_id = Column(Integer, ForeignKey('employees.employee_id'))

    employee = relationship("Employee", back_populates="bank_info")

class Notification(Base):
    __tablename__ = "notifications"

    notification_id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    details = Column(String)
    created_by = Column(String)
    created_at = Column(Date)
    target_department = Column(String)
    target_user = Column(String)
    employee_id = Column(Integer, ForeignKey('employees.employee_id'))

    employee = relationship("Employee", back_populates="notifications")

class Attendance(Base):
    __tablename__ = "attendance"

    attendnance_id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    start_time = Column(String)
    end_time = Column(String)
    start_time2 = Column(String)
    end_time2 = Column(String)
    working_hours = Column(Integer)
    employee_id = Column(Integer, ForeignKey('employees.employee_id'))

    employee = relationship("Employee", back_populates="attendance")

class Leave(Base):
    __tablename__ = "leaves"

    leave_id = Column(Integer, primary_key=True, index=True)
    leave_type = Column(String)
    leave_status = Column(String)
    leave_from = Column(Date)
    leave_to = Column(Date)
    leave_days = Column(Integer)
    created_at = Column(Date)
    created_by = Column(String)
    employee_id = Column(Integer, ForeignKey('employees.employee_id'))

    employee = relationship("Employee", back_populates="leaves")
