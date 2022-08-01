import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class AlfredQuotes {
    public String basicGreeting(){
        return "Hello, lovely to see you. How are you?";
    }


    public String guestGreeting(String name){
        return String.format("Hello, %s. Lovely to see you.", name);
    }


    public String dateAnnouncement(){
        ZonedDateTime currentDateTime = ZonedDateTime.now(); 
        DateTimeFormatter timeFormatter = DateTimeFormatter.RFC_1123_DATE_TIME;
        String formattedDateTime = timeFormatter.format(currentDateTime);
        return String.format("It is currently %s.",formattedDateTime);
    }


    public String respondBeforeAlexis(String conversation){
        
        if(conversation.indexOf("Alexis") != -1){
            return "Right away, sir. She isn't sophisticated enough for THAT.";
        }

        else if(conversation.indexOf("Alfred") != -1){
            return "At your service, sir. Right away.";
        }

        else{
            return "Ah, I see. With that, I retire.";
        }

    }
}