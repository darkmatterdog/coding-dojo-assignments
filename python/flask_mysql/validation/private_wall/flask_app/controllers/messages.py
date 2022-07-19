from flask_app.models.user import bcrypt
from flask import Flask, render_template, redirect, request, flash, session
from flask_app import app
from flask_app.models.user import User
from flask_app.models.message import Message
from flask_app.config.mysqlconnection import connectToMySQL


@app.route("/message/send", methods=['post'])
def send_message():

    message_data = {
        "sender_id": session['id'],
        "recipient_id": request.form['recipient'],
        "sender_name": (f"{session['first_name']} {session['last_name']}"),
        "message_content": request.form['message']
    }

    if(Message.validate_message(message_data)):
        query = "INSERT INTO messages (sender_id, recipient_id, sender, message_content) VALUES (%(sender_id)s, %(recipient_id)s, %(sender_name)s, %(message_content)s);"
        connectToMySQL('userdb').query_db(query, message_data)
        print("Message sent.")
    else:
        flash("Message must be greater than 5 characters.", "message_error")

    return redirect("/dashboard")



@app.route("/message/<int:message_id>/delete")
def delete_message(message_id):
    in_id = {
        "message_id": message_id
    }

    query = "DELETE FROM messages WHERE id=%(message_id)s"
    connectToMySQL('userdb').query_db(query, in_id)
    print("Message deleted successfully.")
    return redirect("/dashboard")