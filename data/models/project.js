export class Project {
    constructor({
        id,
        title,
        webURL,
        subtitle,
        img,
        color,
        textColor,
        grade,
        githubURL,
    }) {
        this.id = id;
        this.title = title;
        this.webURL = webURL;
        this.subtitle = subtitle;
        this.img = img;
        this.color = color;
        this.textColor = textColor;
        this.grade = grade;
        this.githubURL = githubURL;
    }
}