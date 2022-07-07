from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play')
def index():
    return render_template("game.html", num=3, color="skyblue")

@app.route('/play/<int:num>/')
def box_display(num):
    return render_template("game.html", num=num, color="skyblue")

@app.route('/play/<int:num>/<string:color>')
def color_box_display(num, color):
    return render_template("game.html", num=num, color=color)

if __name__ == "__main__":
    app.run(debug=True)

