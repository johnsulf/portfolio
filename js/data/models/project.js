export class Project {
    constructor({
        id,
        dataGroup,
        title,
        webURL,
        subtitle,
        img,
        color,
        textColor,
        githubURL,
    }) {
        this.id = id;
        this.dataGroup = dataGroup;
        this.title = title;
        this.webURL = webURL;
        this.subtitle = subtitle;
        this.img = img;
        this.color = color;
        this.textColor = textColor;
        this.githubURL = githubURL;
    }
}