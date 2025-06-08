import { storageFunc } from "./storage"; 

export const projectFunc = (arrayProject) => {
  const projects = [];
  if (!Array.isArray(arrayProject)) return;
  arrayProject.forEach((projectObjects) => {
    projects.push(projectObjects);
  });
  storageFunc(projects);
};
