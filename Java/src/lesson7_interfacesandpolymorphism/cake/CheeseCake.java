package lesson7_interfacesandpolymorphism.cake;

public class CheeseCake extends Cake{
    public CheeseCake(int sweetnessScale) {
        super(sweetnessScale);
    }

    @Override
    public void taste(){
        System.out.println("Cheese cake is the best!");
    }

}
