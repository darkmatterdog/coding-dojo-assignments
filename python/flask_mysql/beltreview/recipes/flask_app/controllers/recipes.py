from flask_app import app
from flask_app.controllers import users
from flask_app.models.recipe import Recipe
from flask import Flask, render_template, redirect, request, flash, session

@app.route("/recipes")
def recipes():
    if("id" not in session):
        flash("You are not logged in.", "login_error")
        return redirect("/")

    all_recipes = Recipe.get_all_recipes()

    return render_template("recipes.html", this_user=session, recipes=all_recipes)


@app.route("/recipes/new")
def new_recipe():
    if("id" not in session):
        flash("You are not logged in.", "login_error")
        return redirect("/")
    return render_template("create_recipe.html", this_user=session)


@app.route("/recipes/create", methods=['post'])
def create_recipe():

    print(request.form)

    recipe = {
        "user_id": session['id'],
        "name": request.form['name'],
        "description": request.form['description'],
        "instructions": request.form['instructions'],
        "under_30": request.form["under_30"],
        "cooked_on": request.form['cooked_on']
    }

    if Recipe.validate_recipe(recipe):
        Recipe.create_recipe(recipe)
        print("Recipe created.")
        return redirect("/recipes")
    
    return redirect("/recipes/new")


@app.route("/recipes/<int:recipe_id>")
def view_recipe(recipe_id):
    this_recipe = Recipe.get_recipe_with_user(recipe_id)
    return render_template("view_recipe.html", this_user=session, recipe=this_recipe)


@app.route("/recipes/edit/<int:recipe_id>")
def edit_recipe(recipe_id):
    if("id" not in session):
        flash("You are not logged in.", "login_error")
        return redirect("/")

    this_recipe = Recipe.get_recipe(recipe_id)
    if this_recipe[0]['user_id'] != session['id']:
        print("WARN: User tried to edit non-owned recipe")
        return redirect("/recipes")

    return render_template("edit_recipe.html", this_user=session, recipe=this_recipe)


@app.route("/recipes/edit/<int:recipe_id>/submit", methods=['post'])
def submit_recipe_edit(recipe_id):
    if("id" not in session):
        flash("You are not logged in.", "login_error")
        return redirect("/")
    
    updated_recipe = {
        "user_id": session['id'],
        "name": request.form['name'],
        "description": request.form['description'],
        "instructions": request.form['instructions'],
        "under_30": request.form["under_30"],
        "cooked_on": request.form['cooked_on']
    }

    if Recipe.validate_recipe(updated_recipe):
        Recipe.edit_recipe(recipe_id)
        print("Updated recipe successfully.")
        return redirect("/recipes")
    return redirect(f"/recipes/edit/{recipe_id}")


@app.route("/recipes/delete/<int:recipe_id>")
def delete_recipe(recipe_id):
    if("id" not in session):
        flash("You are not logged in.", "login_error")
        return redirect("/")

    this_recipe = Recipe.get_recipe(recipe_id)

    if this_recipe[0]['user_id'] != session['id']:
        print("WARN: User tried to delete non-owned recipe")
        return redirect("/recipes")

    Recipe.delete_recipe(recipe_id)
    print("Recipe deleted.")
    return redirect("/recipes")