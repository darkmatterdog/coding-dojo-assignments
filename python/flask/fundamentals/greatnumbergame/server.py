from random import random
from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = "secretkeythroughthemountain"


@app.route('/')         
def index():
    if not (session.get('number_to_guess')):
        session['last_guess'] = -1   
        session['number_to_guess'] = random.randint(1,100)
        session['number_of_guesses'] = 0

    print(session['number_to_guess'], session['last_guess'])
    return render_template("index.html", guess=session['last_guess'], numToGuess=session['number_to_guess'], numGuesses = session["number_of_guesses"])

@app.route('/guess', methods=['post'])
def process_guess():
    if(request.form['guessbox'] == ''):
        return redirect('/')

    session['last_guess'] = int(request.form['guessbox'])
    session['number_of_guesses'] += 1
    return redirect('/')

@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)  