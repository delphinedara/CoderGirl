package lesson3_classes;

public class MenuItem {
    //Class variables
    private String name;
    private String description;
    private String category;
    private double price;
    private boolean isNew;

    //Constructor
    public MenuItem (String name, String description,String category, double price, boolean isNew ){
        this.name=name;
        this.description = description;
        this.category= category;
        this.price=price;
        this.isNew= isNew;
    }

    //Methods
    //Getters
    public String getName() {
        return this.name;
    }

    public String getDescription(){
        return this.description;
    }

    public String getCategory() {
        return this.category;
    }

    public Double getPrice(){
        return this.price;
    }

    public boolean getIsNew() {
        return this.isNew;
    }

    //Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setIsNew(boolean isNew) {
        this.isNew = isNew;
    }


}
