from init_db import db
from uuid import uuid4

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.String(256), unique=True)
    role = db.Column(db.SmallInteger, nullable=False)