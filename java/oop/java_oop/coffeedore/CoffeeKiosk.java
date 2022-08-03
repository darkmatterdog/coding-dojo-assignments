import java.util.ArrayList;

public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk(){
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
    }


    public void addMenuItem(String name, double price){
        int newIndex = menu.size();
        Item newItemName = new Item(name, price, newIndex);
        menu.add(newItemName);
    }

    public void displayAllOrders(){
        for(Order order : orders){
            System.out.println(order);
        }
    }

    public void displayMenu(){
        for(Item this_item : menu){
            System.out.println(String.format("%d %s -- $%.2f", this_item.getIndex(), this_item.getName(), this_item.getPrice()));
        }
    }

    public void newOrder(){
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();

        Order newOrder = new Order(name);

        System.out.println("Order created.");
        this.displayMenu();

        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        while(!itemNumber.equals("q")) {
            int itemIndex = Integer.parseInt(itemNumber);
            Item newItem = this.menu.get(itemIndex);
            
            newOrder.addItem(newItem);
            System.out.print("Added item to order. \n");
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
        }
        
        this.orders.add(newOrder);
        System.out.println(newOrder.getItems());
    }

    public void addMenuItemByInput(){
        System.out.println("Enter a name for the item:");
        String itemName =System.console().readLine();
        
        System.out.println("Enter a price:");
        double itemPrice = Double.parseDouble(System.console().readLine());

        int itemIndex = menu.size();

        System.out.println("Adding item to menu...");
        
        Item newItem = new Item(itemName, itemPrice, itemIndex);
        menu.add(newItem);

        System.out.println("...done!");

    }


}
