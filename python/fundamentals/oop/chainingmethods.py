class User:
    def __init__(self, first_name, last_name, email, age):
        self.firstname = first_name
        self.lastname = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        for attribute, value in self.__dict__.items():
            print(f"{attribute}: {value}")
        return self
        
    
    def enroll(self):
        if(self.is_rewards_member == True):
            print(f"{self.firstname} {self.lastname} is already a member.")
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
            print(f"Successfully enrolled {self.firstname} {self.lastname} in membership program.")
        return self

    def spend_points(self,amount):
        if(self.gold_card_points < amount):
            print(f"You do not have enough points to purchase this. (Required points, {amount}; you currently have {self.gold_card_points} points)")
        else:
            self.gold_card_points -= amount
            print(f"Purchase successful. You now have {self.gold_card_points} points.")
        return self




# user creation
test_user = User("Samuel", "Parker", "sammyboy@seattle.gov", 15)
second_user = User("Sonic", "The Hedgehog", "sonic@sonic.biz", 32)
third_user = User("Avery", "Starling", "avery@starhound.dev", 21)

# method chaining
test_user.enroll().enroll().spend_points(50).display_info()
second_user.enroll().spend_points(80).display_info()
third_user.spend_points(40).display_info()