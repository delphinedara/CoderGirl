package lesson4_classes2;

public class WallArea {

    //instance variables
    private double width;
    private double height;

    //constructors
    public WallArea(){

    }

    public WallArea(double width, double height){
        if (width < 0 ){
            this.width =0;
        }

        if(height< 0){
            this.height =0;
        }

        this.height=height;
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        if(height <0){
            height= 0;
        }
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(double width) {
        if (width <0){
            width=0;
        }
        this.width = width;
    }

    public double getArea() {
    return getWidth() *getHeight();
    }
}
