package lesson2_controlflowandcollections;

public class DecimalComparator {

    public static void main (String[] args){
        System.out.println(areEqualByThreeDecimalPlaces(4,5));
        System.out.println(areEqualByThreeDecimalPlaces(3.175,3.174));//should return false
        System.out.println(areEqualByThreeDecimalPlaces(3.0,3.0));
        System.out.println(areEqualByThreeDecimalPlaces(3.01234,3.0123556));//should return true

    }

    public static boolean areEqualByThreeDecimalPlaces(double num1, double num2){
        num1=(int)(num1*1000);
        num2=(int) (num2*1000);

        if(num1==num2){
            return true;
        }else

        return false;

    }
}
