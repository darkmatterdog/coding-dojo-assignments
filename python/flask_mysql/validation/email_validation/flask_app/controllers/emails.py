from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config import mysqlconnection
from flask_app.models.email import Email


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/new", methods=['post'])
def new_email():

    data = {
        'address': request.form['email']
    }

    if not (Email.validate_address(data['address'])):
        return redirect("/")

    Email.save(data)
    flash("Successfully saved email address.", 'success')
    return redirect("/mails")


@app.route("/mails")
def all_mail():

    mails = Email.get_all()
    return render_template("allemail.html", mail = mails)

