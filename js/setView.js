
import { populateContent } from "./content/populateContent.js";

import {
    view,
    modifyView,
} from "./helpers/globalVariables.js";

import {
    startViewTransitionOrNot,
    changeActiveButton
} from "./helpers/genHelpers.js";

const viewButtonsContainer = document.querySelector(".header__view-buttons");
const viewButtons = document.querySelectorAll(".view-button");

export function setView() {
    populateContent();
    setActiveButton();
}

function setActiveButton() {
    viewButtons.forEach((button) => {
        let buttonView = button.getAttribute("view");
        if (view === buttonView) {
            button.classList.add("active");
        }
    });
}

export function addViewButtonsListener() {

    viewButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const newView = e.currentTarget.getAttribute("view");
            modifyView(newView);
            changeActiveButton(e.currentTarget, viewButtonsContainer);
            startViewTransitionOrNot(setView, view);
        });
    });
}