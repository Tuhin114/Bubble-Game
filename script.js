var timer = 60;
var score = 0;
var hitrn;
var timerClear; // Declare timerClear in the global scope

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 220; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  timerClear = setInterval(function () {
    // Removed 'var' keyword here
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerClear);
      document.querySelector("#pbtm").innerHTML = `<h1>Oops! Time up!</h1>`;
    }
  }, 1000);
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  } else {
    document.querySelector("#pbtm").innerHTML = `<h1>Oops! Wrong Bubble!</h1>`;
    clearInterval(timerClear); // Stop the timer (accessible from the global scope)
  }
});

getNewHit();
runTimer();
makeBubble();
