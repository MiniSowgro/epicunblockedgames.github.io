var button = document.getElementById("button")

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function clicked() {
  var gambleNum = Math.random(1, 100)
  if gambleNum > 2{
    reward = true
  }
  else {
    reward = false
  }
}

var img = document.createElement("img")
img.src = "https://staticg.sportskeeda.com/editor/2024/01/439e4-17042428312455-1920.jpg"
document.body.appendChild(img)

button.addEventListener('click', clicked)

var gambleNum = Math.random(1, 100)
if gambleNum > 2:
  reward = true
else:
  reward = false
