//Sets constants and variables used/changed in the functions
const timer = document.querySelector("#time");
const starter = document.querySelector("#Startbutton");
//Puts a
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
  while (options.lastChild) {
    options.removeChild(options.lastChild);
  }
  if (QuestArray[a] == null) {
    quiz.innerHTML = "Done";
    RecordScore();
  } else {
    quiz.innerHTML = QuestArray[a];
    console.log(QuestArray[a]);
    for (var i = 0; i < Answers.length; i++) {
      var optionli = document.createElement("li");
      var optionbut = document.createElement("button");
      optionbut.textContent = Answers[i];
      optionbut.classList.add("OptBut");
      optionli.append(optionbut);
      options.append(optionli);
      optionbut.addEventListener("click", checkquest);
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
function RecordScore() {
  var theNd = document.createElement("ul");
  theNd.textContent = "Your score is " + count + " seconds";
  options.append(theNd);
  var Initial = document.createElement("input");
  Initial.setAttribute("type", "text");
  options.textContent = "Name:";
  var Submit = document.createElement("button");
  Submit.textContent = "Submit";
  options.append(Initial);
  options.append(Submit);
  Submit.addEventListener("click", RecordPage);
}
function RecordPage() {}

starter.addEventListener("click", Counter);
