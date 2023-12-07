

import { view } from "../helpers/globalVariables.js";

import { mainContent } from "../helpers/globalSelectors.js";

import { aboutContent } from "./aboutContent.js";
import { projectsContent } from "./projectsContent.js";

export function populateContent() {
    mainContent.innerHTML = "";
    switch (view) {
        case 'about':
            aboutContent();
            break;

        case 'projects':
            projectsContent();
            break;

        default:
            break;
    }
}