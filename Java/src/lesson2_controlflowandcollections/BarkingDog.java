package lesson2_controlflowandcollections;

public class BarkingDog {
    public static void main(String[] args) {
        System.out.println(shouldWakeUp(true,1) );
        shouldWakeUp(true,1);
        shouldWakeUp(false, 2);
        shouldWakeUp(true, 8);
        System.out.println( shouldWakeUp(true, -1));
        shouldWakeUp(true, -1);
    }

    public static boolean shouldWakeUp(boolean barking, int hourOfTheDay){
        if(hourOfTheDay<0 || hourOfTheDay >23){
            return false;
        }

        if(barking ==true &&hourOfTheDay <8 || hourOfTheDay>22){
            return true;
        } else {
            return false;
        }
    }
}
