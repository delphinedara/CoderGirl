package lesson3_classes;

import java.util.ArrayList;


public class RestaurantMenu {
    //variables
    private String lastUpdated;
    private static ArrayList<MenuItem> arrayListOfMenuItem= new ArrayList<>();

    //add main method
    public static void main(String[] args) {
        //instantiate an item
        MenuItem chocolateCake= new MenuItem("Chocolate Cake","Description","dessert", 7.89, false );
        arrayListOfMenuItem.add(chocolateCake);
        //create items
        //read items
        //delete items
        //update items

    }

    //create items
    public static void addItems(String name, String description,String category, double price, boolean isNew  ){

    }
    //read items
    //update items

    //delete items


}
