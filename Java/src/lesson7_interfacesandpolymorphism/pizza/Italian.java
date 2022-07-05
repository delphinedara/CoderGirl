package lesson7_interfacesandpolymorphism.pizza;

public class Italian implements Pizza {
    @Override
    public void pizzaSize(int size) {
        System.out.println("We will choose from : S, M, L, X-L");

    }
    @Override
    public Integer pizzaPrice(double cost){
        System.out.println("Price of the pizza!");

        return null;
    }

    @Override
    public void pizzaToppings(int numberOfToppings) {
        System.out.println("Toppings!");

    }
}
