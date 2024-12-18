from passlib.context import CryptContext
# deciding what passwod hasing method to apply
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash(password : str):
    return pwd_context.hash(password)


