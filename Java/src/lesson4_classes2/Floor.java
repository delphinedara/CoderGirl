package lesson4_classes2;

public class Floor {
    //instance variables
   private double width;
    private double length;

    //constructor
    public Floor(double width, double length){
        if (width<0){
            this.width=0;
        }

        if(length <0){
            this.length =0;
        }
        this.width=width;
        this.length= length;

    }

    //instance methods
    public double getArea() {
        return width * length;

    }

}
