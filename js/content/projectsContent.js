
import {
    mainHeader,
    mainContent,
    imageContainer,
    img
} from "../helpers/globalSelectors.js";

import {
    removeAndAddClass,
    setActiveButton,
    startViewTransitionOrNot,
    filterProjects
} from "../helpers/genHelpers.js";

import {
    projectFilter,
    modifyProjectFilter
} from "../helpers/globalVariables.js";

import { projects } from "../../data/projects.js";

export function projectsContent() {

    mainHeader.innerHTML = `<h1>projects</h1>
                            <div class="main-header__filter-buttons">
                                <button class="filter-button active" data-filter="all">all</button>
                                <button class="filter-button" data-filter="school">school</button>
                                <button class="filter-button" data-filter="private">private</button>
                            </div>`;


    removeAndAddClass(mainHeader, "bg-tertiary", "bg-secondary");
    removeAndAddClass(imageContainer, "bg-secondary", "bg-tertiary");

    img.src = "/assets/images/mymac.png";
    removeAndAddClass(img, "filter-32-sec2", "filter-32-pri");

    thug.style.opacity = "0";

    displayProjectCards();

    const filterButtonsContainer = document.querySelector(".main-header__filter-buttons");
    const filterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".main-content__card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const filter = e.currentTarget.getAttribute("data-filter");
            modifyProjectFilter(filter);
            console.log("Project filter: " + projectFilter);
            setActiveButton(e.currentTarget, filterButtonsContainer);
            startViewTransitionOrNot(filterProjects, filter, projects);
        });
    });
}

function displayProjectCards() {
    projects.forEach((p, i) => {
        mainContent.innerHTML +=
            `<div class="main-content__card" data-group="${p.dataGroup}" style="background-color: ${p.color}; color: ${p.textColor}">
                <div class="card__header">
                    <a style="color: ${p.textColor}" href="${p.webURL}" target="_blank">
                        <h2>${p.title}</h2>
                    </a> 
                    <p>${p.subtitle}</p>
                </div>
                <img src="${p.img}" />
                <a class="card__github-btn" href="${p.githubURL}" target="_blank">
                    <img class="github-btn__logo" src="../../assets/icons/github.png" />
                    <img class="github-btn__open-in-new" src="../../assets/icons/open_in_new.png" />
                </a> 
            </div>`;
    },);
}