package lesson1_datatypes;

import java.util.Scanner;

public class CircleArea {
    public static void main (String[] args){
        CircleArea area = new CircleArea();
        area.calculateArea();
    }

    public CircleArea(){

    }

    public void calculateArea(){
        Scanner input = new Scanner(System.in);
        Double myUserRadius = input.nextDouble();

        Double Area = 3.14 * myUserRadius *myUserRadius;
        System.out.println(Area);
    }





}
