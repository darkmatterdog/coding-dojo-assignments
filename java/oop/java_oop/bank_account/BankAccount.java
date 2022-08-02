public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccounts;
    private static double allAccountsBalance;

    // constructor
    public BankAccount() {
        this.checkingBalance = 0.0;
        this.savingsBalance = 0.0;
        numberOfAccounts++;
    }

    // getters
    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public double getTotalBalance(){
        return this.checkingBalance + this.savingsBalance;
    }

    public static int numberAllAccounts(){
        return numberOfAccounts;
    }

    public static double balanceAllAccounts(){
        return allAccountsBalance;
    }

    // setters

    public void withdrawChecking(double amount) {
        if(amount > this.checkingBalance){
            System.out.println("Insufficient balance.");
        }
        else{
            this.checkingBalance -= amount;
            System.out.println(String.format("Successfully withdrew $%d from checking account.", amount));
        }
    }

    public void withdrawSavings(double amount) {
        if(amount > this.savingsBalance){
            System.out.println("Insufficient balance.");
        }
        else{
            this.savingsBalance -= amount;
            System.out.println(String.format("Successfully withdrew $%d from savings account.", amount));
        }
    }

    public void depositChecking(double amount){
        this.checkingBalance += amount;
        System.out.println(String.format("Successfully deposited $%d to checking account.", amount));
    }

    public void depositSavings(double amount){
        this.savingsBalance += amount;
        System.out.println(String.format("Successfully deposited $%d to savings account.", amount));
    }


}