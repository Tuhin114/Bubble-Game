var clutter = "";
for (var i = 1; i <= 220; i++) {
  //To generate random number we use Math.floor(Math.random() * 10 as Math.random generates any random number between 0 & 1 and Math.floor make removes any digites after decimal of any float number
  clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
