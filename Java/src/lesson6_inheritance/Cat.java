package lesson6_inheritance;

public class Cat extends Animal{
    private boolean tired = false;
    private boolean hungry = false;
    private String family = "Felidae";


    public Cat(String name, int brain, int body, int size, int weight) {
        super(name, brain, body, size, weight);
    }

    public String getFamily(){
        return family;
    }

}
