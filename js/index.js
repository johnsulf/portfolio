import { projects } from "../data/projects.js";

const mainContent = document.querySelector('.main-content');

function populateProjectsCards() {
    let html = "";

    projects.forEach((p, i) => {
        html = `<div class="main-content__card" id="card-${i}">
                    <h2>${p.title}</h2>
                    <p>${p.subtitle}</p>
                    <img src="${p.img}" />
                    <a href="${p.githubLink}">GitHub Repo</a> 
                </div>`;
        mainContent.innerHTML += html;
    },);
}

populateProjectsCards();