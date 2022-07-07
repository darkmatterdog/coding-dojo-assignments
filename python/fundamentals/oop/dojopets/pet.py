class Pet:
    def __init__(self, input):
        self.name = input['name']
        self.type = input['type']
        self.tricks = input['tricks']
        self.health = 100
        self.energy = 100
        self.petnoise = input['noise']

    # sleep() - increases the pets energy by 25
    def sleep(self):
        self.energy += 25

    # eat() - increases the pet's energy by 5 & health by 10
    def eat(self):
        self.energy += 5
        self.health += 10

    # play() - increases the pet's health by 5
    def play(self):
        self.health += 5

    # noise() - prints out the pet's sound
    def noise(self):
        print(self.petnoise)


class Puppy(Pet):
    def __init__(self, input):
        super().__init__(input)

    def subclass_function(self):
        print("I'm a puppy subclass!")