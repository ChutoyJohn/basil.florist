var bg1 = document.getElementById("bg1")
var bg2 = document.getElementById("bg2")

var randomnumber = Math.floor(Math.random() * 2)

if (randomnumber == 0) {
    bg1.style.backgroundImage = "url('../bg/bg1.png')"
    bg2.style.backgroundImage = "url('../bg/bg1.png')"
};

if (randomnumber == 1) {
    bg1.style.backgroundImage = "url('../bg/bg2.png')"
    bg2.style.backgroundImage = "url('../bg/bg2.png')"
};