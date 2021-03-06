from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS  # comment this on deployment
from flask import render_template
from api.HelloApiHandler import HelloApiHandler

import time

app = Flask(__name__, static_url_path='', static_folder='frontend_ubuntu/build')
CORS(app)  # comment this on deployment
api = Api(app)


@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


api.add_resource(HelloApiHandler, '/flask/hello')


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/publish_topic')
def publish():
    return render_template('publisher.html')
