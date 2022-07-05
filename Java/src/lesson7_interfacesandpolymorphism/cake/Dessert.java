package lesson7_interfacesandpolymorphism.cake;

public interface Dessert {
    void judgesReaction();

    default int score(){
        return 10;
    }

}
