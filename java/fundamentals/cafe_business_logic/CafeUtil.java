import java.util.ArrayList;

public class CafeUtil {
    
    public int getStreakGoal(){
        int sum = 0;
        for(var i = 0; i <= 10; i++){
            sum += i;
        }
        
        return sum;
    }

    public double getOrderTotal(double[] prices){
        double sum = 0;
        for(var i = 0; i < prices.length; i++){
            sum += prices[i];
        }
        return sum;
    }

    void displayMenu(ArrayList<String> menuItems){
        for(var i = 0; i < menuItems.size(); i++){
            System.out.println(i + " " + menuItems.get(i));
        }
    }

    void addCustomer(ArrayList<String> customers){
        int numCustomers = customers.size();

        System.out.println("Please enter your name:");
        String userName = System.console().readLine();

        System.out.println(String.format("Hello, %s!", userName));
        System.out.println(String.format("There are %d people in front of you.", numCustomers));

        customers.add(userName);
    }

    void printPriceChart(String product, double price, int maxQuantity){
        System.out.println(product);
        for(var i = 1; i <= maxQuantity; i++){
            System.out.println(i + " - $" + price*i);
        }
    }

    boolean displayMenu(ArrayList<String> menuItems, ArrayList<Double> prices){
        if(menuItems.size() != prices.size()){
            return false;
        }

        for(var i = 0; i <= menuItems.size(); i++){
            System.out.println(String.format("%d %s -- %d",i, menuItems.get(i), prices.get(i)));
        }
        return true;
    }


}
