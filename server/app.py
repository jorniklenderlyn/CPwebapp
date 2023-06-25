from flask import Flask
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_cors import CORS

import yagmail
from config import ApplicationConfig
from init_db import db
import models

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

yag = yagmail.SMTP("sys.m.schedule@gmail.com", "nohqoytnxxripbfi")
bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()