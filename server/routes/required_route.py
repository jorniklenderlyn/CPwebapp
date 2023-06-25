from functools import wraps
from flask import request, jsonify, session
import jwt

from app import app


def required_route(cookie=False, token=False):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            if cookie:
                if session.get("user_id"):
                    return f(session.get("user_id"), *args, **kwargs)
                return jsonify({"error": "Unauthorized"}), 401
            elif token:
                token_ = None 
                if "access-token-sys" in request.headers:
                    token_ = request.headers["access-token-sys"]
                
                if not token_:
                    return jsonify({'message': 'a valid token is missing'})
                try:
                    data = jwt.decode(token_, app.config['SECRET_KEY'], algorithms=["HS256"])
                    user_id = data["id"]
                except:
                    return jsonify({'message': 'token is invalid'})
            
                return f(user_id, *args, **kwargs)
            else:
                return f(None, *args, **kwargs)
        return wrapper
    return decorator