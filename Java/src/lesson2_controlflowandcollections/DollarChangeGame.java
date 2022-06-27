package lesson2_controlflowandcollections;

import java.util.Scanner;

public class DollarChangeGame {

    public static void main(String[] args) {
        //variables
        double penny = .01;
        double nickel = .05;
        double dime = .10;
        double quarter = .25;
        int dollar = 1;
        double total;


        Scanner scanner = new Scanner(System.in);
        System.out.println( " Enter enough change to make exactly a dollar.");

        System.out.println(" Enter number of pennies: ");
        int numOfPennies = scanner.nextInt();

        System.out.println(" Enter number of nickels: ");
        int numOfNickels = scanner.nextInt();

        System.out.println(" Enter number of dimes: ");
        int numOfDimes = scanner.nextInt();

        System.out.println(" Enter number of quarters: ");
        int numOfQuarters = scanner.nextInt();

        scanner.close();

        total = numOfDimes * dime + numOfNickels * nickel + numOfPennies*penny + numOfQuarters * quarter;
        if (total <dollar){
            System.out.println("Try again! You were " + (dollar - total) + " short!");
        } else if (total >dollar){
            System.out.println("Try again! You were " + (total - dollar) + " over!");
        } else {
            System.out.println("Congrats! You win!");
        }

    }
}
