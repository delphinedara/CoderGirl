package lesson5_unittesting;

import org.junit.Test;

public class ExampleTests {
    @Test
    public void exampleTest(){
        //fail();
        pass();
    }

    private void pass() {
        System.out.println("The test passed!");
    }


}
