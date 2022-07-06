# bank class
class BankAccount():

    all_accounts_list = []

    def __init__(self, int_rate, balance = 0):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts_list.append(self)


    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if(BankAccount.can_withdraw(self, amount)):
            self.balance -= amount
        else:
            if(self.balance < 5):
                self.balance = 0
            else:
                self.balance -= 5
            print("Insufficient funds. ($5 fee charged)")
        return self


    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yield_interest(self):
        self.balance *= (1+self.int_rate)
        return self


    @classmethod
    def all_accounts(cls):
        for i in cls.all_accounts_list:
            i.display_account_info()

    @staticmethod
    def can_withdraw(account,amount):
        if(amount < 0):
            return False
        elif(account.balance < amount):
            return False
        else:
            return True






# user class
class User:
    def __init__(self, first_name, last_name, email, age):
        self.firstname = first_name
        self.lastname = last_name
        self.age = age
        self.account = [BankAccount(int_rate=0.2,balance=100)]

    def display_info(self):
        for attribute, value in self.__dict__.items():
            print(f"{attribute}: {value}")

    def make_deposit(self, amount, account_index=-1):
        self.account[User.account_check(self, account_index)].deposit(amount)
    
    def make_withdrawal(self,amount, account_index=-1):
        self.account[User.account_check(self, account_index)].withdraw(amount)
    
    def display_user_balance(self, account_index=-1):
        print(f"Balance: ¥{self.account[User.account_check(self,account_index)].balance}")

    def add_account(self, int_rate = 0.1, balance = 0):
        self.account.append(BankAccount(int_rate,balance))

    def transfer_money(self, amount, other_user):
        account_num = User.account_check(self)
        if BankAccount.can_withdraw(self.account[account_num],amount):
            self.make_withdrawal(amount,account_num)
            other_user.make_deposit(amount)
        else:
            print("Insufficient funds for transfer.")



    @staticmethod
    def account_check(user, account_index=-1):
        if account_index != -1:
            return account_index
        elif(len(user.account) > 1):
            print("Which account would you like to use?")
            counter = 0
            for i in user.account:
                print(f"Account at index {counter}; balance: {i.balance}; interest rate: {i.int_rate}")
                counter += 1
            account = input(">")
            return int(account)
        else:
            return 0





newuser = User("Avery","Starling","avery@fakeemail.biz","21")

newuser.add_account(0.5,500)
newuser.display_user_balance()
newuser.make_withdrawal(111)

second_user = User("Samuel","Parker","samjam@parpar.car","15")

newuser.transfer_money(25, second_user)

BankAccount.all_accounts()