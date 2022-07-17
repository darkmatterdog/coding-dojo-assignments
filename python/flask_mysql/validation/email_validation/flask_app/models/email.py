from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

REGEX_EMAIL = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Email():
    def __init__(self, data):
        self.id = data['id'],
        self.address = data['address'],
        self.created_at = data['created_at'],
        self.updated_at = data['updated_at']



    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"

        results = connectToMySQL('maildb').query_db(query)

        emails = []

        for email in results:
            emails.append(cls(email))

        print(emails)
        return emails


    @classmethod
    def save(cls, data):
        query = "INSERT INTO emails (address) VALUES (%(address)s);"
        return connectToMySQL('maildb').query_db(query, data)


    @staticmethod
    def validate_address(address):
        is_valid = True

        if not REGEX_EMAIL.match(address):
            is_valid = False
            flash("Invalid address given.", 'error')

        return is_valid