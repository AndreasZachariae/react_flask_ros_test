## How to start new React project

    npx create-react-app my-app
    cd my-app
    npm start

Create virtual environment

    python -m venv venv
    venv\Scripts\activate.bat

    pip install flask
    pip install flask_restful
    pip install flask_cors
    pip install python-dotenv

    pip freeze >> requirements.txt

(not neccessary if already in .flaskenv file)

    $env:FLASK_APP = "app.py"

Build frontend in ./frontend/

    npm install axios
    npm run build

Run flask backend

    python -m flask run