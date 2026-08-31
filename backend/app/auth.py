from datetime import datetime, timedelta, timezone
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt, JWTError
from .config import settings

security = HTTPBearer()

def create_access_token(subject: str) -> str:
    expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_MINUTES)
    return jwt.encode({"sub": subject, "exp": expire}, settings.JWT_SECRET, algorithm="HS256")

def verify_admin(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:
    try:
        payload = jwt.decode(credentials.credentials, settings.JWT_SECRET, algorithms=["HS256"])
        subject = payload.get("sub")
        if subject != settings.ADMIN_EMAIL:
            raise ValueError()
        return subject
    except (JWTError, ValueError):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token")
