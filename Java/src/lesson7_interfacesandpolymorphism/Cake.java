package lesson7_interfacesandpolymorphism;

public class Cake {
    private int sweetnessScale;


    //constructor
    public Cake(int sweetnessScale){
        this.sweetnessScale=sweetnessScale;
    }

    //getter
    public int getSweetnessScale() {
        return this.sweetnessScale;
    }

    public void taste(){
        System.out.println("What kind of cake is this?");
    }
    



}
