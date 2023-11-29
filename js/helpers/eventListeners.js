import { setView } from "../index.js";

document.addEventListener('DOMContentLoaded', () => {
    thug.style.animation = "thugLife 2s linear 1";
    setView('about');
},);

aboutBtn.addEventListener('click', () => {
    setView('about');
},);

thug.addEventListener('click', () => {
    thug.style.animation = "thugging 2s linear 1";
    setTimeout(() => {
        thug.style.animation = "";
    }, 2000);
},);

projectsBtn.addEventListener('click', () => {
    setView('projects');
},);