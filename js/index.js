
import { setView, viewButtonsListener } from "./setView.js";
import { view } from "./helpers/globalVariables.js";

const thug = document.querySelector("#thug");
const body = document.querySelector("body");
const themeToggler = document.querySelector(".theme-toggler");

window.addEventListener("load", () => {
    thug.style.animation = "thugLife 2s linear 1";
    setView(view);
    viewButtonsListener();
});

themeToggler.addEventListener("click", () => {
    startViewTransitionOrNot(toggleTheme);
});

function toggleTheme() {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        theme = "dark";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        theme = "light";
    }
}





thug.addEventListener('click', () => {
    thug.style.animation = "thugging 2s linear 1";
    setTimeout(() => {
        thug.style.animation = "";
    }, 2000);
},);