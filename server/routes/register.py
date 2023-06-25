from flask import request, jsonify

from app import app, bcrypt
from models import User
from init_db import db


@app.route("/register", methods=["POST"])
def register():
    login = request.json["login"]
    password = request.json["password"]

    user = User.query.filter_by(email=login).first()
    if user:
        return jsonify({"error": "Request already exist"}), 409
    
    hashed_password = bcrypt.generate_password_hash(password)
    
    new_user = User(email=login, password=hashed_password, role=0)

    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"status": "ok"}), 200
