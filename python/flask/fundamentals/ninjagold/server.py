from urllib import response
import random
from datetime import datetime
from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "theres a secret key in them thar hills"

@app.route('/')         
def index():
    if not session.get('gold'):
        session['activity'] = []
        session['gold'] = 0

    return render_template("index.html", gold=session['gold'], activity=session['activity'])

    # reset route for debugging
@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')





@app.route('/process_money', methods=['POST'])
def process():
    print(request.form)

    if(request.form['building'] == 'farm'):
        earned_gold = random.randint(10,20)
        session['gold'] += earned_gold
        session['activity'].append(f"Earned {earned_gold} gold from the farm. ({datetime.now()})")

    elif(request.form['building'] == 'cave'):
        earned_gold = random.randint(5,10)
        session['gold'] += earned_gold
        session['activity'].append(f"Earned {earned_gold} gold from the cave. ({datetime.now()})")


    elif(request.form['building'] == 'house'):
        earned_gold = random.randint(2,5)
        session['gold'] += earned_gold

        session['activity'].append(f"Earned {earned_gold} gold from the house. ({datetime.now()})")

    elif(request.form['building'] == 'casino'):
        earned_gold = random.randint(-50,50)
        session['gold'] += earned_gold

        if earned_gold > 0:
            session['activity'].append(f"Earned {earned_gold} gold from the casino. ({datetime.now()})")
        else:
            session['activity'].append(f"Lost {-earned_gold} gold from the casino. ({datetime.now()})")


    return redirect("/")


if __name__=="__main__":   
    app.run(debug=True)  