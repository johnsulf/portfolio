
import { body } from "./globalSelectors.js";
import { setView } from "../setView.js";

export let theme;

export function getAndSetTheme() {
    theme = localStorage.getItem("theme");
    if (!theme) {
        theme = "light";
    }
    if (theme === "dark") {
        body.classList.remove("light");
        body.classList.add("dark");
        modifyTheme('dark');
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        modifyTheme('light');
    }
}

export function modifyTheme(newTheme) {
    theme = newTheme;
    console.log("theme: " + theme);
    localStorage.setItem("theme", theme);
}

export let view;

export function getAndSetView() {
    view = localStorage.getItem("view");
    if (!view) {
        modifyView("about");
    }
    setView();
}

export function modifyView(newView) {
    view = newView
    console.log("view: " + view);
    localStorage.setItem("view", view);
};

export let projectFilter = "all"

export function modifyProjectFilter(newFilter) {
    projectFilter = newFilter
    console.log("projectFilter: " + projectFilter);
};