// 1. Always Hungry

function alwaysHungry(arr) {
    var foodPresent = false;
    for(var i=0; i < arr.length; i++){
        if(arr[i] == "food"){
            foodPresent = true;
            console.log("yummy")
        }
    }
    if(foodPresent == false){
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);



// 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);



// 3. Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++){
        sum += arr[i];
    }
    var average = (sum/arr.length);
    
    // count how many values are greated than the average
    var count = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i] > average){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);



// 4. Array Reverse
function reverse(arr) {
    var reverseArray = [];
    for(var i = arr.length-1; i >= 0; i--){
        reverseArray.push(arr[i]);
    }
    return reverseArray;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result);



// 5. Fibonacci Array
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i = 0; i < n-2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result);