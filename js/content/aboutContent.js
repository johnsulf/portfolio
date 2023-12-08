
import {
    mainHeader,
    mainContent,
    imageContainer,
    img
} from "../helpers/globalSelectors.js";

import { removeAndAddClass } from "../helpers/genHelpers.js";

import { studyProgress, progressBarColor } from "../helpers/studyProgress.js";



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
                <h2 class="about__header">I'm <span class="text-contrast">Erlend</span> <span style="vertical-align: middle; font-size: 1.25rem; font-family: 'Courier New'">('ɛːɭɛn)</span></h2>
                <h3 class="about__sub-header"><span class="text-contrast2">< { front-end } /></span> developer</h3>
                <p class="about__paragraph">Passionate about crafting user-centric mobile apps and web solutions, I blend front-end expertise with practical experience.</p> 
            </div>
            <div class="about__showcase">
                <div class="showcase">
                    <p class="showcase__paragraph">I work at Helse Vest IKT as a developer. Mainly with Angular.</p>
                </div>
                <div class="showcase">
                    <p class="showcase__paragraph">I study front-end development at Noroff School of Technology.</p>
                </div>
                <div class="showcase">
                    <p class="showcase__paragraph">I developed the app dgputt for disc golfers with Flutter.</p>
                </div>
            </div>
            <div class="about__study-progress">
                <div class="study-progress__progress">
                    <div class="progress__bar" style="width: ${studyProgress()}%; background-color: ${progressBarColor()}"></div>
                </div>
                <p class="showcase__paragraph progress__number">Studyprogress: ${studyProgress()}%</p>
            </div>
            <p class="about__paragraph">Have some fun and tap my sunglasses!<br>Like it darker? Tap the black dot in the header.<br>Don't forget to check out my projects!</p>
            <div class="about__media-links">
                <a href="https://facebook.com/johnsulf" target="blank">
                    <img src="/assets/icons/facebook.png" />
                </a>
                <a href="https://github.com/johnsulf" target="blank">
                    <img src="/assets/icons/github_cat.png" />
                </a>
                <a href="mailto:erlendjohns@gmail.com?subject=Mail from Portfolio&body=Hi Erlend,%0D%0A%0D%0A%0D%0A" target="blank">
                    <img src="/assets/icons/mail.png" />
                </a>
            </div>
        </div>`;
}