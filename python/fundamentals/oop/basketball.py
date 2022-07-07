# player class

class Player():
    
    team_list = []

    def __init__(self,input_dict):
        self.name = input_dict['name']
        self.age = input_dict['age']
        self.position = input_dict['position']
        self.team = input_dict["team"]

    def __repr__(self):
        return f"{self.name}, {self.age}"

    @classmethod
    def get_team(cls,team_list):
        pass


# C2 dictionary references
kevin = {
    "name": "Kevin Durant", 
    "age":34, 
    "position": "small forward", 
    "team": "Brooklyn Nets"
}
jason = {
    "name": "Jason Tatum", 
    "age":24, 
    "position": "small forward", 
    "team": "Boston Celtics"
}
kyrie = {
    "name": "Kyrie Irving", 
    "age":32,
    "position": "Point Guard", 
    "team": "Brooklyn Nets"
}


kevin = Player(kevin)
jason = Player(jason)
kyrie = Player(kyrie)


# C3 dictionary references

players = [
    {
    "name": "Kevin Durant", 
    "age":34, 
    "position": "small forward", 
    "team": "Brooklyn Nets"
    },
    {
    "name": "Jason Tatum", 
    "age":24, 
    "position": "small forward", 
    "team": "Boston Celtics"
    },
    {
    "name": "Kyrie Irving", 
    "age":32,
    "position": "Point Guard", 
    "team": "Brooklyn Nets"
    },
    {
    "name": "Damian Lillard", 
    "age":33,
    "position": "Point Guard", 
    "team": "Portland Trailblazers"
    },
    {
    "name": "Joel Embiid", 
    "age":32,
    "position": "Power Foward", 
    "team": "Philidelphia 76ers"
    },
    {
    "name": "DeMar DeRozan",
    "age": 32,
    "position": "Shooting Guard",
    "team": "Chicago Bulls"
    }
]

new_team = []

for entry in players:
    new_team.append(Player(entry))

print(new_team)