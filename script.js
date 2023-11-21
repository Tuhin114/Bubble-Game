function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 220; i++) {
    //To generate random number we use Math.floor(Math.random() * 10 as Math.random generates any random number between 0 & 1 and Math.floor make removes any digites after decimal of any float number
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
function runTimer() {
  var timerClear = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerClear);
    }
  }, 1000);
}

function getNewHit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = rn;
}

getNewHit();
runTimer();
makeBubble();
