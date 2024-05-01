var button = document.getElementById("button")

function clicked() {
window.alert("No games yet!")
}

var img = document.createElement("img")
img.src = "https://staticg.sportskeeda.com/editor/2024/01/439e4-17042428312455-1920.jpg"
document.body.appendChild(img)

button.addEventListener('click', clicked)
