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
document.addEventListener("DOMContentLoaded", function () {
    const colors = document.querySelectorAll(".colors span");

    colors.forEach(color => {
        color.addEventListener("click", function () {
            setActiveStyle(color.classList[0]); // Passa a primeira classe do elemento como parâmetro
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const colors = document.querySelectorAll(".colors span");

    colors.forEach(color => {
        color.addEventListener("click", function () {
            const selectedColor = color.getAttribute("data-color");
            console.log(selectedColor)
            alternateStyles.forEach(style => {
                if (selectedColor === style.getAttribute("title")) {
                    style.removeAttribute("disabled");
                } else {
                    style.setAttribute("disabled", "true");
                }
            });
        });
    });
});

const alternateStyles = document.querySelectorAll(".alternate-style");

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