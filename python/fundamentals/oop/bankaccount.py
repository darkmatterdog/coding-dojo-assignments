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


test_account = BankAccount(0.05,100)
second_account = BankAccount(0.25,100050)


test_account.deposit(25).deposit(19).deposit(2500).withdraw(111).yield_interest().display_account_info()
second_account.deposit(44).deposit(488).withdraw(1).withdraw(400).withdraw(113).withdraw(9999).yield_interest().display_account_info()

BankAccount.all_accounts()