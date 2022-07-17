from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config import mysqlconnection
from flask_app.models.survey import Dojo

@app.route('/')
def index():
    return render_template("index.html")


# refactor to db
@app.route('/process', methods=['POST'])
def form_process():

    data = {
        'name': request.form['name'],
        'location': request.form['location'],
        'language': request.form['language'],
        'comments': request.form['comments']
    }

    if(Dojo.validate(data)):
        Dojo.save(data)
        return redirect("/result")
    return redirect("/")



# refactor to db
@app.route('/result')
def result():
    result = Dojo.get_last()
    return render_template("result.html", results=result)
