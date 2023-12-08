
let progress = 0;

export function studyProgress() {
    const today = new Date();
    const studyStart = new Date("2022-01-01");
    const studyEnd = new Date("2025-12-12");

    const q = Math.abs(today - studyStart);
    const d = Math.abs(studyEnd - studyStart);

    progress = Math.round((q / d) * 100);

    return progress;
}

export function progressBarColor() {
    if (progress < 20) {
        return "var(--color-progress0)";
    }
    if (progress > 19 && progress < 40) {
        return "var(--color-progress1)";
    }
    if (progress > 39 && progress < 60) {
        return "var(--color-progress2)";
    }
    if (progress > 59 && progress < 80) {
        return "var(--color-progress3)";
    }
    if (progress > 79) {
        return "var(--color-progress4)";
    }
    return "var(--color-progress4)";
}

export function progressAnimation() {
    const progressBar = document.querySelector(".progress__bar");
    const progressNumber = document.querySelector(".progress__number");
    progressBar.style.animation = "growBar 3s linear 1";
    progressNumber.style.animation = "displayNumber 3.2s linear 1";
}