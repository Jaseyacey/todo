# add flask
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token
from flask_jwt_extended import get_jwt_identity

auth = Blueprint('auth', __name__)

@auth.route('/refresh', methods=['POST'])
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    return jsonify(access_token=access_token), 200


@auth.route('/register', methods=['POST'])
def register():
    return jsonify({"msg": "register"}), 200
