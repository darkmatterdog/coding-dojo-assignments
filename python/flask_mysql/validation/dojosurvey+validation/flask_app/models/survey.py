from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo():
    def __init__(self, data):
        self.name = data['name'],
        self.location = data['location'],
        self.language = data['language'],
        self.comments = data['comments']


    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name, location, language, comment) VALUES (%(name)s, %(location)s, %(language)s, %(comments)s);"
        return connectToMySQL('dojo_survey').query_db(query, data)

    @classmethod
    def get(cls,id):
        query = "SELECT * FROM dojos WHERE id=%(id)s;"
        return connectToMySQL('dojo_survey').query_db(query,id)


    @classmethod
    def get_last(cls):
        query = "SELECT * FROM dojos ORDER BY dojos.id DESC LIMIT 1;"
        results = connectToMySQL('dojo_survey').query_db(query)
        print(results[0])
        return results[0]


    @staticmethod
    def validate(data):
        is_valid = True
        print(data)
        if(len(data['name']) > 45 or len(data['name']) < 1):
            is_valid = False
            flash("Invalid name. (Must be between 1-45 characters.)")

        if(data['location'] == '-1'):
            is_valid = False
            flash("Please select a location.")

        if(data['language'] == '-1'):
            is_valid = False
            flash("Please select a language.")

        if(len(data['comments']) > 45 or len(data['comments']) < 1):
            is_valid = False
            flash("Invalid comments. (Must be between 1-255 characters.)")
        
        return is_valid