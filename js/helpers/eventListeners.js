import { setView } from "../index.js";

document.addEventListener('DOMContentLoaded', () => {
    setView('about');
},);

aboutBtn.addEventListener('click', () => {
    setView('about');
},);

projectsBtn.addEventListener('click', () => {
    setView('projects');
},);