package lesson5_unittesting;

import org.junit.Test;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class ValidateISBNTest {
    @Test
    public void checkValid10ISBN(){
        ValidateISBN validator = new ValidateISBN();
        boolean result =  validator.checkISBN("0140449116");
        assertTrue(result);

    }

    @Test
    public void valid10ISBNEndingInAnX(){
        ValidateISBN validator = new ValidateISBN();
        boolean result =  validator.checkISBN("012000030x");
        assertTrue(result);

    }

    @Test
    public void checkValid13ISBN(){
        ValidateISBN validator = new ValidateISBN();
        boolean result =  validator.checkISBN("9781853260087");
        assertTrue("first value", result);
        result =  validator.checkISBN("9781853267338");
        assertTrue("second value", result);
    }


    @Test
    public void checkAnInvalid10ISBN(){
        ValidateISBN validator = new ValidateISBN();
        boolean result =  validator.checkISBN("0240449116");
        assertFalse(result);

    }


    @Test(expected =NumberFormatException.class)
    public void checkInvalidISBNDigitsLength(){
        ValidateISBN validator = new ValidateISBN();
        validator.checkISBN("1234567989");

    }
    @Test(expected = NumberFormatException.class)
    public void nonNumericISBNsAreNotAllowed(){
        ValidateISBN validator = new ValidateISBN();
        validator.checkISBN("helloworld");
        validator.checkISBN("helloworldone");

    }

}
