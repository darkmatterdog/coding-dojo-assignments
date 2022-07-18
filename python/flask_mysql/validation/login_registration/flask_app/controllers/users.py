from flask_app.models.user import bcrypt
from flask import Flask, render_template, redirect, request, flash, session
from flask_app import app
from flask_app.models.user import User

@app.route("/")
def index():

    if 'username' in session:
        print("Already logged in, redirecting...")
        return redirect("/dashboard")

    return render_template("index.html")




@app.route("/register", methods=['post'])
def register():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "birthday": request.form['birthday'],
        "password_in": request.form['password'],
        "password_confirm": request.form['confirm_password']
    }


    if(User.validate_registration(data)):
        data['password'] = bcrypt.generate_password_hash(request.form['password'])
        User.create_user(data)
        session['username'] = data['email']
        print("Validation passed, user created and logged in. Redirecting to dashboard...")
        return redirect("/dashboard")

    print("Validation failed.")
    return redirect("/")




@app.route("/login", methods=['post'])
def login():

    login_data = {
        "email": request.form['login_email'],
        "password": request.form['login_password']
    }

    if(User.validate_login(login_data)):
        session['username'] = login_data['email']
        print("Logged in successfully. Redirecting to dashboard...")
        return redirect("/dashboard")

    print("Login failed.")
    return redirect("/")




@app.route("/logout")
def logout():
    session.clear()
    print("User logged out.")
    return redirect("/")




@app.route("/dashboard")
def dash():
    if("username" not in session):
        flash("You are not logged in.", "login_error")
        return redirect("/")
    return render_template("dashboard.html", this_user=session['username'])