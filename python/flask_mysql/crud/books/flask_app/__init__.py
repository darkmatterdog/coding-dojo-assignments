from flask import Flask, render_template, redirect, request

app = Flask(__name__)
app.secret_key = "oh so very secret"

@app.route("/")
def index():
    return redirect("/authors")