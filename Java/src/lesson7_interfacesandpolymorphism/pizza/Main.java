package lesson7_interfacesandpolymorphism.pizza;

import java.util.Scanner;

public class Main {
    public static void main (String[] args){

        Regular regularPizza = new Regular();
        Italian italianPizza = new Italian();

        //Ask for customer name:
        Scanner scanner = new Scanner(System.in);

        System.out.println("Customer name:  ");
        String name= scanner.nextLine();

        System.out.println("Hello " + name + "!" );
//        int size;
//        switch (size){
//            c
//        }
        System.out.println("Choose pizza type: \n Enter 1 for regular pizza \n Enter 2 for italian pizza");
        Integer pizzaChoice = scanner.nextInt();

       // System.out.println("You entered: " + pizzaChoice);
        Integer numberOfToppings=scanner.nextInt();
        System.out.println( "You choose " + numberOfToppings + "toppings.");
        System.out.println("----------------------");
        System.out.println("ORDER SUMMARY");
        System.out.println("----------------------");



        // scanner.close();



        // Pizza size: M, L, XL & handle invalid entry

        //Pizza type: italian or regular & handle invalid entry

        //Display toppings choice

        //Choose toppings: up to 4toppings on regular pizza and up to two toppings on italian pizza & handle invalid
        // entry

        //Print receipt







    }

}
