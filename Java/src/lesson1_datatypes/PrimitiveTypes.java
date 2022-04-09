package lesson1_datatypes;

public class PrimitiveTypes {

    public static void main (String []args){
        //int
        int theValue = 5;
        int theMinIntValue = Integer.MIN_VALUE;
        int theMaxIntValue = Integer.MAX_VALUE;

        System.out.println(" The min integer values: " + theMinIntValue);
        System.out.println(" The max integer values: " + theMaxIntValue);
        System.out.println(" Busted MAX value = : " + (theMaxIntValue +1));

        //byte
        byte theMinByteValue = Byte.MIN_VALUE;
        byte theMaxByteValue = Byte.MAX_VALUE;

        //short
        short theMinShortValue = Short.MIN_VALUE;
        short theMaxShortValue = Short.MAX_VALUE;

        System.out.println(theMinShortValue);

        //long
        long theLongValue = 100l;

        //float

        //char

        //boolean
        boolean b1 = true;
        boolean b2 = !b1;
        System.out.println("The value of b1 is: " +b1);
        System.out.println("The value of b2 is: " +b2);



    }
}
