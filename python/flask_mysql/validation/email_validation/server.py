from flask_app import app
from flask_app.controllers import emails
from flask_app.config import mysqlconnection

if __name__=="__main__": 
    app.run(debug=True)