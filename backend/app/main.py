from fastapi import FastAPI
from app.database import engine
from app import models
from app.routers import user

# Create tables
models.Base.metadata.create_all(bind=engine)

# Create FastAPI app
app = FastAPI()

# Include router
app.include_router(user.router)

@app.get("/")
def root():
    return {"message": "Hello World"}
