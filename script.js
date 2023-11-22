var timer = 60;
var score = 0;
var hitrn;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 220; i++) {
    //To generate random number we use Math.floor(Math.random() * 10 as Math.random generates any random number between 0 & 1 and Math.floor make removes any digites after decimal of any float number
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer() {
  var timerClear = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerClear);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  if ((clickedNumber = hitrn)) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
makeBubble();
