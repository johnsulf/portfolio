
import {
    mainHeader,
    mainContent,
    imageContainer,
    img
} from "../helpers/globalSelectors.js";

import { removeAndAddClass } from "../helpers/genHelpers.js";


export function aboutContent() {
    mainHeader.innerHTML = `<h1>about</h1>`;
    removeAndAddClass(mainHeader, "bg-secondary", "bg-tertiary");
    removeAndAddClass(imageContainer, "bg-tertiary", "bg-secondary");
    img.src = "/assets/images/portrait.png";
    removeAndAddClass(img, "filter-32-pri", "filter-32-sec2");

    thug.style.opacity = "1";

    mainContent.innerHTML =
        `<div class="main-content__about">
            <h2>I am <span class="text-dark">Erlend</span></h2>
            <p>(Yes, it is me in the picture)</p>
            <h3>I develop <span class="text-dark">front-end</span></h3>
            <ul>
                <li>Private: dgputt</li>
                <li>School: Noroff</li>
                <li>Work: Helse Vest IKT</li>
            </ul>
        </div>`;
}