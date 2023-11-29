import { projects } from "../../data/projects.js";
import { activeView } from "../index.js";

const mainContent = document.querySelector('.main-content');

export function populateMainContent() {
    mainContent.innerHTML = "";
    switch (activeView) {
        case 'about':

            mainContent.innerHTML = `<div>
                                        <h2>I am Erlend<h2>
                                        <h3>I develop front-end</h3>
                                        <p>Husband, father, cat- and dogowner, disc golfer</p>
                                        <br>
                                        <ul>
                                            <li>Private: dgputt</li>
                                            <li>School: Noroff</li>
                                            <li>Work: Helse Vest IKT</li>
                                        </ul>
                                    </div>`;
            break;
        case 'projects':

            projects.forEach((p, i) => {
                mainContent.innerHTML += `<div class="main-content__card" id="card-${i}">
                            <h2>${p.title}</h2>
                            <p>${p.subtitle}</p>
                            <img src="${p.img}" />
                            <a href="${p.githubLink}">GitHub Repo</a> 
                        </div>`;
            },);
            break;
        default:
            break;
    }
}