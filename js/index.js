
import { addViewButtonsListener } from "./setView.js";
import { getAndSetTheme, getAndSetView } from "./helpers/globalVariables.js";
import { addThugListener } from "./helpers/thug.js";
import { addThemeTogglerListener } from "./toggleTheme.js";
import { progressAnimation } from "./helpers/studyProgress.js";

document.addEventListener("DOMContentLoaded", () => {
    getAndSetTheme();
    getAndSetView();
    addViewButtonsListener();
    addThemeTogglerListener();
});

window.addEventListener("load", () => {
    addThugListener();
    progressAnimation();
});