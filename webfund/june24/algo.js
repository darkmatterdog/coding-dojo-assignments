// Problem 1
var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);
// output: 5, 15


// Problem 2
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there"); // unreachable!
}
    
console.log(x);
var result = addToX(-10); // result = -5
console.log(result);
console.log(x);
// output: 5, -5, 5


// Problem 3
function isPal(array) {
    for(var left=0; left<array.length/2; left++) {
        var right = array.length-1-left;
        if(array[left] != array[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}

var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
// output: Not a pal-indrome!
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
// output: Pal-indrome!