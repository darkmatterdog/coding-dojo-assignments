from flask import Flask, render_template

app = Flask(__name__)


def render_checkerboard(height,width,color1,color2):
    board_layout = []
    next_color = color1

    for row in range(height):
        row_list = []

        # alternating colors
        for column in range(width):
            row_list.append(next_color)
            if next_color == color1:
                next_color = color2
            else:
                next_color = color1
        board_layout.append(row_list)

        # ensures proper patterning on new lines
        if row_list[-0] == color1:
            next_color = color2
        else:
            next_color = color1
        print(next_color)
    print(board_layout)
    return render_template("board.html", board=board_layout, color1=color1, color2=color2)




@app.route('/')
def index():
    return render_checkerboard(10,10,"red","black")

@app.route('/<int:height>')
def boardheight(height):
    return render_checkerboard(height,10,"red","black")

@app.route('/<int:height>/<int:width>')
def boarddimensions(height, width):
    return render_checkerboard(height,width,"red","black")

@app.route('/<int:height>/<int:width>/<string:color1>/<string:color2>')
def boardcolors(height, width, color1, color2):
    return render_checkerboard(height, width, color1, color2)

if __name__ == "__main__":
    app.run(debug=True)