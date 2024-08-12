var AboutBefore = document.getElementById("AboutBefore")
var AboutAfter = document.getElementById("AboutAfter")
var SpecialText = document.getElementById("SpecialText")

var RNG = Math.floor(Math.random() * 343)

if (RNG == 0) {
    var TextRNG = Math.floor(Math.random() * 3)
    if (TextRNG == 0) { AboutBefore.innerHTML = "FINDME"}
    if (TextRNG == 1) { AboutBefore.innerHTML = "ISEEYOU"}
    if (TextRNG == 2) { AboutBefore.innerHTML = "HEARME"}
    AboutAfter.innerHTML = "343vsc"
    SpecialText.setAttribute("href", "../343vsc")
    AboutBefore.style.textShadow = "0 0 5px red"
    AboutAfter.style.textShadow = "0 0 5px red"
    AboutBefore.style.color = "red"
    AboutAfter.style.color = "red"
}