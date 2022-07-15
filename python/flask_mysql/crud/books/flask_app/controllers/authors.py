from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.author import Author
from flask_app.models.book import Book


@app.route("/authors")
def all_authors():
    all_auth = Author.get_all()
    return render_template("/index.html", authors = all_auth)

@app.route("/authors/new", methods=["POST"])
def new_author():
    
    data = {
        'name': request.form["name"]
    }

    Author.save(data)
    return redirect("/authors")


@app.route("/author/<int:auth_id>")
def author_info(auth_id):
    books = Book.get_all()

    got_auth_info = Author.get(auth_id)
    author_faves = Author.get_author_favorites(auth_id)
    return render_template("authorinfo.html", author=got_auth_info, faves = author_faves, all_books = books)


@app.route("/authors/<int:auth_id>/addfavorite", methods=['post'])
def add_author_favorite(auth_id):
    book_id = request.form["book"][1]
    Author.add_author_favorite(book_id, auth_id)
    return redirect(f"/author/{auth_id}")