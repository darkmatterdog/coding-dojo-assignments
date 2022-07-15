from flask_app import app
from flask import render_template, redirect, request
from flask_app.controllers import books
from flask_app.models.book import Book
from flask_app.models.author import Author


@app.route("/books/")
def all_books():
    all_books = Book.get_all()
    return render_template("books.html", books=all_books)

@app.route("/books/new", methods=["POST"])
def new_book():

    data = {
        "title": request.form["title"],
        "num_of_pages": request.form["num_of_pages"]
    }

    Book.save(data)

    return redirect("/books")



@app.route("/books/<int:book_id>")
def book_info(book_id):
    authors = Author.get_all()
    got_book = Book.get(book_id)
    book_faves = Book.get_book_favorites(book_id)
    print(book_faves)
    return render_template("bookinfo.html", book=got_book, faves = book_faves, all_authors = authors)



@app.route("/books/<int:book_id>/addfavorite", methods=['post'])
def add_book_favorite(book_id):
    auth_id = request.form["author"][1]
    Book.add_book_favorite(book_id, auth_id)
    return redirect(f"/books/{book_id}")