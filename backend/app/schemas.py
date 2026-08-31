from datetime import datetime
from pydantic import BaseModel, EmailStr, Field

class InquiryCreate(BaseModel):
    full_name: str = Field(min_length=2, max_length=150)
    company: str = Field(min_length=2, max_length=180)
    email: EmailStr
    phone: str = Field(min_length=5, max_length=40)
    requirement_type: str = Field(min_length=2, max_length=100)
    message: str = Field(min_length=5, max_length=5000)

class InquiryOut(InquiryCreate):
    id: int
    status: str
    created_at: datetime
    class Config:
        from_attributes = True

class RegistrationOut(BaseModel):
    id: int
    full_name: str
    contact: str
    role: str
    location: str
    message: str
    resume_filename: str | None
    status: str
    created_at: datetime
    class Config:
        from_attributes = True

class StatusUpdate(BaseModel):
    status: str = Field(pattern="^(new|reviewing|contacted|approved|rejected|closed)$")

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
