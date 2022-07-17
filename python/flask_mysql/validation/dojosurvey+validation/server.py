from flask_app import app
from flask_app.controllers import surveys
from flask_app.models import survey

if __name__=="__main__": 
    app.run(debug=True)