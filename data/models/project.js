export class Project {
    constructor({
        id,
        title,
        subtitle,
        img,
        grade,
        githubLink,
    }) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.img = img;
        this.grade = grade;
        this.githubLink = githubLink;
    }
}