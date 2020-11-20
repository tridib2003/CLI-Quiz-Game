/*
  A CLI Quiz Game
*/

var readlineSync = require("readline-sync");

var score = 0; // Global variable to keep track of score

// input user's first name
var userName = readlineSync.question("Hey ! What's your first name ? ");

// display welcome message
console.log("Welcome " + userName + " to this QUIZ ! ");

// function to ask the question and check answer
function processQNA(question, answer) {

  var userAnswer = readlineSync.question(question);

  // displays if answer is correct and increments score by 1
  if (userAnswer === answer) {
    console.log("Correct answer !");
    score++;
  }
  // if answer is wrong simply display wrong answer  
  else {
    console.log("Incorrect answer !");
  }
  
  // display score after user answers each question
  console.log("Current score: ", score);
}

// array consisting of objects, each having property names and associated values
var questions = [{
  question: "How many characters in your first name ? ",
  answer: 6
}, {
  question: "A cube has how many surfaces ? ",
  answer: 6
}, {
  question: "How many wonders are there in the world ? ",
  answer: 7
}];

// loop to iterate over all the objects in the array
for (var i = 0; i < questions.length; i++) {
  processQNA(questions[i].question, (questions[i].answer).toString());
}

// display game over message
console.log('\n');
console.log("***** Game Over *****");
console.log('\n');

// display final score
console.log("Final Score: ", score);
// display total number of questions
console.log("Total questions: ", questions.length);
