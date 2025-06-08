import { displayProject } from "./render";


export const storageFunc = (projectArray) => {
    if (!Array.isArray(projectArray)) return;
    const storageArray = [];
    projectArray.forEach (projects => {
        storageArray.push(projects);
    })
    
    displayProject(storageArray);
} 