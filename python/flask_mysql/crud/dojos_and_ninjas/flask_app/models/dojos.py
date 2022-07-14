from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.ninjas import Ninja

class Dojo():
    def __init__(self, data):
        self.id = data['id'],
        self.name = data['name'],
        self.created_at = data['created_at'],
        self.updated_at = data['updated_at']

        self.ninjas = []

    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        return connectToMySQL('dojos and ninjas').query_db(query, data)




    @classmethod
    def get(cls,id):
        query = "SELECT * FROM dojos WHERE id=%(id)s;"
        return connectToMySQL('dojos and ninjas').query_db(query,id)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"

        results = connectToMySQL('dojos and ninjas').query_db(query)

        dojos = []

        for dojo in results:
            dojos.append(cls(dojo))

        return dojos


    @classmethod
    def get_dojos_with_ninjas(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"
        results = connectToMySQL("dojos and ninjas").query_db(query, data)

        dojo = cls(results[0])
        for db_row in results:
            ninja_data = {
                "id": db_row["ninjas.id"],
                "first_name": db_row['first_name'],
                "last_name": db_row['last_name'],
                "age": db_row['age'],
                "created_at": db_row['ninjas.created_at'],
                "updated_at": db_row['ninjas.updated_at']
            }
            dojo.ninjas.append(Ninja(ninja_data))
        
        return dojo