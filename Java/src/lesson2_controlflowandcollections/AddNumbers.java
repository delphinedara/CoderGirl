package lesson2_controlflowandcollections;

import java.util.Scanner;

public class AddNumbers {
    /*
    Write program that allows a user to enter two numbers,
    then sums up the two numbers. The user should be able
     to repeat this action until they indicate they are done.
     */

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int runAgain ;

        do {
            System.out.println("Enter the first number: ");
            double num1=scanner.nextDouble();

            System.out.println("Enter the second number: ");
            double num2=scanner.nextDouble();

            double sum = num1+num2;
            System.out.println("The sum is: " + sum);

            System.out.println("Would you like to start over?\n Enter 0 for no,  1 for yes.");
            runAgain = scanner.nextInt();

        } while(runAgain==1);


    }
}
