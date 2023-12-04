
import { populateMainContent } from "./helpers/contentPopulaters.js";
import { removeAndAddClass } from "./helpers/reusables.js";

const aboutBtn = document.querySelector("#aboutBtn");
const projectsBtn = document.querySelector("#projectsBtn");
const thug = document.querySelector("#thug");
const mainHeader = document.querySelector('.main-header');
const imageContainer = document.querySelector('.content__image-container');

const img = imageContainer.lastElementChild.firstElementChild;

export let activeView;
export let activeSubView;

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
                "erlendImgAnimation 4s ease-in-out 1"
            );
            thug.style.opacity = "1";
            break;
        case 'projects':
            activeSubView = 'school';
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
                "macbookImgAnimation 4s ease-in-out 1"
            );
            mainHeader.innerHTML += `<div class="main-header__nav">
                                        <button id="schoolBtn">school</button>
                                        <button id="privateBtn">private</button>
                                    </div>`;
            thug.style.opacity = "0";
            break;
        default:
            break;
    }
    populateMainContent();
}

export function setSubView(subView) {
    const schoolBtn = document.querySelector("#schoolBtn");
    const privateBtn = document.querySelector("#privateBtn");

    activeSubView = subView;
    switch (activeSubView) {
        case 'school':
            privateBtn.classList.remove("active");
            schoolBtn.classList.add("active");
            break;
        case 'private':
            schoolBtn.classList.remove("active");
            privateBtn.classList.add("active");
    }
    populateMainContent()
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
