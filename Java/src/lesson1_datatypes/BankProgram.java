package lesson1_datatypes;

public class BankProgram {
    //main class
    public static void main (String[] args){
        //instantiate the objects
        BankAccount acct1 = new BankAccount("John Smith", 15662, 2000.00);//create a new object within the account class
        BankAccount acct2 = new BankAccount("Zoe Smith", 8399, 20990.00);//create a new object within the account class

        acct1.deposit(100.11);
        acct2.withdraw(29900, 13.00);

        System.out.println(acct1.getBalance());
        System.out.println(acct2.getBalance());

        BankAccount acct3=new BankAccount("New Client", 890,0);
        acct3.setName("William John");
        acct3.setBalance(3000);
        acct3.setAccountNum(89667);
        System.out.println(acct3.getAccountNum());
        System.out.println(acct3.getName());




    }



}