const timer = document.querySelector("#time");
const starter = document.querySelector("#Startbutton");
const QuestArray = [
  'What is the correct JavaScript syntax to write "Hello World"?',
];
const Answers1 = [
  'response.write("Hello World")',
  '"Hello World"',
  'document.write("Hello World")',
  '("Hello World")',
];
var quiz = document.querySelector("#Questions");
var options = document.querySelector("#Options");

var a = 1;

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
  Answers = Answers1;
  for (var i = 0; i < Answers.length; i++) {
    var optionli = document.createElement("li");
    var optionbut = document.createElement("button");
    optionbut.innerHTML = Answers[i];
    optionli.append(optionbut);
    options.append(optionli);
    if (i == 0) {
      quiz.innerHTML = QuestArray[i];
    }
  }
}
function checkquest() {}

starter.addEventListener("click", Counter);
