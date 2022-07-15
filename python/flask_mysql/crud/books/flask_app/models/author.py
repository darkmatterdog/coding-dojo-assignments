from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import book
from flask import flash

class Author():
    def __init__(self, data):
        self.id = data['id'],
        self.name = data['name'],
        self.favorites = [],

        self.created_at = data['created_at'],
        self.updated_at = data['updated_at']


    @classmethod
    def get(cls, id):
        input_id = {
            "id": id
        }
        query = "SELECT * FROM authors WHERE id=%(id)s;"
        return connectToMySQL('books').query_db(query, input_id)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors"
        all_authors = []

        result = connectToMySQL('books').query_db(query)
        for author in result:
            all_authors.append(cls(author))

        return all_authors

    @classmethod
    def save(cls, data):
        query = "INSERT INTO authors (name) VALUES (%(name)s);"
        return connectToMySQL("books").query_db(query, data)


    @classmethod
    def get_author_favorites(cls,id):
        input_id = {
            "id": id
        }

        query = "SELECT * FROM authors LEFT JOIN favorites ON favorites.author_id = authors.id LEFT JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s;"

        result = connectToMySQL('books').query_db(query, input_id)

        author = cls(result[0])
        for row in result:
            book_info = {
                "id": row['id'],
                "title": row['title'],
                "num_of_pages": row['num_of_pages'],

                "created_at": row['created_at'],
                "updated_at": row['updated_at']
            }
            author.favorites[0].append(book.Book(book_info))


        return author.favorites[0]


    @classmethod
    def add_author_favorite(cls, book_id, author_id):
        id_in = {
            "book_id": book_id,
            "author_id": author_id
        }

        query= "INSERT INTO favorites (book_id, author_id) VALUES (%(book_id)s, %(author_id)s)"

        return connectToMySQL("books").query_db(query, id_in)