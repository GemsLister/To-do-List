import { storageLocal } from "./storage.js";

export const projectFunc = (projects) => {
    if(!Array.isArray(projects)) return;
    class Project {
        constructor(projectName) {
            this.projectName = projectName;
        }
    } 

    const array = [];
    
    projects.forEach(projectName => {
        const projectClassName = new Project(projectName);
        array.push(projectClassName);
    });

    storageLocal(array);
}