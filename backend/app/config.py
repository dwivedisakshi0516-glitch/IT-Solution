from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    APP_NAME: str = "Rama IT Solutions API"
    DATABASE_URL: str = "sqlite:///./rama_it.db"
    JWT_SECRET: str = "change-this"
    ADMIN_EMAIL: str = "admin@ramaitsolutions.local"
    ADMIN_PASSWORD: str = "ChangeMe123!"
    FRONTEND_ORIGIN: str = "http://localhost:5173"
    UPLOAD_DIR: str = "uploads"
    ACCESS_TOKEN_MINUTES: int = 480

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

settings = Settings()
