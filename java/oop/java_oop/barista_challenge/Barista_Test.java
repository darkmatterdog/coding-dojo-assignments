public class Barista_Test {
    public static void main(String[] args){
        Order order1 = new Order();
        Order order2 = new Order();
        
        Order order3 = new Order("Sam");
        Order order4 = new Order("Avery");
        Order order5 = new Order("Nicole");
        Order order6 = new Order("Jenny");


        Item item1 = new Item("mocha", 2.45);
        Item item2 = new Item("latte", 9.99);
        
        order1.addItem(item1);
        order1.addItem(item2);
        
        order2.addItem(item1);
        order2.addItem(item2);

        order3.addItem(item1);
        order3.addItem(item2);
        
        order4.addItem(item1);
        order4.addItem(item2);

        order5.addItem(item1);
        order5.addItem(item2);

        order6.addItem(item1);
        order6.addItem(item2);


        System.out.println(order4.getStatusMessage());

        order5.setStatus(true);
        System.out.println(order5.getStatusMessage());

        System.out.println(order3.getOrderTotal());


        order1.display();

    }
}
