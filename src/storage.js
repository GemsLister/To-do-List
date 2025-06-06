import { displayProject } from "./render.js";

export const storageLocal = (projectArr) => {
    if(!Array.isArray(projectArr)) return;
    
    const projectStorage = [];
    projectArr.forEach(pArr => {
        projectStorage.push(pArr);
    });
    
    localStorage.setItem('pr', JSON.stringify(projectStorage));
    const getProject = JSON.parse(localStorage.getItem('pr')) || [];
    displayProject(getProject);
} 