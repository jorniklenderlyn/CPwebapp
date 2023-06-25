from flask import request, jsonify, session

from app import app, bcrypt
from models import User

@app.route("/login", methods=["POST"])
def login_user():
    login = request.json["login"]
    password = request.json["password"]

    user = User.query.filter_by(email=login).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "role": user.role
    }), 200
