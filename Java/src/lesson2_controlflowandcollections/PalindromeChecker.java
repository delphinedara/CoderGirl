package lesson2_controlflowandcollections;

import java.util.Locale;
import java.util.concurrent.LinkedTransferQueue;

public class PalindromeChecker {

    public static void main(String[] args){
        String s1= "Yoo";
        String s2= "Abba";
        String s3= "Carrace";
        String s4= "Racecar";
        String s5= "Newnews";

        System.out.println(palindromeChecker1(s1));
        System.out.println(palindromeChecker1(s2));
        System.out.println(palindromeChecker1(s3));
        System.out.println(palindromeChecker1(s4));
        System.out.println(palindromeChecker1(s5));

    }


    public static boolean palindromeChecker1(String original){
        String normalized = original.toLowerCase();
        StringBuilder reversed = new StringBuilder();
        for (int i=normalized.length()-1; i >=0; i--){
            reversed.append(normalized.charAt(i));
        }

        return normalized.equals(reversed.toString());
    }

}
