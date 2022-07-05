package lesson7_interfacesandpolymorphism.cake;

public class Cake implements  Dessert {
    //Class variables
    private int sweetnessScale;

    //Constructors

    public Cake(int sweetnessScale) {
        this.sweetnessScale = sweetnessScale;
    }

    //Method
    public void taste(){
        System.out.println("What is this? ");
    }

    public void judgesReaction(int score) {
        if (score ==10 ){
            System.out.println("Fantastic!");
        } else {
            System.out.println("Good job!");
        }
    }

    @Override
    public void judgesReaction() {

    }

    @Override
    public int score() {
        return Dessert.super.score();
    }
}
