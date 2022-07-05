package lesson7_interfacesandpolymorphism.cake;

public class ChocolateCake extends Cake {
    public ChocolateCake(int sweetnessScale) {
        super(sweetnessScale);
    }

@Override
public void taste() {
    System.out.println("Chocolate cake is yummyyyy!");
}


}
