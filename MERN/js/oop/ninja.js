class Ninja{
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("My name is "+this.name)
    }

    showStats(){
        console.log("Name: "+this.name)
        console.log("Health: "+this.health)
        console.log("Speed: "+this.speed)
        console.log("Strength: "+this.strength)
    }

    drinkSake(){
        this.health += 10;
    }

}

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10){
        super(name, health, speed, strength)
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("The man who sleeps with a knife is a fool every night but one")
    }

}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();