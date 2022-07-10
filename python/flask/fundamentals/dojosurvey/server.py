from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)

app.secret_key = "i am cryptographically secure, definitely"

# routes

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def form_process():

    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    print(session)
    return redirect("/result")

@app.route('/result')
def result():
    print(session)
    return render_template("result.html",
        name = session['name'],
        location = session['location'],
        language = session['language'],
        comments = session['comments']
    )

# run

if __name__=="__main__": 
    app.run(debug=True)