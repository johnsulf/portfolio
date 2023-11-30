import { Project } from "./models/project.js";

export const projects = [
    new Project({
        id: 0,
        title: 'puttingLAB',
        webURL: 'https://puttinglab.netlify.app',
        subtitle: 'Project Exam 1',
        img: '/assets/images/puttinglab.jpg',
        color: 'var(--color-puttinglab)',
        textColor: 'var(--color-black)',
        grade: 'Not graded',
        githubURL: 'https://github.com/johnsulf/project-exam-1-johnsulf',
    },),
    new Project({
        id: 1,
        title: 'Community Science Museum',
        webURL: 'https://csmuseum1.netlify.app/',
        subtitle: 'Semester Project 1',
        img: '/assets/images/csmuseum.jpg',
        color: 'var(--color-primary)',
        textColor: 'var(--color-black)',
        grade: 'A',
        githubURL: 'https://github.com/johnsulf/sp1',
    },),
    new Project({
        id: 2,
        title: 'RainyDays', 
        subtitle: 'Cross-course Project (Design, HTML & CSS, Interactive Design)',
        webURL: 'https://rainydaysej.netlify.app',
        img: '/assets/images/rainydays.jpg',
        color: 'var(--color-rainydays)',
        textColor: 'var(--color-white)',
        grade: 'A',
        githubURL: 'https://github.com/johnsulf/rainydays',
    },),
]