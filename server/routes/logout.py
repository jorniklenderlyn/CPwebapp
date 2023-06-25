from flask import session, jsonify

from app import app

@app.route("/logout", methods=["POST"])
def logout_user():
    if "user_id" in session:
        session.pop("user_id")
    return jsonify({"status": "ok"}), 200