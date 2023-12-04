import { Project } from "./models/project.js";

export const schoolProjects = [
    new Project({
        id: 0,
        title: 'puttingLAB',
        webURL: 'https://puttinglab.netlify.app',
        subtitle: 'Project Exam 1',
        img: '/assets/images/puttinglab.jpg',
        color: 'var(--color-puttinglab)',
        textColor: 'var(--color-black)',
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
        githubURL: 'https://github.com/johnsulf/rainydays',
    },),
    new Project({
        id: 3,
        title: 'Pokémon 151',
        subtitle: 'JavaScript1 Course Assignment',
        webURL: 'https://pokemon151.netlify.app',
        img: '/assets/images/pokemon151.jpg',
        color: 'var(--color-pokemon)',
        textColor: 'var(--color-white)',
        githubURL: 'https://github.com/johnsulf/erlend-johnsen-js1-ca-pokemon',
    },),
];

export const privateProjects = [
    new Project({
        id: 0,
        title: 'dgputt',
        webURL: 'https://apps.apple.com/no/app/dgputt/id1536711552',
        subtitle: 'Disc Golf Putting App',
        img: '/assets/images/dgputt.jpg',
        color: 'var(--color-primary-opacity)',
        textColor: 'var(--color-black)',
        githubURL: 'https://github.com/johnsulf/dgputt/',
    },),
    new Project({
        id: 1,
        title: 'dgputt.app',
        webURL: 'https://dgputt.app',
        subtitle: 'Landing Page for dgputt',
        img: '/assets/images/dgputtweb.jpg',
        color: 'var(--color-primary-opacity)',
        textColor: 'var(--color-black)',
        githubURL: 'https://github.com/johnsulf/dgputt-web',
    },),
]