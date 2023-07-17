var timer = document.querySelector("#time");
var starter = document.querySelector("#Startbutton");

var count = 0;

function Counter() {
  var timerInterval = setInterval(function () {
    count++;
    timer.textContent = "Timer:" + count;
  }, 1000);
}

starter.addEventListener("click", Counter);
