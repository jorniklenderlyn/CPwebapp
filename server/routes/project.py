from flask import request, jsonify

from app import app
from models import Project
from routes.required_route import required_route
from init_db import db


@app.route("/project/create", methods=["POST"])
@required_route(cookie=True)
def create(id, *args, **kwargs):
    title = request.json["title"]

    new_project = Project(title=title, user_id=id)

    db.session.add(new_project)
    db.session.commit()
    
    return jsonify({"status": "ok"}), 200


@app.route("/project", methods=["GET"])
@required_route(cookie=True)
def get(id, *args, **kwargs):

    projects = Project.query.filter_by(user_id=id).all()
    
    r = []

    for p in projects:
        r.append({"id": p.id, "title": p.title})

    return jsonify(r), 200
