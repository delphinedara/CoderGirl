package lesson6_inheritance;

public class Dog extends Animal {

    private int eyes;
    private int legs;
    private int tail;
    private int teeth;
    private String coat;

    //constructor
    public Dog(String name,  int body, int size, int weight, int eyes, int legs, int teeth, String coat) {
        super(name, 1, 1, size, weight);
        this.eyes=eyes;
        this.teeth=teeth;
        this.legs=legs;
        this.coat=coat;
    }

    private void chew(){
        System.out.println("This dog chew! ");
    }

    @Override
    public void eat() {
        System.out.println("Dog.eat() called !");
        chew();
        super.eat();
    }

    public void run(){
        System.out.println(" Running like there is no tomorrow!");
        move(35);

    }

    public void walk(){
        System.out.println("Taking its sweet time, just walkingggg! ");
        move(3);
    }
}
