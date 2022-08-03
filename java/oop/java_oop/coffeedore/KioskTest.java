public class KioskTest {
    public static void main(String[] args) {
        CoffeeKiosk kiosk = new CoffeeKiosk();

        kiosk.addMenuItem("test", 9.99);

        kiosk.newOrder();

        kiosk.addMenuItemByInput();
    }
}
