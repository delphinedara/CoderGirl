package lesson1_datatypes;

public class BankAccount {
    private String name;
    private int accountNum;
    private double balance;

    // the BankAccount constructor
    public BankAccount (String initName, int initId, double initBalance ) {
        //instance variable
        name=initName;
        accountNum = initId;
        balance = initBalance;
    }

    //getter and setters:

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAccountNum() {
        return accountNum;
    }

    public void setAccountNum(int accountNum) {
        this.accountNum = accountNum;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    //method to deposit a specified amount into the account
    public void deposit(double amount){
        balance = balance + amount;
    }

    //method to withdraw  a specified amount into the account and there may be a fee
    public void withdraw(double amount, double fee){
        balance= balance -amount - fee;
    }


}
