from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "secretsecretsecret"

@app.route('/')         
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])         
def form_process():
    session['strawberries'] = int(request.form['strawberry'])
    session['raspberries'] = int(request.form['raspberry'])
    session['apples'] = int(request.form['apple'])
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['total_fruits'] = session['strawberries'] + session['raspberries'] + session['apples']

    if request.form['student_id'] != '':
        session['student_id'] = request.form['student_id']
    else:
        session['student_id'] = 'Not Provided'
    
    print(f"Charging {session['first_name']} {session['last_name']} for {session['total_fruits']} fruits.")
    return redirect("/checkout")

@app.route('/checkout')
def checkout():
    return render_template("checkout.html", 
    strawberry = session['strawberries'], 
    raspberry = session['raspberries'],
    apple = session['apples'],
    first_name = session['first_name'],
    last_name = session['last_name'],
    total_fruits = session['total_fruits'],
    student_id = session['student_id']
    )

@app.route('/fruits')         
def fruits():
    return render_template("fruits.html")

if __name__=="__main__":   
    app.run(debug=True)  