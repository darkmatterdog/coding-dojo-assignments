// pizza oven
function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

// creation of the pizzas
var firstPizza = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
var secondPizza = pizzaOven("hand tossed", "marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
var thirdPizza = pizzaOven("extra bready","none",["bleu cheese"],["breadsticks"]);
var fourthPizza = pizzaOven("none","puddle",["parmesan"],["too much pepperoni","too many olives"])