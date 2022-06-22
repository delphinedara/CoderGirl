package studios.funquiz;

public class TrueFalseQuestion extends Question{
    public TrueFalseQuestion(String question, String answer) {
        super(question, answer);
    }

    //Methods
    @Override
    public boolean checkAnswer(String answer) {
        String correctAnswer = this.getTheAnswer();
        if(answer.toUpperCase().equals(this.getTheAnswer().toUpperCase())){
            return true;
        } else {
            return false;
        }
    }


}
