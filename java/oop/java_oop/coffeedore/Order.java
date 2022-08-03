import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item> items;

    // constructors
    public Order(){
        this("Guest");
    }

    public Order(String name){
        this.name = name;
        this.ready = false;
        this.items = new ArrayList<Item>();
    }


    // getters
    public String getName(){
        return this.name;
    }

    public boolean isReady(){
        return this.ready;
    }

    public ArrayList<Item> getItems(){
        return this.items;
    }


    // setters
    public void setName(String name){
        this.name = name;
    }

    public void setStatus(boolean ready){
        this.ready = ready;
    }


    
    // methods
    public void addItem(Item item){
        this.items.add(item);
    }

    public String getStatusMessage(){
        if(this.ready){
            return("Your order is ready!");
        }
        else{
            return("Thank you for waiting. Your order will be ready soon.");
        }
    }

    public double getOrderTotal(){
        double orderTotal = 0.0;
        for( Item eachItem : this.items){
            orderTotal += eachItem.getPrice();
        }
        return orderTotal;
    }

    public void display(){
        System.out.println("Customer Name:" + this.name);
        for( Item eachItem : this.items){
            System.out.println(eachItem.getName() + " - $" + eachItem.getPrice());
        }
        System.out.println("Total: " + this.getOrderTotal());
    }

}
