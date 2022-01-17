window.onload = myFunction

const hamburger = document.querySelector(".hamburger");
const navBox = document.querySelector(".nav-box");
const heroHeading = document.querySelector("#hero-heading");
const heroArrow = document.querySelector("#hero-arrow");


hamburger.addEventListener("click", myFunction);


function myFunction() {

    if (navBox.style.display == "none") {

    navBox.style.display = "unset";
    heroArrow.style.display = "none";
    heroHeading.style.display = "none";
} else {
    navBox.style.display = "none";
    heroArrow.style.display = "unset";
    heroHeading.style.display = "unset";
}

}