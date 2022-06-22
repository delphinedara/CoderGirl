package studios.funquiz;

import java.util.Locale;

public class ShortAnswerQuestion extends Question {


    public ShortAnswerQuestion(String question, String answer) {
        super(question, answer);
    }

    @Override
    public boolean checkAnswer(String answer) {
        if(answer.length() >80){
            System.out.println("Answer can not exceed 80 characters.");
            return false;
        }
        String actualAnswer = this.getTheAnswer();
        if(answer.toUpperCase().equals(actualAnswer.toUpperCase())) {
            return true;
        } else {
            return false;

        }

    }
}
