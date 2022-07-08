from crypt import methods
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key = "i am a very secret key"

# routes

@app.route('/')
def index():
    if 'counter' in session:
        session['counter'] = session['counter']+1
        print(session['counter'])
    else:
        session['counter'] = 0

        print(session['counter'])
    return render_template("index.html", counter=session['counter'])

@app.route('/count', methods=["POST"])
def counter():
    if 'counter' in session:
        session['counter'] = session['counter']+int(request.form['increment'])
    print(request.form)
    return redirect("/")

@app.route('/destroy_session', methods=["POST"])
def reset():
    print("Session cleared")
    session.clear()
    return redirect("/")



# run

if __name__=="__main__": 
    app.run(debug=True)