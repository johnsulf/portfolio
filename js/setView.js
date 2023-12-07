
import { populateContent } from "./content/populateContent.js";

import {
    view,
    modifyView,
} from "./helpers/globalVariables.js";

import {
    setActiveButton,
    startViewTransitionOrNot
} from "./helpers/genHelpers.js";

export function setView(viewToSet) {
    modifyView(viewToSet);
    populateContent();
}

export function viewButtonsListener() {
    const viewButtonsContainer = document.querySelector(".header__view-buttons");
    const viewButtons = document.querySelectorAll(".view-button");

    viewButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const newView = e.currentTarget.getAttribute("view");
            modifyView(newView);
            console.log("View: " + view);
            setActiveButton(e.currentTarget, viewButtonsContainer);
            startViewTransitionOrNot(setView, view);
        });
    });
}