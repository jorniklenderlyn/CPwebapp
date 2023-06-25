from init_db import db

class Project(db.Model):
    __tablename__ = "projects"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(128), nullable=False)
    user_id = db.Column(db.String(32), db.ForeignKey("users.id"))
    user = db.relationship("User", backref=db.backref("institutes", cascade="all, delete"))
