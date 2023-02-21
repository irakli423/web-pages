let circle = document.getElementById("circle");
let cupBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");

let rotatevalue = circle.style.transform;
let rotatesum;

upBtn.onclick = function () {
  rotatesum = rotatevalue + "rotate(-90deg)";
  circle.style.transform = rotatesum;
  rotatevalue = rotatesum;
};

downBtn.onclick = function () {
  rotatesum = rotatevalue + "rotate(90deg)";
  circle.style.transform = rotatesum;
  rotatevalue = rotatesum;
};