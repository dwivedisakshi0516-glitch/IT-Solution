from datetime import datetime
from sqlalchemy import String, Text, DateTime, Integer
from sqlalchemy.orm import Mapped, mapped_column
from .database import Base

class Inquiry(Base):
    __tablename__ = "inquiries"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    full_name: Mapped[str] = mapped_column(String(150))
    company: Mapped[str] = mapped_column(String(180))
    email: Mapped[str] = mapped_column(String(180), index=True)
    phone: Mapped[str] = mapped_column(String(40))
    requirement_type: Mapped[str] = mapped_column(String(100))
    message: Mapped[str] = mapped_column(Text)
    status: Mapped[str] = mapped_column(String(30), default="new", index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class Registration(Base):
    __tablename__ = "registrations"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    full_name: Mapped[str] = mapped_column(String(150))
    contact: Mapped[str] = mapped_column(String(180), index=True)
    role: Mapped[str] = mapped_column(String(80), index=True)
    location: Mapped[str] = mapped_column(String(180))
    message: Mapped[str] = mapped_column(Text, default="")
    resume_filename: Mapped[str | None] = mapped_column(String(255), nullable=True)
    status: Mapped[str] = mapped_column(String(30), default="new", index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
