from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import psycopg2
from psycopg2.extras import RealDictCursor
import time

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
            host="localhost",
            database="hr_management",
            user="postgres",
            password="duke123",
            cursor_factory=RealDictCursor
        )
        cursor = conn.cursor()
        print("Database connection was successful")
        break  # Exit the loop once the connection is successful
    except Exception as error:
        print(f"Connection to database failed: {error}")
        time.sleep(2)  # Retry after 2 seconds
