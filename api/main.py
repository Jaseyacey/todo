from flask import Flask, jsonify
from flask_cors import CORS
import auth
import nonauth

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET'])
def api():
    return jsonify({"msg": "api"}), 200

# app.register_blueprint(auth.auth)
app.register_blueprint(nonauth.nonauth)
app.register_blueprint(auth.auth)

if __name__ == '__main__':
    app.run(debug=True, port=5002)
