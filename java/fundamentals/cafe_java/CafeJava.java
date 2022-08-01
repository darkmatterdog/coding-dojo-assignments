public class CafeJava {
    public static void main(String[] args){
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffee = 5.2;
        // double latte = 1.1;
        double cappucino = 9.1;
        
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        // boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        // boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1 + pendingMessage); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        
        // noah's cappucino
        System.out.println(generalGreeting + customer4);
        if (isReadyOrder4){
            System.out.println(customer4 + readyMessage);
            System.out.println(displayTotalMessage+cappucino);
        }
        else{
            System.out.println(customer4 + pendingMessage);
        }
        
        // sam's lattes
        System.out.println(customer2 + readyMessage + displayTotalMessage + mochaPrice*2);
        if(isReadyOrder2){
            System.out.println(customer2 + readyMessage);
        }
        else{
            System.out.println(customer2 + pendingMessage);
        }
        isReadyOrder2 = false;
        if(isReadyOrder2){
            System.out.println(customer2 + readyMessage);
        }
        else{
            System.out.println(customer2 + pendingMessage);
        }

        
        // jimmy's grand coffee mistake
        System.out.println(customer3 + readyMessage + displayTotalMessage + (mochaPrice - dripCoffee));

    }
}
