package lesson1_datatypes;

import java.util.Locale;
import java.util.Scanner;

public class HelloWorld {
    public static void main (String[] args){
        Scanner input;

        input= new Scanner(System.in);
        System.out.println("Enter your first name, please:" );
        String name = input.next();
        input.close();

        System.out.println ("Hello " + name + "!");






    }
}
