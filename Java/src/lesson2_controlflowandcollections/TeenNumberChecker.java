package lesson2_controlflowandcollections;

public class TeenNumberChecker {

    public static void main (String[]args){
        System.out.println( hasTeen(0,50,0));
        System.out.println( hasTeen(12,10,17));
        System.out.println( hasTeen(89,56,54));
        System.out.println( hasTeen(100,100,100));

    }
    public static boolean hasTeen(int num1, int num2, int num3){

        if((num1 >=13 && num1 <=19) ||(num2 >=13 && num2 <=19)||(num3 >=13 && num3 <=19))
        {
            return true;
        }
        return false;
    }
}
