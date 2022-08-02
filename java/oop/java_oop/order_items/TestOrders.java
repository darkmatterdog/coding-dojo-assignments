import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        
        Item item1 = new Item();
        item1.name = "mocha";
        item1.price = 2.14;
        
        ArrayList<Item> order1Items = new ArrayList<Item>();
        order1Items.add(item1);
        
        
        Item item2 = new Item();
        item2.name = "latte";
        item2.price = 4.41;
        
        ArrayList<Item> order2Items = new ArrayList<Item>();
        order2Items.add(item2);
        
        
        Item item3 = new Item();
        item3.name = "drip coffee";
        item3.price = 9.99;
        
        ArrayList<Item> order3Items = new ArrayList<Item>();
        order3Items.add(item3);
        

        Item item4 = new Item();
        item4.name = "cappucino";
        item4.price = 0.10;
        
        ArrayList<Item> order4Items = new ArrayList<Item>();
        order4Items.add(item4);




        Order order1 = new Order();
        order1.name = "Cindhuri";
        order1.total = item1.price;
        order1.ready = false;
        order1.items = order1Items;


        Order order2 = new Order();
        order2.name = "Jimmy";
        order2.total = item2.price;
        order2.ready = false;
        order2.items = order2Items;


        Order order3 = new Order();
        order3.name = "Noah";
        order3.total = item3.price;
        order3.ready = true;
        order3.items = order3Items;


        Order order4 = new Order();
        order4.name = "Sam";
        order4.total = item4.price;
        order4.ready = false;
        order4.items = order4Items;
    

        // Application Simulations
        // Use this example code to test various orders' updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);

        System.out.println(order1);

        order2.items.add(item1);
        order2.total += item1.price;


        order3.items.add(item4);
        order3.total += item4.price;


        order4.items.add(item1);
        order4.total += item1.price;


        order1.ready = true;


        order4.items.add(item1);
        order4.items.add(item1);
        order4.total += item1.price*2;

        order2.ready = true;

    }
}