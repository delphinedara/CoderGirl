package lesson7_interfacesandpolymorphism.cake;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Cake> myCakes= new ArrayList<>();
        ChocolateCake chocolateCake1= new ChocolateCake(10);
        CheeseCake cheeseCake1= new CheeseCake(7);

        myCakes.add(chocolateCake1);
        myCakes.add(cheeseCake1);

        for (Cake cake:myCakes){
            cake.taste();
            cake.judgesReaction(7);
        }
    }
}
