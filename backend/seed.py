from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import User, Employee, Address, Contact, BankInfo, Notification, Attendance, Leave
from database import Base, DATABASE_URL

# Create a session and initialize the database
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def seed_db():
    db = SessionLocal()

    # Insert Users
    users = [
        User(
            user_id=1,
            email="abc@gmail.com",
            password_hash="xfkfgdlkguergtkl",
            first_name="John",
            last_name="Doe",
            date_of_birth="1997-11-12",
            image="/images/fv_logo-pc.png",
            nationality="Bangladeshi",
            gender="Male",
            user_role="Employee",
            employee_id=1
        ),
        User(
            user_id=2,
            email="abc@gmail.com",
            password_hash="xfkfgdlkguergtkl",
            first_name="John",
            last_name="Doe",
            date_of_birth="1997-11-12",
            image="/images/fv_logo-pc.png",
            nationality="Bangladeshi",
            gender="Female",
            user_role="Management"
        ),
        User(
            user_id=3,
            email="abc@gmail.com",
            password_hash="xfkfgdlkguergtkl",
            first_name="John",
            last_name="Doe",
            date_of_birth="1997-11-12",
            image="/images/fv_logo-pc.png",
            nationality="Bangladeshi",
            gender="Female",
            user_role="HR",
            employee_id=2
        ),
        User(
            user_id=4,
            email="abc@gmail.com",
            password_hash="xfkfgdlkguergtkl",
            first_name="John",
            last_name="Doe",
            date_of_birth="1998-11-12",
            image="/images/fv_logo-pc.png",
            nationality="Bangladeshi",
            gender="Female",
            user_role="Leader",
            employee_id=3
        ),
    ]

    db.add_all(users)
    db.commit()

    # Insert Employees
    employees = [
        Employee(
            employee_id=1,
            designation="Software Engineer",
            department="Frontend",
            joining_date="2023-08-17",
            employee_status="Permanent",
            work_type="Remote",
            reporting_manager_user_id=2
        ),
        Employee(
            employee_id=2,
            designation="HR",
            department="HR",
            joining_date="2024-08-17",
            employee_status="Probation",
            work_type="On-Site",
            reporting_manager_user_id=4
        ),
        Employee(
            employee_id=3,
            designation="UI Designer",
            department="UI/UX",
            joining_date="2025-08-17",
            employee_status="Intern",
            work_type="Hybrid",
            reporting_manager_user_id=2
        ),
    ]

    db.add_all(employees)
    db.commit()

    # Insert Addresses
    addresses = [
        Address(address_id=1, home="Cumilla, Chittagong", current="Gulshan, Dhaka", employee_id=1),
        Address(address_id=2, home="Cumilla, Chittagong", current="Gulshan, Dhaka", employee_id=2),
        Address(address_id=3, home="Cumilla, Chittagong", current="Gulshan, Dhaka", employee_id=3),
    ]

    db.add_all(addresses)
    db.commit()

    # Insert Contacts
    contacts = [
        Contact(contact_id=1, work_email="abc@gmail.com", work_phone="1231465465", personal_email="abc@gmail.com", personal_phone="1231465465", emergency_contact_person="John", emergency_contact_number="1231465465", employee_id=1),
        Contact(contact_id=2, work_email="abc@gmail.com", work_phone="1231465465", personal_email="abc@gmail.com", personal_phone="1231465465", emergency_contact_person="John", emergency_contact_number="1231465465", employee_id=2),
        Contact(contact_id=3, work_email="abc@gmail.com", work_phone="1231465465", personal_email="abc@gmail.com", personal_phone="1231465465", emergency_contact_person="John", emergency_contact_number="1231465465", employee_id=3),
    ]

    db.add_all(contacts)
    db.commit()

    # Insert Bank Info
    bank_infos = [
        BankInfo(bankInfo_id=1, bank_name="abc", acccount_holder_name="John", account_number="12354687", code="1231465465", tax_id="dgf1143463", branch_name="Gulshan", routing_number="13514546", employee_id=1),
        BankInfo(bankInfo_id=2, bank_name="abc", acccount_holder_name="John", account_number="12365478", code="1231465465", tax_id="dgf1143463", branch_name="Gulshan", routing_number="13214316544", employee_id=2),
        BankInfo(bankInfo_id=3, bank_name="abc", acccount_holder_name="John", account_number="13216546", code="1231465465", tax_id="dgf1143463", branch_name="Gulshan", routing_number="14564654", employee_id=3),
    ]

    db.add_all(bank_infos)
    db.commit()

    # Insert Notifications
    notifications = [
        Notification(notification_id=1, title="abc@gmail.com", details="1231465465", created_by="abc@gmail.com", created_at="2024-12-11", target_department="HR", target_user="User"),
        Notification(notification_id=2, title="abc@gmail.com", details="1231465465", created_by="abc@gmail.com", created_at="2024-12-11", target_department="HR", target_user="User"),
        Notification(notification_id=3, title="abc@gmail.com", details="1231465465", created_by="abc@gmail.com", created_at="2024-12-11", target_department="HR", target_user="User"),
    ]

    db.add_all(notifications)
    db.commit()

    # Insert Attendance
    attendances = [
        Attendance(attendnance_id=1, date="2024-12-20", start_time="08:00 am", end_time="02:00 pm", start_time2="03:00 pm", end_time2="05:00 pm", working_hours=8, employee_id=1),
        Attendance(attendnance_id=2, date="2025-12-20", start_time="08:00 am", end_time="02:00 pm", start_time2="03:00 pm", end_time2="05:00 pm", working_hours=8, employee_id=2),
        Attendance(attendnance_id=3, date="2026-12-20", start_time="08:00 am", end_time="02:00 pm", start_time2="03:00 pm", end_time2="05:00 pm", working_hours=8, employee_id=3),
    ]

    db.add_all(attendances)
    db.commit()

    # Insert Leaves
    leaves = [
        Leave(leave_id=1, leave_type="Sick", leave_status="08:00 am", leave_from="2024-12-20", leave_to="2024-12-20", leave_days=2, created_at="2024-12-20", created_by="User", employee_id=1),
        Leave(leave_id=2, leave_type="Casual", leave_status="08:00 am", leave_from="2024-12-20", leave_to="2024-12-20", leave_days=1, created_at="2024-12-20", created_by="User", employee_id=2),
        Leave(leave_id=3, leave_type="Annual", leave_status="08:00 am", leave_from="2024-12-20", leave_to="2024-12-20", leave_days=3, created_at="2024-12-20", created_by="User", employee_id=3),
    ]

    db.add_all(leaves)
    db.commit()

    db.close()

# Call seed function to populate the data
seed_db()
