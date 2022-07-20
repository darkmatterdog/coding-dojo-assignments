from flask_app.models.user import bcrypt
from flask import Flask, render_template, redirect, request, flash, session
from flask_app import app
from flask_app.models.user import User

@app.route("/")
def index():

    if 'user_id' in session:
        print("Already logged in, redirecting...")
        return redirect("/recipes")

    return render_template("index.html")




@app.route("/register", methods=['post'])
def register():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email'],
        "password_in": request.form['password'],
        "password_confirm": request.form['confirm_password']
    }


    if(User.validate_registration(data)):
        data['password'] = bcrypt.generate_password_hash(request.form['password'])
        new_user = User.create_user(data)
        flash("Account created. You can now log in.", 'message_success')
        return redirect("/")

    print("Validation failed.")
    return redirect("/")




@app.route("/login", methods=['post'])
def login():

    login_data = {
        "email": request.form['login_email'],
        "password": request.form['login_password']
    }

    if(User.validate_login(login_data)):

        user_info = User.get_by_email(login_data['email'])[0]

        for key in user_info:
            session[key] = user_info[key]

        print("Logged in successfully. Redirecting to recipes...")
        return redirect("/recipes")

    print("Login failed.")
    return redirect("/")




@app.route("/logout")
def logout():
    session.clear()
    print("User logged out.")
    flash("Logged out successfully. See you soon!", 'message_success')
    return redirect("/")


