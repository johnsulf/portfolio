import { Project } from "./models/project.js";

export const projects = [
    new Project({
        id: 0,
        title: 'RainyDays',
        subtitle: 'Cross-course Project',
        img: '/assets/images/rainydays.png',
        grade: 'A',
        githubLink: 'https://github.com/johnsulf/rainydays',
    },),
    new Project({
        id: 1,
        title: 'Community Science Museum',
        subtitle: 'Semester Project 1',
        img: '/assets/images/csmuseum.png',
        grade: 'A',
        githubLink: 'https://github.com/johnsulf/sp1',
    },),
    new Project({
        id: 2,
        title: 'puttingLAB',
        subtitle: 'Project Exam 1',
        img: '/assets/images/puttinglab.png',
        grade: 'Not graded',
        githubLink: 'https://github.com/johnsulf/project-exam-1-johnsulf',
    },),
]