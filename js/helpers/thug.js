
export const thug = document.querySelector("#thug");

export function addThugListener() {
    thug.style.animation = "thugLife 2s linear 1";
    thug.addEventListener('click', () => {
        thug.style.animation = "thugging 2s linear 1";
        setTimeout(() => {
            thug.style.animation = "";
        }, 2000);
    },);
}
