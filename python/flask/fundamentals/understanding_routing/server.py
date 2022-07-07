from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World!"

@app.errorhandler(404)
def not_found(e):
    return "No response. Please try again."

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<string:name>')
def say_name(name):
    return f"Hi {name}!"


@app.route('/repeat/<int:iter>/<string:repeat>')
def repeater(iter, repeat):
    return (repeat+"<br>")*iter





if __name__ == "__main__":
    app.run(debug=True)

