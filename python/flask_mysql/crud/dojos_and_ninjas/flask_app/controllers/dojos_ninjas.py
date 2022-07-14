from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojos import Dojo 
from flask_app.models.ninjas import Ninja

@app.route("/")
def index():
    return redirect("/dojos")


@app.route("/dojos")
def ninjas():
    all_dojos = Dojo.get_all()
    print(all_dojos)
    return render_template("index.html", dojos=all_dojos)


@app.route("/dojos/new", methods=['POST'])
def new_dojo():
    
    data = {
        "name": request.form['name']
    }
    Dojo.save(data)
    return redirect("/dojos")


@app.route("/dojos/<int:dojo_id>")
def show_dojo(dojo_id):

    input_id = {
        "id": dojo_id
    }

    dojo = Dojo.get_dojos_with_ninjas(input_id)
    print(dojo)
    print(dojo.ninjas)
    return render_template("showdojo.html", dojo=dojo)



@app.route("/dojos/newninja")
def new_ninja():
    dojos = Dojo.get_all()
    return render_template("newninja.html", dojos=dojos)


@app.route("/dojos/newninja/process", methods=['post'])
def new_ninja_process():
    
    data = {
        "first_name": request.form['firstname'],
        "last_name": request.form['lastname'],
        "age": request.form['age'],
        "dojo_id": request.form['dojo']
    }
    Ninja.save(data)
    redir_id = data["dojo_id"]
    return redirect("/dojos/"+redir_id)

