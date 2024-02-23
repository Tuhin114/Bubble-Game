var timer = 60;
var score = 0;
var hitrn;
var timerClear; // Declare timerClear in the global scope

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function makeBubble(numBubbles) {
  var clutter = "";
  for (var i = 1; i <= numBubbles; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  timerClear = setInterval(function () {
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

// Function to update the number of bubbles based on screen width
function updateNumberOfBubbles() {
  var screenWidth = window.innerWidth;
  var numBubbles;

  if (screenWidth < 768) {
    // Set a lower number of bubbles for mobile screens
    numBubbles = 60;
  } else {
    // Use the original number of bubbles for larger screens
    numBubbles = 220;
  }

  makeBubble(numBubbles);
}

// Event listener for window resize to dynamically update the number of bubbles
window.onresize = updateNumberOfBubbles;

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNumber = Number(details.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    getNewHit();
    updateNumberOfBubbles(); // Update the bubbles after a correct click
  } else {
    document.querySelector("#pbtm").innerHTML = `<h1>Oops! Wrong Bubble!</h1>`;
    clearInterval(timerClear);
  }
});

getNewHit();
runTimer();
updateNumberOfBubbles(); // Initial call to set the number of bubbles based on screen width
