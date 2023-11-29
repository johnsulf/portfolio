
import { populateMainContent } from "./helpers/contentPopulaters.js";
import { removeAndAddClass } from "./helpers/reusables.js";

const mainHeader = document.querySelector('.main-header');
const imageContainer = document.querySelector('.content__image-container');

const img = imageContainer.lastElementChild;

export let activeView;

export function setView(view) {
    activeView = view;
    switch (activeView) {
        case 'about':
            setContent(
                "about",
                "bg-secondary",
                "bg-tertiary",
                "bg-tertiary",
                "bg-secondary",
                "/assets/images/portrait.png",
                "filter-32-pri",
                "filter-32-sec2",
                "goMan 4s ease-in-out 1"
            );
            break;
        case 'projects':
            setContent(
                "projects",
                "bg-tertiary",
                "bg-secondary",
                "bg-secondary",
                "bg-tertiary",
                "/assets/images/mymac.png",
                "filter-32-sec2",
                "filter-32-pri",
                "goWoman 4s ease-in-out 1"
            );
            break;
        default:
            break;
    }
    populateMainContent();
}

function setContent(
    h1,
    mainHeaderRemove,
    mainHeaderAdd,
    imgContainerRemove,
    imgContainerAdd,
    imgSrc,
    imgRemove,
    imgAdd,
    imgAnimation) {
    mainHeader.innerHTML = `<h1>${h1}</h1>`;
    removeAndAddClass(mainHeader, mainHeaderRemove, mainHeaderAdd);
    removeAndAddClass(imageContainer, imgContainerRemove, imgContainerAdd);
    img.src = imgSrc;
    removeAndAddClass(img, imgRemove, imgAdd);
    img.style.animation = imgAnimation;
}
