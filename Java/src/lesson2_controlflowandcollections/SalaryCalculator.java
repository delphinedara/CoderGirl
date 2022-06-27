package lesson2_controlflowandcollections;

import java.util.Scanner;

public class SalaryCalculator {
    public static void main(String[] args) {
        //variables
        double weeklyHours = 0;
        double maxWeeklyHours = 40;
        double hourlyPay = 15;
        double weeklySalary;


        // allow manager to enter the number of weekly hours worked
        Scanner scanner = new Scanner(System.in);
        System.out.println( " Enter weekly hours please: ");
        weeklyHours = scanner.nextDouble();

        //validate input - do not allow overtime
        while(weeklyHours >maxWeeklyHours){

            System.out.println("Invalid entry. Enter fourty or less hours please.");
            weeklyHours = scanner.nextDouble();
        }

        scanner.close();

      //calculate the pay
            weeklySalary = weeklyHours *hourlyPay;
            System.out.println( "Gross pay is: $"+weeklySalary);

    }
}
