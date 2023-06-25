from dotenv import load_dotenv
import redis 
import os

load_dotenv()

class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_DATABASE_URI = r"sqlite:///db.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SESSION_TYPE = "redis"
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True
    SESSION_URL = redis.from_url("redis://127.0.0.1:6379")