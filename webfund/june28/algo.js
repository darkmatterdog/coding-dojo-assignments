// Math Library: Predict what each of the following will return. Can we predict the variable random?
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
console.log(floor);
console.log(ceiling);
console.log(random);

//predicted outcome: 
// 1
// 4
// (0-1)


// Dice Roller: Using what we've learned about the Math library in JavaScript, 
// complete the following function that should return a value between 1 through 6 at random.
function d6() {
    var roll = Math.ceil(Math.random() * 6);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);




// What are objects?
// Using the monster variable above how could we access the name?
// Using the monster variable above how could we access the 2nd type?

var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// monster.name
// monster.types[1]: grass


// Arrays of Objects
var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// If we wanted to console.log the names of the pokémon who have an id greater than 99 we could...
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
}


//Challenges - using the array of pokémon above and loops:

// console.log the pokémon objects whose id is evenly divisible by 3
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].id % 3) {
        console.log(pokémon[i].name);
    }
}


// // console.log the pokémon objects that have more than one type
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length > 1) {
        console.log(pokémon[i].name);
    }
}

// console.log the names of the pokémon whose only type is "poison"
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length < 2 && pokémon[i].types[0] == "poison") {
        console.log(pokémon[i].name);
    }
}

// console.log the first type of all the pokémon whose second type is "flying"
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types[1] == "flying") {
        console.log(pokémon[i].name);
    }
}

// Bonus Challenge: console.log the reverse of the names of the pokémon whose only type is "poison"
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length < 2 && pokémon[i].types[0] == "poison") {
        var reverseName = "";
        for(var z = pokémon[i].name.length - 1; z >= 0; z--){
            reverseName = reverseName + pokémon[i].name.charAt(z);
        }
        console.log(reverseName);
    }
}