//Sets constants and variables used/changed in the functions
const timer = document.querySelector("#time");
const starter = document.querySelector("#Startbutton");
// pulls the highscores from the local storage and stoes them as const hi scores
const hiscores = JSON.parse(localStorage.getItem("hiscores")) || [];
//Puts all the text of each question into an array
const QuestArray = [
  'What is the correct JavaScript syntax to write "Hello World"?',
  "What is the correct syntax for referring to an external script called",
  "Assignment operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, and division.",
];
//includes all the options for the first, second, and third question
const Answers0 = [
  'response.write("Hello World")',
  '"Hello World"',
  'document.write("Hello World")',
  '("Hello World")',
];
const Answers1 = [
  '<script src="xxx.js">',
  '<script src="xxx.js">',
  '<script href="xxx.js">',
  '<script value="xxx.js">',
];
const Answers2 = ["True", "False"];
//adds all the options for each question into an array
const AnswrArray = [Answers0, Answers1, Answers2];
//contains all correct answers in an Array
const CorAns = [
  'document.write("Hello World")',
  '<script src="xxx.js">',
  "False",
];
//sets the variables that are called in the functions
var quiz = document.querySelector("#Questions");
var options = document.querySelector("#Options");
var footer = document.querySelector("#check");
//sets sets variables that help cordinate the respones of the quiz
var a = 0;
var count = 0;
var CounterOn = false;

//adds value of 1 to the Timer every second
function Counter() {
  var timerInterval = setInterval(function () {
    count++;
    timer.textContent = "Timer:" + count;
  }, 1000);
}
//This starts the counter function when first activated and creates the Answer buttons for each question everytime its called
function switchques() {
  if (CounterOn == false) {
    Counter();
    CounterOn = true;
  }
  starter.hidden = true;
  Answers = AnswrArray[a];
  while (options.lastChild) {
    options.removeChild(options.lastChild);
  }
  // changes the page to the recordscorepage if they are finished with all the questions
  if (QuestArray[a] == null) {
    quiz.innerHTML = "Done";
    Recordscorepage();
  } else {
    quiz.innerHTML = QuestArray[a];
    for (var i = 0; i < Answers.length; i++) {
      var optionli = document.createElement("li");
      var optionbut = document.createElement("button");
      optionbut.textContent = Answers[i];
      optionbut.classList.add("OptBut");
      optionli.append(optionbut);
      options.append(optionli);
      optionbut.addEventListener("click", checkansw);
    }
  }
  //sets up the functions to create the next set of questions when called again
  a++;
}
// checks if the answer selected is correct and responds by triggering the switchques function if correct and lets the user know by changing the footer text if inncorect
function checkansw(event) {
  if (CorAns.includes(event.target.textContent)) {
    footer.textContent = "Correct!";
    switchques();
  } else {
    count++;
    footer.textContent = "Incorrect";
  }
}
//sets up the pages so you can input your name and tell you youre score
function Recordscorepage() {
  footer.textContent = "";
  var theNd = document.createElement("div");
  theNd.textContent = "Your score is " + count;
  var recentscore = count;
  quiz.append(theNd);
  var Initial = document.createElement("input");
  Initial.setAttribute("type", "text");
  options.textContent = "Name:";
  var Submit = document.createElement("button");
  Submit.textContent = "Submit";
  options.append(Initial);
  options.append(Submit);
  Submit.addEventListener("click", Recordscore);
  function Recordscore() {
    if (Initial.value !== "") {
      //saves score to local storage
      const score = {
        score: recentscore,
        name: Initial.value,
      };
      hiscores.push(score);
      //sorts score in local storage by least time first
      hiscores.sort((a, b) => a.score - b.score);
      console.log(hiscores);
      listhiscores();
    } else {
      //Tells you to include a name if no already included
      quiz.innerHTML = "Please provide name";
    }
  }
  // this takes the values from local storage and lists them out and also changes the starter button text to reset so you can try the game again.
  function listhiscores() {
    Initial.remove();
    Submit.remove();
    options.textContent = "";
    starter.textContent = "reset";
    //sets the questions back to the first in the array
    a = 0;
    starter.hidden = false;
    quiz.textContent = "Highscores!";
    console.log(hiscores[0]);
    for (var i = 0; i < hiscores.length; i++) {
      var Scoreboard = document.createElement("p");
      Scoreboard.textContent = hiscores[i].name + ": " + hiscores[i].score;
      options.append(Scoreboard);
    }
  }
}
//this sets the score or timer back to 0 and activates the switch question function
function setcoount() {
  count = 0;
  switchques();
}
//This activates the setcoount function when the starter button is clicked
starter.addEventListener("click", setcoount);
