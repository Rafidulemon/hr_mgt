from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import psycopg2
from psycopg2.extras import RealDictCursor
import time
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '..', '.env'))

app = FastAPI()

class Post(BaseModel):
    title: str
    content: str
    published: bool = True
    rating: Optional[int] = None

# Database connection
while True:
    try:
        conn = psycopg2.connect(
            host= os.getenv("DB_HOST"),
            database=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            cursor_factory=RealDictCursor
        )
        cursor = conn.cursor()
        print("Database connection was successful")
        break  # Exit the loop once the connection is successful
    except Exception as error:
        print(f"Connection to database failed: {error}")
        time.sleep(2)  # Retry after 2 seconds



@app.get("/")
def root():
    return {"message": "Hello World"}

@app.get("/users")
def get_users():
    try:
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
        return {"data": users}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching users: {e}")
    finally:
        cursor.close()
        conn.close()