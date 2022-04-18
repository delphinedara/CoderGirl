package studios.junit;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * The function BalancedBrackets should return true if and only if
 * the input string has a set of "balanced" brackets.
 *
 * That is, whether it consists entirely of pairs of opening/closing
 * brackets (in that order), none of which mis-nest. We consider a bracket
 * to be square-brackets: [ or ].
 *
 * The string may contain non-bracket characters as well.
 *
 * These strings have balanced brackets:
 *  "[LaunchCode]", "Launch[Code]", "[]LaunchCode", "", "[]"
 *
 * While these do not:
 *   "[LaunchCode", "Launch]Code[", "[", "]["
 * @param str - to be validated
 * @return true if balanced, false otherwise
 */

public class BalanceBracketsTest {
    @Test
    public void emptyTest(){assertEquals(true, true);}

    @Test
    public void onlyBracketsReturnsTrue(){
        assertTrue(BalanceBrackets.hasBalancedBrackets("[]"));
    }

    @Test
    public void twoBracketsReturnsTrue(){
        assertTrue(BalanceBrackets.hasBalancedBrackets("[] []"));
    }

    @Test
    public void bracketsWithinBracketsReturnsTrue(){
        assertTrue(BalanceBrackets.hasBalancedBrackets("[[]]"));
    }

    @Test
    public void openBracketReturnsFalse(){
        assertFalse(BalanceBrackets.hasBalancedBrackets("["));
    }

    @Test
    public void openBracketsReturnsFalse(){
        assertFalse(BalanceBrackets.hasBalancedBrackets("[["));
    }
    @Test
    public void closedBracketReturnsFalse(){
        assertFalse(BalanceBrackets.hasBalancedBrackets("]"));
    }

    @Test
    public void closedBracketsReturnsFalse(){
        assertFalse(BalanceBrackets.hasBalancedBrackets("]]"));
    }

    @Test
    public void twoClosedBracketsReturnsFalse(){
        assertFalse(BalanceBrackets.hasBalancedBrackets("]]"));
    }

    @Test
    public void emptyStringReturnsTrue(){
        assertTrue(BalanceBrackets.hasBalancedBrackets(" "));
    }
    @Test
    public void misMatchedBracketReturnsFalse(){
        assertFalse(BalanceBrackets.hasBalancedBrackets("]["));
    }

    @Test
    public void unqualBracketsWithString(){
        assertFalse(BalanceBrackets.hasBalancedBrackets("[Launch[code]"));
    }





}
