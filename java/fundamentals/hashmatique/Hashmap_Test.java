import java.util.HashMap;
import java.util.Set;

public class Hashmap_Test {
    
    public static void main(String[] args){
        HashMap<String, String> trackList = new HashMap<String, String>();

        trackList.put("First Song", "These are sure some lyrics");
        trackList.put("Second Duet", "I'm singing with another person!");
        trackList.put("Third Thing", "It's really hard to come up with examples");
        trackList.put("Fourth Inning", "Base Ball");

        String baseball = trackList.get("Fourth Inning");
        System.out.println(baseball);

        Set<String> trackKeys = trackList.keySet();

        for(String key : trackKeys){
            System.out.println(key + ": " + trackList.get(key));
        }

    }

    
}
