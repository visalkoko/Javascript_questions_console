
(function(){


    // Constructor for accessing 3 variables
    Question = function(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    

    // Display Questions
    Question.prototype.displayQuestions = function() {
        console.log(this.question);
        for (var i=0; i < this.answers.length; i++){
            console.log(i +': ' + this.answers[i]);
        }
    }

    // Display Answer
    Question.prototype.DisplayAnswers = function(ans, callback){
        var sc;
        if (ans === this.correct){
            console.log('your answer is correct');
            sc = callback(true);
        }
        else{
            console.log('your answer is wrong');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    // Display Score
    Question.prototype.displayScore = function(score){
        console.log('your score is ' + score);
    }

    // function score to use as increment 
    function Score () {
        var sc = 0;
        return function(increase){
            if (increase)
            {
                sc++;
            }
            return sc;
        }
    }

    // keep the function to variable
    var keepScore = Score();
    
    // Declare variables 
    var q1 = new Question('what is your name? ', ['visal','komo', 'kimi'], 0);
    var q2 = new Question('Are you a teacher? ', ['Yes', 'No'], 1);
    var q3 = new Question('Are you a future CEO? ', ['yes', 'No'], 1);
    
    // Combine 3 variable to one variable for random purpose
    var questions = [q1,q2,q3];

    // Execute the questions 
    function nextQuestion(){
        
        var randomQ = Math.floor(Math.random() * questions.length);
        questions[randomQ].displayQuestions();
        
        var myAnswer = prompt('what is your answer?');
        if (myAnswer !== 'exit'){
            
            questions[randomQ].DisplayAnswers(parseInt(myAnswer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
    
})();