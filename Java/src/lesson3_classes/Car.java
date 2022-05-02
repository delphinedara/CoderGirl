package lesson3_classes;

import java.util.Locale;

public class Car {
    //public - unrestricted access to the class

    //Variables
    private int doors;
    private int wheels;
    private String model;
    private String engine;
    private String color;

    //setModel method w/ parameter model
    public void setModel(String model){
        this.model=model;
    }

    public String getModel(){
        return this.model;
    }




}
