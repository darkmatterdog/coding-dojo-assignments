from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, request, session
from flask_app import app
from flask_app.models.user import User
import re


class Recipe():
    def __init__(self, data):
        self.id = data['id'],
        self.user_id = data['user_id'],
        self.name = data['name'],
        self.description = data['description'],
        self.instructions = data['instructions'],
        self.under_30 = data['under_30']
        self.cooked_on = data['cooked_on'],
        self.created_at = data['created_at'],
        self.updated_at = data['updated_at']


    @classmethod
    def create_recipe(cls, data):
        query = "INSERT INTO recipes (user_id, name, description, instructions, under_30, cooked_on) VALUES (%(user_id)s, %(name)s, %(description)s, %(instructions)s, %(under_30)s, %(cooked_on)s);"
        return connectToMySQL('recipesdb').query_db(query, data)


    @classmethod
    def get_recipe(cls, id):
        input_id = {
            'id': id
        }

        query = "SELECT * FROM recipes WHERE id=%(id)s;"

        return connectToMySQL('recipesdb').query_db(query, input_id)


    @classmethod
    def get_recipe_with_user(cls, id):
        input_id = {
            'id': id
        }


        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id WHERE recipes.id = %(id)s;"
        result = connectToMySQL('recipesdb').query_db(query, input_id)


        this_recipe = {
            **result[0],
            "cooked_by": (f"{result[0]['first_name']} {result[0]['last_name']}")
        }
        print(this_recipe)

        return this_recipe




    @classmethod
    def get_all_recipes(cls):
        query = "SELECT * FROM recipes JOIN users ON recipes.user_id = users.id;"
        result = connectToMySQL('recipesdb').query_db(query)

        all_recipes = []

        for recipe in result:
            current_recipe = cls(recipe)
            user_data = {
                **recipe,
                "created_at": recipe['users.created_at'],
                "updated_at": recipe['users.updated_at'],
                "id": recipe['users.id']
            }
            current_user = User(user_data)
            current_recipe.user = current_user
            all_recipes.append(current_recipe)
        return all_recipes


    @classmethod
    def edit_recipe(cls, data):
        query = "UPDATE recipes SET name=%(name)s, description=%(description)s, instructions=%(instructions)s, under_30=%(under_30)s, cooked_on=%(cooked_on)s);"

        return connectToMySQL('recipesdb').query_db(query, data)



    @classmethod
    def delete_recipe(cls, id):

        del_id = {
            'id': id
        }

        query = "DELETE FROM recipes WHERE id=%(id)s"
        return connectToMySQL("recipesdb").query_db(query, del_id)




    @staticmethod
    def validate_recipe(data):
        is_valid = True

        if len(data['name']) < 3:
            is_valid = False
            flash("Name must be at least 3 characters.", 'recipe_error')

        if len(data['description']) < 3:
            is_valid = False
            flash("Description must be at least 3 characters.", 'recipe_error')

        if len(data['instructions']) < 3:
            is_valid = False
            flash("Instructions must be at least 3 characters.", 'recipe_error')

        if data['cooked_on'] == "":
            is_valid = False
            flash("Please enter the date you cooked this meal.", 'recipe_error')



        return is_valid