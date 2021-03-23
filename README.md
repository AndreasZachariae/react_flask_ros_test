    
### Install Node.js (Version 10.x for compatibility with rclnodejs)
    sudo apt install nodejs
    curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt-get install -y nodejs


### Create new React project

    npx create-react-app my-app
    cd my-app

### Run React test server
    npm start

### Create virtual environment

    (Windows) python -m venv venv
    (Windows) venv\Scripts\activate.bat

    (Linux) python3 -m venv venv
    (Linux) source venv/bin/activate

Dependencies:

    pip install flask
    pip install flask_restful
    pip install flask_cors
    pip install python-dotenv

    pip freeze >> requirements.txt

    pip install -r requirements.txt

(not neccessary if already in .flaskenv file)

    (Windows Powershell) $env:FLASK_APP = "app.py"

### Build react in ./frontend/

    npm install axios
    npm install @material-ui/core
    npm install --save react-helmet
    npm run build

## Run flask backend

    (Windows) python -m flask run
    (Linux) flask run

## Install ros2-web-tools

Version 0.2.7 is neccessary to run without spinOnce error

download from https://github.com/RobotWebTools/ros2-web-bridge/releases/tag/0.2.7

    # (v3.0) git clone https://github.com/RobotWebTools/ros2-web-bridge.git

    cd ros2-web-bridge-0.2.7
    source /opt/ros/$DISTRO/setup.sh  # or a source installation

in package.json change dependecy to 

    # (only for v3.0) "rclnodejs": "^0.10.3"

    npm install

## Run ros2-web-bridge

    source /opt/ros/$DISTRO/setup.sh  # or a source installation
    node bin/rosbridge.js