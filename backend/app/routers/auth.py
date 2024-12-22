
from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from .. import database, schema, models, utils
router = APIRouter(prefix="/authentication", tags=["Authentication"])

@router.post('/login')

def login(user_credentials: schema.UserModel, db: Session = Depends(database.get_db)):
   user = db.query(models.User).filter(models.User.email == user_credentials.email).first()

   if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials"
        )
   
   if not utils.verify(user_credentials.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials"
        )
   
   # create token 
   # return token 

   return {"token" : "demo token"}
   


