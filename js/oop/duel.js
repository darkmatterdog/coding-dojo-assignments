class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power;
        this.res = res;
    }

    attack(target){
        this.res -= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude, text){
        super(name, cost)
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;
    }

    play(target){
        if(target instanceof Unit){
            console.log(this.text);
            if(this.stat == "Power"){
                target.power += this.magnitude;
            }
            else if(this.stat == "Resilience"){
                target.res += this.magnitude;
            }
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "Resilience", 3, "Increases target resistance by 3.");
const promiseRejection = new Effect("Hard Algorithm", 1, "Resilience", -2, "Reduces target resistance by 2.");
const pairProgramming = new Effect("Pair Programming", 3, "Power", 2, "Increases target power by 2.");


hardAlgorithm.play(redBeltNinja)
promiseRejection.play(redBeltNinja)
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);