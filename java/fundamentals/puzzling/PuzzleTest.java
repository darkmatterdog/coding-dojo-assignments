public class PuzzleTest {
    public static void main(String[] args){
        PuzzleJava puzzle = new PuzzleJava();

        // get 10 rolls
        puzzle.getTenRolls();


        // get random letter
        System.out.println(puzzle.getRandomLetter());


        // generate password
        puzzle.generatePassword();

        // get new password set 
        puzzle.getNewPasswordSet(5);

    }
}
