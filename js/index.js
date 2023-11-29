
import { populateMainContent } from "./helpers/contentPopulaters.js";
import { removeAndAddClass } from "./helpers/reusables.js";

const aboutBtn = document.querySelector("#aboutBtn");
const projectsBtn = document.querySelector("#projectsBtn");
const thug = document.querySelector("#thug");
const mainHeader = document.querySelector('.main-header');
const imageContainer = document.querySelector('.content__image-container');

const img = imageContainer.lastElementChild.firstElementChild;

export let activeView;

export function setView(view) {
    activeView = view;
    switch (activeView) {
        case 'about':
            setContent(
                "about",
                aboutBtn,
                projectsBtn,
                "bg-secondary",
                "bg-tertiary",
                "bg-tertiary",
                "bg-secondary",
                "/assets/images/portrait.png",
                "filter-32-pri",
                "filter-32-sec2",
                "goMan 4s ease-in-out 1"
            );
            thug.style.opacity = "1";
            break;
        case 'projects':
            setContent(
                "projects",
                projectsBtn,
                aboutBtn,
                "bg-tertiary",
                "bg-secondary",
                "bg-secondary",
                "bg-tertiary",
                "/assets/images/mymac.png",
                "filter-32-sec2",
                "filter-32-pri",
                "goWoman 4s ease-in-out 1"
            );
            thug.style.opacity = "0";
            break;
        default:
            break;
    }
    populateMainContent();
}

function setContent(
    h1,
    activeNavButton,
    inactiveNavButton,
    mainHeaderRemove,
    mainHeaderAdd,
    imgContainerRemove,
    imgContainerAdd,
    imgSrc,
    imgRemove,
    imgAdd,
    imgAnimation) {
    mainHeader.innerHTML = `<h1>${h1}</h1>`;
    inactiveNavButton.classList.remove("active");
    activeNavButton.classList.add("active");
    removeAndAddClass(mainHeader, mainHeaderRemove, mainHeaderAdd);
    removeAndAddClass(imageContainer, imgContainerRemove, imgContainerAdd);
    img.src = imgSrc;
    removeAndAddClass(img, imgRemove, imgAdd);
    img.style.animation = imgAnimation;
}
