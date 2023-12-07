
export function removeAndAddClass(element, classToRemove, classToAdd) {
    element.classList.remove(classToRemove);
    element.classList.add(classToAdd);
}

export function filterProjects(projFilter, projects) {
    projects.forEach((p) => {
        const projGroup = p.getAttribute("data-group");
        if (projFilter === "all" || projFilter === projGroup) {
            p.classList.remove("hidden");
        } else {
            p.classList.add("hidden");
        }
    });
}

export function startViewTransitionOrNot(func, arg1 = "", arg2 = "") {
    if (!document.startViewTransition) {
        func(arg1, arg2);
    } else {
        document.startViewTransition(() => {
            func(arg1, arg2);
        });
    }
}

export function changeActiveButton(newActive, oldActive) {
    if (!oldActive.querySelector(".active")) { } else {
        oldActive.querySelector(".active").classList.remove("active");
    }
    newActive.classList.add("active");
}

