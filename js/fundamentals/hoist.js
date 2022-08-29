// 1
var hello;
console.log(hello);
hello = "world";

// 2
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

// 3
var brendan = 'super cool';

/* function print(){ never called!
    brendan = 'only okay';
    console.log(brendan);
} */

console.log(brendan);

// 4
var food = 'chicken';
console.log(food);
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
eat();

// 5
// console.log(food) - food never declared in global scale
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log(food);

// 6
var genre;
console.log(genre);
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

// 7
var dojo;
dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

/* 8 - breaks due to assignment to const
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0)); */