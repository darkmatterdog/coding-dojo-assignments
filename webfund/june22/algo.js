// Morning Algorithms, Day 2, 6/22/22

// Lesson 1 - Predict output
var a = 25; // a = 25
a = a - 13; // a = 12
console.log(a/2); // output = 6
a = "hello"; // a = "hello"
console.log(a + " hello"); // output = "hello hello"




// Lesson 2 - Predict loops
for(var i=0; i<10; i++) {
    console.log(i); // output = 0,4,8
    i = i + 3; // i = 3,7,11
}
console.log("outside of the loop " + i); // output = "outside of the loop 12"




// Lesson 3 - Predict what code does
function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];
    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }
    console.log("the total is: " + sum);
}
getTotal([1, 3, 5]);  // output = "the current sum is [2,5,10]", "the total is 10"