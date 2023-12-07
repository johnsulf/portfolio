
import { addViewButtonsListener } from "./setView.js";
import { getAndSetTheme, getAndSetView } from "./helpers/globalVariables.js";
import { addThugListener } from "./helpers/thug.js";
import { addThemeTogglerListener } from "./toggleTheme.js";

window.addEventListener("load", () => {
    getAndSetTheme();
    getAndSetView();
    addViewButtonsListener();
    addThugListener();
    addThemeTogglerListener();
});