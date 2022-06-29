// Nesting Arrays
var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];


function isPresent2D(arr2d, value){
    for(var i = 0; i <= (arr2d.length - 1); i++){
        for(var j = 0; j <= (arr2d[i].length - 1); j++){
            if(arr2d[i][j] == value) {
                return true;
            }
        }
    }
    return false;
}

console.log(isPresent2D(arr2d, 8));
console.log(isPresent2D(arr2d, 11));






// return a new array containing just the values from inside the sub-arrays.

function flatten(arr2d) {
    var flat = [];
    for(var i = 0; i <= (arr2d.length - 1); i++){
        for(var j = 0; j <= (arr2d[i].length - 1); j++){
            flat.push(arr2d[i][j]);
        }
    }    
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]