from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import author
from flask import flash

class Book():
    def __init__(self, data):
        self.id = data['id'],
        self.title = data['title'],
        self.num_of_pages = data['num_of_pages'],
        self.favorited_by = [],

        self.created_at = data['created_at'],
        self.updated_at = data['updated_at']

    @classmethod
    def get(cls, id):
        input_id = {
            "id": id
        }
        query = "SELECT * FROM books WHERE id=%(id)s;"
        return connectToMySQL('books').query_db(query, input_id)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books"
        all_books = []

        result = connectToMySQL('books').query_db(query)
        for book in result:
            all_books.append(cls(book))

        return all_books

    @classmethod
    def save(cls, data):
        query = "INSERT INTO books (title, num_of_pages) VALUES (%(title)s, %(num_of_pages)s);"
        return connectToMySQL("books").query_db(query, data)



    @classmethod
    def get_book_favorites(cls, id):

        input_id = {
            "id": id
        }

        query = "SELECT * FROM books LEFT JOIN favorites ON favorites.book_id = books.id LEFT JOIN authors ON favorites.author_id = authors.id WHERE books.id = %(id)s;"

        result = connectToMySQL('books').query_db(query, input_id)

        book = cls(result[0])
        for row in result:
            author_info = {
                "id": row['id'],
                "name": row['name'],

                "created_at": row['created_at'],
                "updated_at": row['updated_at']
            }
            book.favorited_by[0].append(author.Author(author_info))
        return book.favorited_by[0]


    @classmethod
    def add_book_favorite(cls, book_id, author_id):
        id_in = {
            "book_id": book_id,
            "author_id": author_id
        }

        query= "INSERT INTO favorites (book_id, author_id) VALUES (%(book_id)s, %(author_id)s)"

        return connectToMySQL("books").query_db(query, id_in)