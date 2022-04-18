package lesson1_datatypes;

import java.util.Locale;

public class NonPrimitiveTypes {
    public static void main (String[] args){
        //Non Primitive Types : string, class, object, array
         String str = "awesome";
        String otherStr = "day";


        //String Methods
        str.charAt(3); //returns the character at index 3
        str.substring(2,4);
        str.length();
        str.split("delimeter");
        str.concat(str).concat(otherStr);
        str.trim();
        str.toUpperCase(Locale.ROOT);
        str.equals(otherStr);

        //comparing strings
        String s1 ="Hello";
        String s2 = "hello";
        String literalA= "abc";
        String literalB= "abc";
        String objectA = new String ("abc");
        String objectB = new String ("abc");


        if (s1.equals(s2)){
            System.out.println(" Yeah!");
        }else{
            System.out.println( "Well, well!");
        }

        System.out.println("same values ? " + literalA.equals(literalB));
        System.out.println("same values ? " + objectA.equals(objectB));
        System.out.println("same values ? " + literalA.equals(objectB));


        //Arrays
        int [] someInts = new int[10];



    }
}
