import { setSubView, setView } from "../index.js";

window.addEventListener('load', () => {
    thug.style.animation = "thugLife 2s linear 1";
    setView('about');
},);

aboutBtn.addEventListener('click', () => {
    setView('about');
},);

projectsBtn.addEventListener('click', () => {
    setView('projects');
    setSubView('school');
    schoolBtn.addEventListener('click', () => {
        setSubView('school');
    });
    privateBtn.addEventListener('click', () => {
        setSubView('private');
    });
},);

thug.addEventListener('click', () => {
    thug.style.animation = "thugging 2s linear 1";
    setTimeout(() => {
        thug.style.animation = "";
    }, 2000);
},);