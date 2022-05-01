package studios.restaurantMenu;

import java.util.ArrayList;
import java.util.Date;


public class RestaurantMenu {
    //variables
    private Date lastUpdated;
    private ArrayList<MenuItem> menuItems= new ArrayList<>();

    //constructors
    public RestaurantMenu(){
        this.lastUpdated = new Date();
    }

    //Methods
    //Getters and Setters

    public ArrayList<MenuItem> getMenuItems(){
        return this.menuItems;}
    public void setMenuItems (ArrayList<MenuItem>menuItems){
        this.menuItems =menuItems;}
    public Date getLastUpdated(){return this.lastUpdated;}
    public void setLastUpdated(Date lastupdated){
        this.lastUpdated =lastupdated;}




    //add main method
    public static void main(String[] args) {
        //instantiate an item
        MenuItem chocolateCake= new MenuItem("Chocolate Cake","Description","dessert", 7.89, false );

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
