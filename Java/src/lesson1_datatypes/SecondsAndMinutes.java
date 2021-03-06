package lesson1_datatypes;

public class SecondsAndMinutes {
    public static void main (String[]args){
        System.out.println(getDurationString(123, 56));
        System.out.println(getDurationString(567));

        System.out.println(getDurationString(123, -56));


    }
    private static String getDurationString(long minutes, long seconds){
        //validation
        if ((minutes <0) || (seconds <0) ||(seconds>59)) {
            return "Invalid Value";
        }
        long hours = minutes /60;
        long remainingMinutes = minutes %60;

        return hours + "hr " + remainingMinutes + "min " + seconds + "sec";
    }

    private static String getDurationString(long seconds){
        if (seconds <0){
            return "Invalid value";
        }
        long minutes =seconds /60;
        long remainingSeconds = seconds % 60;
        return getDurationString(minutes,remainingSeconds);
    }

}
