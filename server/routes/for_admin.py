from app import app, bcrypt
from models import User
from init_db import db



@app.route("/add_admin", methods=["GET", "POST"])
def add_admin():
    
    login = "root"
    password = "101101011101"
    if not User.query.filter_by(login=login).first():
        hashed_password = bcrypt.generate_password_hash(password)

        new_user = User(login=login, password=hashed_password, name="name", email="email", phone="phone", role=0)
        db.session.add(new_user)
        db.session.commit()
        
        return "200"
    return "409"


@app.route("/del_admin/<email>", methods=["GET"])
def del_admin(email):
    u = User.query.filter_by(email=email).first()
    db.session.delete(u)
    db.session.commit()
    return "200"
