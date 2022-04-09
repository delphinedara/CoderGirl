package lesson1_datatypes;

import java.util.Locale;

public class NonPrimitiveTypes {
    public static void main (String[] args){
        //Non Primitive Types : string, class, object, array
         String str = "awesome";

        //String Methods
        String otherStr = "day";
        str.charAt(3); //returns the character at index 3
        str.substring(2,4);
        str.length();
        str.split("delimeter");
        str.concat(str).concat(otherStr);
        str.trim();
        str.toUpperCase(Locale.ROOT);
        str.equals(otherStr);


    }
}
