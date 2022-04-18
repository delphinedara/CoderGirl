package studios.junit;

public class BalanceBrackets {

    public static boolean hasBalancedBrackets(String str) {
        int brackets = 0;
        for (char ch : str.toCharArray()) {
            if (ch == '[') {
                brackets++;
            } else if (ch == ']') {
                brackets--;
            }
            if (brackets <0) return false;
        }
        return brackets == 0;
    }

    }

