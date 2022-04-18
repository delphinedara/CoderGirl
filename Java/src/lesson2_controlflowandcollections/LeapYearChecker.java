package lesson2_controlflowandcollections;

import java.util.Scanner;

public class LeapYearChecker {
    public static void main(String[] args) {
        //variables
        int year;
        Scanner input;

        input = new Scanner(System.in);
        System.out.println("Enter the year: ");
        year = input.nextInt();
        input.close();


        if (year%400==0){
            System.out.println("Leap year");
        } else if(year%4==0 &&year%100!=0){
            System.out.println("Leap year");

        }else{
            System.out.println("Not leap year");
        }



    }
    //if year is divisible by 400 is a leap year
    //if a year is divisible by 4 and not divisible by 100 then it is a leap year
    //else not a leap year
}
