package lesson7_interfacesandpolymorphism.pizza;

public class Regular implements Pizza {
    public Regular() {
    }

    @Override
    public void pizzaSize(int size) {

    }

    @Override
    public Integer pizzaPrice(double cost) {
        System.out.println("Pricing for regular pizza");

        return null;
    }

    @Override
    public void pizzaToppings(int numberOfToppings) {
        System.out.println("toppings for regular up to five toppings ");

    }
}
