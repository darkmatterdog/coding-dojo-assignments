from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, request, session
from flask_bcrypt import Bcrypt
from flask_app import app
import re

VALID_EMAIL = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
bcrypt = Bcrypt(app)


class User():
    def __init__(self, data):
        self.id = data['id'],
        self.first_name = data['first_name'],
        self.last_name = data['last_name'],
        self.email = data['email'],
        self.password = data['password'],
        self.created_at = data['created_at'],
        self.updated_at = data['updated_at']


    # create
    @classmethod
    def create_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        return connectToMySQL("recipesdb").query_db(query, data)
    

    # read
    @classmethod
    def read_user(cls, id):

        input_id = {
            'id': id
        }

        query = "SELECT * FROM users WHERE id=%(id)s;"
        return connectToMySQL('recipesdb').query_db(query, input_id)

    @classmethod
    def read_all_users(cls):

        query = "SELECT * FROM users;"

        all_users = []

        db_result = connectToMySQL('recipesdb').query_db(query)

        for user in db_result:
            all_users.append(cls(user))

        return all_users


    @classmethod
    def get_by_email(cls, in_email):

        email = {
            "email": in_email
        }

        query = "SELECT * FROM users WHERE email = %(email)s;"

        return connectToMySQL("recipesdb").query_db(query, email)




    # registration validation
    @staticmethod
    def validate_registration(data):
        is_valid = True

        if len(data['first_name']) > 64 or len(data['first_name']) < 2:
            is_valid = False
            flash("Invalid first name. (Must be between 2-64 characters.)", 'registration_error')

        if len(data['last_name']) > 64 or len(data['last_name']) < 2:
            is_valid = False
            flash("Invalid last name. (Must be between 2-64 characters.)", 'registration_error')

        if len(data['email']) > 128 or not VALID_EMAIL.match(data['email']):
            is_valid = False
            flash("Invalid email address.", 'registration_error')

        if not User.get_by_email(data['email']) == ():
            is_valid = False
            flash("Email address already registered.", 'registration_error')


        if data['password_in'] == "":
            is_valid = False
            flash("Please enter a password.", "registration_error")

        elif len(data['password_in']) < 8:
            is_valid = False
            flash("Minimum password length is 8 characters. Please try again.", "registration_error")

        elif not data['password_in'] == data['password_confirm']:
            is_valid = False
            flash("Passwords do not match.", 'registration_error')

        return is_valid




    # login validation
    @staticmethod
    def validate_login(data):
        is_valid = True
        user_record = User.get_by_email(data['email'])

        if data['email'] == "" or not VALID_EMAIL.match(data['email']):
            is_valid = False
            flash("Please enter a valid email address.", "login_error")
        
        elif data['password'] == "":
            is_valid = False
            flash("Please enter a password.", "login_error")
        
        elif user_record == ():
            is_valid = False
            flash("Account not found.", 'login_error')
        

        elif not bcrypt.check_password_hash(user_record[0]['password'], data['password']):
            is_valid = False
            flash("Incorrect password.", 'login_error')

        return is_valid