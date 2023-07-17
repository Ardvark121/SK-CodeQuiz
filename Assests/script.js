//Sets constants and variables used/changed in the functions
const timer = document.querySelector("#time");
const starter = document.querySelector("#Startbutton");
//Puts a
const QuestArray = [
  'What is the correct JavaScript syntax to write "Hello World"?',
];
//includes all the options for the first question
const Answers1 = [
  'response.write("Hello World")',
  '"Hello World"',
  'document.write("Hello World")',
  '("Hello World")',
];
//adds all the options for each question into an array
const AnswrArray = [Answers1];
const CorAns = ['document.write("Hello World")'];
var quiz = document.querySelector("#Questions");
var options = document.querySelector("#Options");
var footer = document.querySelector("#check");
var pick = "";

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
    optionbut.innerHTML = Answers[i];
    optionbut.setAttribute("id", "button" + i);
    optionli.append(optionbut);
    options.append(optionli);
    optionbut.addEventListener("click", checkquest);

    if (i == 0) {
      quiz.innerHTML = QuestArray[i];
    }
  }
  a = a + 1;
}

function checkquest(event) {
  if (CorAns.includes(event.target.textContent)) {
    footer.textContent = "Correct!";
  } else {
    footer.textContent = "Incorrect";
  }
}

starter.addEventListener("click", Counter);
