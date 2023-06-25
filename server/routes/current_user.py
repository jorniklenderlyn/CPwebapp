from flask import session, jsonify

from app import app
from models import User

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    
    # return jsonify({
    #     "id": user.id,
    #     "email": user.email
    # })
    return jsonify({"message": "ok"}), 200