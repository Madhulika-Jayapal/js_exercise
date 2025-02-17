// Displaying a multiple choice question

var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };
  
  displayQuestion(question1);
  
  var question2 = {
    question : "Which planet is known as the Red Planet?",
    answers : [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
    ],
    correctAnswer : "Mars"
};

var question3 = {
    question : "Who wrote 'The Great Gatsby'?",
    answers : [
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
        "Mark Twain",
        "Charles Dickens"
    ],
    correctAnswer : "F. Scott Fitzgerald"
};

var questions = [question1, question2, question3];
  
console.log("\nDisplaying all questions:");
questions.forEach(function(question, index) {
    console.log("\nQuestion " + (index + 1) + ":");
    displayQuestion(question);
});
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */