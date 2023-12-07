
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
            <div class="about__about">
                <h2 class="about__header">I'm <span class="text-contrast">Erlend</span></h2>
                <h3 class="about__sub-header">A <span class="text-contrast2">{front-end}</span> developer from Norway</h3>
                <p class="about__paragraph">Passionate about crafting user-centric web applications, I blend front-end expertise with practical experience.</p> 
            </div>
            <div class="about__showcase">
                <div class="showcase">
                    <p class="showcase__paragraph">I work at Helse Vest IKT as a developer. Mainly with Angular. Previously I worked as a nurse sepcialist at a childrens hospital.</p>
                </div>
                <div class="showcase">
                    <p class="showcase__paragraph">I study front-end development at Noroff School of Technology from 2022 to 2026.</p>
                </div>
                <div class="showcase">
                    <p class="showcase__paragraph">I developed the app dgputt for disc golfers. It is build with Flutter, and uses Firebase as back-end.</p>
                </div>
            </div>
            <p class="about__paragraph">Have some fun and tap my sunglasses!<br>Like it darker? Tap the black dot in the header.<br>Don't forget to check out my projects!</p>
            <div class="about__media-links">
                <a href="/">
                    <img src="/assets/icons/facebook.png" />
                </a>
                <a href="/">
                    <img src="/assets/icons/github_cat.png" />
                </a>
                <a href="/">
                    <img src="/assets/icons/mail.png" />
                </a>
            </div>
        </div>`;
}