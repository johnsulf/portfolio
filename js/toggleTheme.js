import { startViewTransitionOrNot } from "./helpers/genHelpers.js";
import { modifyTheme } from "./helpers/globalVariables.js";
import { body } from "./helpers/globalSelectors.js";

const themeToggler = document.querySelector(".theme-toggler");

export function addThemeTogglerListener() {
    themeToggler.addEventListener("click", () => {
        startViewTransitionOrNot(toggleTheme);
    });
}

export function toggleTheme() {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        modifyTheme('dark');
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        modifyTheme('light');
    }
}