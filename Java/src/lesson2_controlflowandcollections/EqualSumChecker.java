package lesson2_controlflowandcollections;

public class EqualSumChecker {

    public static void main (String[] args){
        System.out.println(hasEqualSum(3,4,5));//false
        System.out.println(hasEqualSum(3,2,5));//true


    }

    public static boolean hasEqualSum(int num1, int num2, int num3){
        if((num1+num2)==num3){
            return true;
        }
        return false;

    }
}

