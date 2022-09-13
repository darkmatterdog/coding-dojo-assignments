// SANTA'S NAUGHTY LIST

// data init
const students = [
    {
        firstName: "Alex",
        lastName: "Miller",
        habits: ["doesn't wash dishes","falls asleep in lecture","shows up early"],
    },
    {
        firstName: "Martha",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Roger",
        lastName: "Anderson",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Rick",
        lastName: "James",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];





/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyList(persons, badHabit) {
    let output = [];
    for(person of persons){
        for(habit of person.habits){
            if(habit == badHabit){
                output.push(`${person.firstName} ${person.lastName}`);
                continue;
            }
        }
    }
    return output;
}


/**
 * Finds a list of people whose habits contain the given bad habit. (with added functional programming!)
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */
function santasNaughtyListFunctional(persons, badHabit) {
    let naughtyList = persons.filter((p) => p.habits.includes(badHabit));
    return naughtyList.map((p) => `${p.firstName} ${p.lastName}`)
}



// ## TEST CASES ##
const badHabit1 = "doesn't wash dishes";
const badHabit2 = "shows up late";
const badHabit3 = "vapes too much";

console.log(santasNaughtyList(students, badHabit1));
console.log(santasNaughtyList(students, badHabit2));
console.log(santasNaughtyList(students, badHabit3));



console.log(santasNaughtyListFunctional(students, badHabit1));
console.log(santasNaughtyListFunctional(students, badHabit2));
console.log(santasNaughtyListFunctional(students, badHabit3));