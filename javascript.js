var button = document.getElementById("button")

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function clicked() {
  window.alert("Waiting in queue... do not close this window.")
}

var img = document.createElement("img")
img.src = "https://staticg.sportskeeda.com/editor/2024/01/439e4-17042428312455-1920.jpg"
document.body.appendChild(img)

button.addEventListener('click', clicked)
