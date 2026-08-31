from pathlib import Path
import re
import uuid
from fastapi import FastAPI, Depends, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from sqlalchemy import select

from .config import settings
from .database import Base, engine, get_db
from .models import Inquiry, Registration
from .schemas import InquiryCreate, InquiryOut, RegistrationOut, StatusUpdate, LoginRequest, TokenResponse
from .auth import create_access_token, verify_admin

Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.APP_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_ORIGIN],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

upload_dir = Path(settings.UPLOAD_DIR)
upload_dir.mkdir(parents=True, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=upload_dir), name="uploads")

ALLOWED_EXTENSIONS = {".pdf", ".doc", ".docx"}
MAX_UPLOAD_BYTES = 5 * 1024 * 1024

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.post("/api/admin/login", response_model=TokenResponse)
def admin_login(payload: LoginRequest):
    if payload.email.lower() != settings.ADMIN_EMAIL.lower() or payload.password != settings.ADMIN_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid admin credentials")
    return TokenResponse(access_token=create_access_token(settings.ADMIN_EMAIL))

@app.post("/api/inquiries", response_model=InquiryOut, status_code=201)
def create_inquiry(payload: InquiryCreate, db: Session = Depends(get_db)):
    item = Inquiry(**payload.model_dump())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item

@app.post("/api/registrations", response_model=RegistrationOut, status_code=201)
async def create_registration(
    full_name: str = Form(...),
    contact: str = Form(...),
    role: str = Form(...),
    location: str = Form(...),
    message: str = Form(""),
    resume: UploadFile | None = File(None),
    db: Session = Depends(get_db),
):
    filename = None
    if resume and resume.filename:
        ext = Path(resume.filename).suffix.lower()
        if ext not in ALLOWED_EXTENSIONS:
            raise HTTPException(status_code=400, detail="Only PDF, DOC and DOCX files are allowed")
        data = await resume.read()
        if len(data) > MAX_UPLOAD_BYTES:
            raise HTTPException(status_code=400, detail="Resume must be 5 MB or smaller")
        safe_stem = re.sub(r"[^a-zA-Z0-9_-]+", "_", Path(resume.filename).stem)[:80] or "resume"
        filename = f"{uuid.uuid4().hex}_{safe_stem}{ext}"
        (upload_dir / filename).write_bytes(data)

    item = Registration(
        full_name=full_name.strip(),
        contact=contact.strip(),
        role=role.strip(),
        location=location.strip(),
        message=message.strip(),
        resume_filename=filename,
    )
    db.add(item)
    db.commit()
    db.refresh(item)
    return item

@app.get("/api/admin/inquiries", response_model=list[InquiryOut], dependencies=[Depends(verify_admin)])
def list_inquiries(db: Session = Depends(get_db)):
    return db.scalars(select(Inquiry).order_by(Inquiry.created_at.desc())).all()

@app.get("/api/admin/registrations", response_model=list[RegistrationOut], dependencies=[Depends(verify_admin)])
def list_registrations(db: Session = Depends(get_db)):
    return db.scalars(select(Registration).order_by(Registration.created_at.desc())).all()

@app.patch("/api/admin/inquiries/{item_id}/status", response_model=InquiryOut, dependencies=[Depends(verify_admin)])
def update_inquiry_status(item_id: int, payload: StatusUpdate, db: Session = Depends(get_db)):
    item = db.get(Inquiry, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    item.status = payload.status
    db.commit()
    db.refresh(item)
    return item

@app.patch("/api/admin/registrations/{item_id}/status", response_model=RegistrationOut, dependencies=[Depends(verify_admin)])
def update_registration_status(item_id: int, payload: StatusUpdate, db: Session = Depends(get_db)):
    item = db.get(Registration, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Registration not found")
    item.status = payload.status
    db.commit()
    db.refresh(item)
    return item

@app.delete("/api/admin/inquiries/{item_id}", dependencies=[Depends(verify_admin)])
def delete_inquiry(item_id: int, db: Session = Depends(get_db)):
    item = db.get(Inquiry, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    db.delete(item)
    db.commit()
    return {"deleted": True}

@app.delete("/api/admin/registrations/{item_id}", dependencies=[Depends(verify_admin)])
def delete_registration(item_id: int, db: Session = Depends(get_db)):
    item = db.get(Registration, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Registration not found")
    if item.resume_filename:
        path = upload_dir / item.resume_filename
        if path.exists():
            path.unlink()
    db.delete(item)
    db.commit()
    return {"deleted": True}
