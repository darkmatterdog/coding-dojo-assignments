import java.util.Random;
import java.util.ArrayList;

public class PuzzleJava {
    Random randomizer = new Random();

    public int[] getTenRolls(){
        int[] tenRollsArray = new int[10];

        for(var i = 0; i < 10; i++){
            tenRollsArray[i] = randomizer.nextInt(21);
            if(tenRollsArray[i] == 0){
                i--;
                continue;
            }
            
            System.out.println(tenRollsArray[i]);
        }

        return tenRollsArray;
    }

    public char getRandomLetter(){
        char[] letters = new char[26];
        String allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for(var i = 0; i < letters.length; i++){
            letters[i] = allLetters.charAt(i);
        }

        
        int letterIndex = randomizer.nextInt(25);
        return letters[letterIndex];
    }


    public String generatePassword(){
        String newPassword = "";
        for(var i = 0; i < 8; i++){
            newPassword += getRandomLetter();
        }
        return newPassword;
    }

    public ArrayList<String> getNewPasswordSet(int length){
        ArrayList<String> passwordSet = new ArrayList<String>();

        for(var i = 0; i < length; i++){
            passwordSet.add(generatePassword());
            System.out.println(passwordSet);
        }

        return passwordSet;
    }
}
