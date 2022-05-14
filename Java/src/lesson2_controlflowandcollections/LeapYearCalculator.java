package lesson2_controlflowandcollections;

public class LeapYearCalculator {
    public static void main(String[] args) {
        System.out.println( isLeapYear(2000));
        System.out.println( isLeapYear(1924));
        System.out.println( isLeapYear(2100));
        System.out.println( isLeapYear(-2));
        System.out.println( isLeapYear(17));

    }

    public static  boolean isLeapYear(int year){
        //Valid parameter
        if( year >0 && year <10000){
            if (year%4==0){ //step 1 - year is divisible by 4
                //step 2
                if(year %100==0){//year divisible by 100
                    //go to step 3
                    if (year%400==0){//step 4
                        return true;
                    }else {
                        return false;
                    }
                } else {
                    return true;
                }

            } else {
                //step 5 - not leap year
                return false;
            }

        }
        //Invalid parameter
        return false;
    }
    }


//}
