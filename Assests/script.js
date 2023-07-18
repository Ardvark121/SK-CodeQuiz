//Sets constants and variables used/changed in the functions
const timer = document.querySelector("#time");
const starter = document.querySelector("#Startbutton");
//Puts a
const QuestArray = [
  'What is the correct JavaScript syntax to write "Hello World"?',
  "What is the correct syntax for referring to an external script called",
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
const CorAns = [
  'document.write("Hello World")',
  '<script src="xxx.js">',
  "False",
];
var quiz = document.querySelector("#Questions");
var options = document.querySelector("#Options");
var footer = document.querySelector("#check");

var a = 0;
var count = 0;

function Counter() {
  var timerInterval = setInterval(function () {
    count++;
    timer.textContent = "Timer:" + count;
  }, 1000);
  switchques();
  starter.hidden = true;
}

function switchques() {
  Answers = AnswrArray[a];

  for (var i = 0; i < Answers.length; i++) {
    var optionli = document.createElement("li");
    var optionbut = document.createElement("button");
    optionbut.textContent = Answers[i];
    optionbut.setAttribute("id", "button" + i);
    optionli.append(optionbut);
    options.append(optionli);
    optionbut.addEventListener("click", checkquest);

    if (i == 0) {
      quiz.innerHTML = QuestArray[i];
    }
  }
  a++;
}

function checkquest(event) {
  if (CorAns.includes(event.target.textContent)) {
    footer.textContent = "Correct!";
    switchques();
  } else {
    footer.textContent = "Incorrect";
  }
}

starter.addEventListener("click", Counter);
