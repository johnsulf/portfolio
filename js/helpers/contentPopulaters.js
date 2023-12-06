import { schoolProjects, privateProjects } from "../../data/projects.js";
import { activeView, activeSubView } from "../index.js";



const mainContent = document.querySelector('.main-content');

export function populateMainContent() {
    mainContent.innerHTML = "";
    switch (activeView) {
        case 'about':

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
            break;

        case 'projects':

            if (activeSubView === 'school') {
                displayProjectCards(schoolProjects);
            } else {
                displayProjectCards(privateProjects);
            }
            break;

        default:
            break;
    }
}

function displayProjectCards(projects) {
    projects.forEach((p, i) => {
        mainContent.innerHTML +=
            `<div class="main-content__card" style="background-color: ${p.color}; color: ${p.textColor}">
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