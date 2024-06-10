# add flask
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token
from flask_jwt_extended import get_jwt_identity

nonauth = Blueprint('nonauth', __name__)

@nonauth.route('/api/login', methods=['POST'])
def login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)
    if username != 'test@test.com' or password != 'test':
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    refresh_token = create_refresh_token(identity=username)
    return jsonify(access_token=access_token, refresh_token=refresh_token), 200

@nonauth.route('/refresh', methods=['POST'])
def refresh():
    print("refresh")
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    return jsonify(access_token=access_token), 200

@nonauth.route('/api/register', methods=['POST'])
def register():
    return jsonify({"msg": "register"}), 200

@nonauth.route('/forgot', methods=['POST'])
def forgot():
    return jsonify({"msg": "forgot"}), 200

@nonauth.route('/reset', methods=['POST'])
def reset():
    return jsonify({"msg": "reset"}), 200

@nonauth.route('/verify', methods=['POST'])
def verify():
    return jsonify({"msg": "verify"}), 200

@nonauth.route('/logout', methods=['POST'])
def logout():
    return jsonify({"msg": "logout"}), 200

