// How to swap variables
var fruit1 = "apples";
var fruit2 = "oranges";

fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);
// expected output: apples and apples


var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp = apples
fruit1 = fruit2; // fruit1 = oranges
fruit2 = temp; // fruit2 = apples

console.log(fruit2 + " and " + fruit1);
// expected output: apples and oranges


// While loops
var start = 0;
var end = 12;

while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}
// expected output: start: 0, end: 12; start: 2, end: 10; start: 4, end: 8
// how is it different from an for loop? while loop goes continuously, different structure, lies between if and for in some ways



// Reversing an Array
// Write a function, reverse(arr), that reverses the given array.

var givenArray = ["a", "b", "c", "d", "e"];

function reverse(arr){
    var temp = [];
    for(var i = arr.length-1; i >=0; i--){
        temp.push(arr[i]);
    }
    return temp;
}

console.log(reverse(givenArray));