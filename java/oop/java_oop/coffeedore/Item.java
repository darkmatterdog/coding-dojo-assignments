public class Item {
    private String name;
    private double price;
    private int index;

    public Item(String name, double price, int index){
        this.name = name;
        this.price = price;
        this.index = index;
    }

    public String getName(){
        return this.name;
    }

    public double getPrice(){
        return this.price;
    }

    public int getIndex(){
        return this.index;
    }

}
