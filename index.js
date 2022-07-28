var readlineSync = require('readline-sync');

var chalk = require('chalk');

var userName = readlineSync.question("May we please know your name?\n");

console.log(chalk.bgCyanBright("\nHello " + userName + " to the HOW WELL DO YOU KNOW ME Quiz game !!\n\n"));

var score = 0;

function play(question, answer)
  {
    var userAnswer = readlineSync.question(question);

      if(userAnswer === answer)
      {
        console.log(chalk.greenBright("\nYou answered it Correct.."));
        score++;
        console.log(chalk.blueBright("Your current score is: " + score +"\n"));
      }
    else
      {
        console.log(chalk.red("\nYou answered it Wrong.."));
        console.log(chalk.blueBright("\nYour current score is " + score + "\n"));
      }
    
  }



var questions = 
[
  {question : "What is my full name? \n",
  answer : "Azhar Mehmud Choudhury"},

  {question : "What is my D.O.B ?  [DD/MM/YYYY]\n",
    answer : "20/06/1997"},

  {question : "Which food do I love the most?\n",
   answer : "Biryani"},

  {question : "Which company do I work for now?\n",
   answer : "Accenture"},

  {question : "Which career path do I love to go for in IT sector?\n",
   answer : "Web Development"},

  {question : "What is my favourite color?\n",
   answer : "Black"} 
]

for(var i=0; i<questions.length; i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
    
  }


console.log(chalk.redBright("\n\nTHANK YOU for playing the game.. "));
console.log(chalk.blueBright("\nYour total score is : " + score ));
console.log(chalk.cyan("\nPlease visit again. Take care :)\n\n\n"));