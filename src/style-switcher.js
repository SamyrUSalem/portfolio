//Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open")
})

//Hide Style - Switcher on Scroll
window.addEventListener("scroll", () => {
    //O contains esta verificando se o elemento possui a classe "open"
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

//Theme Colors
const alternateStyles = document.querySelectorAll(".alternate-style");
const colors = document.querySelectorAll(".colors span");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

colors.forEach((color) => {
    color.addEventListener("click", function () {
        const selectedColor = color.getAttribute("data-color");
        console.log(selectedColor);
        setActiveStyle(selectedColor);
    });
});

//Theme Light And Dark Mode
const dayNight = document.querySelector(".day-night")

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    } else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})