from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.user import User

@app.route("/")
def index():
    return redirect("/users")



@app.route("/users")
def users():
    users = User.get_all()
    print(users)
    return render_template("readall.html", users=users)



@app.route("/users/new")
def new_user():
    return render_template("create.html")


@app.route("/users/new/process", methods=['POST'])
def process_form():


    data = {
        "first_name": request.form['firstname'],
        "last_name": request.form['lastname'],
        "email": request.form['email']
    }
    print(data)
    User.save(data) 
    return redirect("/users")




@app.route("/users/<int:id>")
def show_user(id):
    input_id = {"id": id}
    selected_user = User.get(input_id)
    print(selected_user)
    return render_template("readone.html", user=selected_user[0])


@app.route("/users/edit/<int:id>")
def edit_user(id):
    input_id = {"id": id}
    selected_user = User.get(input_id)
    print(selected_user)
    return render_template("update.html", user=selected_user[0])


@app.route("/users/edit/<int:id>/process", methods=['POST'])
def process_edit(id):
    data = {
        "id": id,
        "first_name": request.form['firstname'],
        "last_name": request.form['lastname'],
        "email": request.form['email']
    }

    print(data)
    User.update(data)
    print(f"User with ID {id} updated.")

    return redirect("/users/"+str(id))





@app.route("/users/delete/<int:id>")
def delete_user(id):

    user_id = { 'id': id }

    User.delete(user_id)
    print(f"User with ID {id} deleted.")
    return redirect("/users")