var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomButton");

function changeGradient() {
    body.style.background = 
    "linear-gradient(to right,"
    + color1.value
    + ","
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


function randomColors() {
    var r = getRandomNum(0, 255);
    var g = getRandomNum(0, 255);
    var b = getRandomNum(0, 255);
    hex = rgbToHex(r, g, b);
    return hex
}

function setRandomGradient() {
    body.style.background = 
        "linear-gradient(to right,"
        + randomColors()
        + ","
        + randomColors()
        + ")";


    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient)

color2.addEventListener("input", changeGradient)

button.addEventListener("click", setRandomGradient)