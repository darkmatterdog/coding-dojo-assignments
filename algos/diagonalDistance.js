// matrices
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];

function diagonalDistance(matrix){
    let leftToRight = rightToLeft = 0;
    let sideLength = matrix.length;

    for(var i = 0; i < sideLength; i++){
        leftToRight += matrix[i][i];
        rightToLeft += matrix[i][sideLength-i-1];
    }

    return Math.abs(leftToRight-rightToLeft);
}


// ## TEST CASES ##
console.log(diagonalDistance(squareMatrix1));
console.log(diagonalDistance(squareMatrix2));