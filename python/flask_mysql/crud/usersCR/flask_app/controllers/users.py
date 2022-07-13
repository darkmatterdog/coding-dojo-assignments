from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.user import User

@app.route("/")
def index():
    return redirect("/users")



@app.route("/users")
def users():
    users = User.get_all()
    print(users)
    return render_template("readall.html", users=users)


@app.route("/users/new")
def new_user():
    return render_template("create.html")


@app.route("/users/process", methods=['POST'])
def process_form():


    data = {
        "first_name": request.form['firstname'],
        "last_name": request.form['lastname'],
        "email": request.form['email']
    }
    print(data)
    User.save(data) 

    return redirect("/users")