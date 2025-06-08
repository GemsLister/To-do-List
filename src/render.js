import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import listFlix from "./assets/listflix.png";
import { projectFunc } from "./project";

export const asideEle = document.querySelector("aside");
let projectArr = JSON.parse(localStorage.getItem("projectKey")) || [];

export const asideAndMainRender = () => {
  // create logo
  const logo = new Image();
  logo.src = listFlix;
  logo.className = "logo";
  logo.style.cssText = `
        height: clamp(100px, 15vw, 150px);
        padding: .8rem 0;
    `;
  // logo figure
  const logoFig = document.createElement("figure");
  logoFig.className = "logoFig";
  logoFig.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: end;
        height: clamp(130px, 25vw, 170px);
        width: 100%;      
    `;
  logoFig.appendChild(logo);

  const itemsContainer = document.createElement("div");
  itemsContainer.className = "items-container";

  const addAndProjects = [
    {
      name: "Add Project",
      nameClass: "add-project",
      itemType: "button",
      btnIcon: "fa-solid fa-plus",
    },
    {
      name: "Projects",
      nameClass: "projects",
      itemType: "div",
      btnIcon: "fa-solid fa-list-check",
    },
  ];

  for (const items of addAndProjects) {
    const createContainer = document.createElement(`${items.itemType}`);
    createContainer.className = `${items.nameClass}`;
    const createText = document.createElement("p");
    const buttonIcon = document.createElement("i");

    buttonIcon.className = `${items.btnIcon}`;
    createText.textContent = `${items.name}`;
    createContainer.style.cssText = `
        display: flex;
        gap: 4.8rem;
        padding: 1rem;
        width: clamp(40%, 20vw, 80%);
    `;
    createContainer.append(buttonIcon, createText);
    itemsContainer.append(createContainer);
  }

  asideEle.append(logoFig, itemsContainer);

  const addProject = document.querySelector(".add-project");
  const projectForm = document.querySelector(".project-form");
  const addPCloseBtn = document.querySelector(".addP-close-button");
  addProject.addEventListener("click", () => {
    projectForm.classList.add("active");
  });
  addPCloseBtn.addEventListener("click", () => {
    projectForm.classList.remove("active");
  });
};

export const projectBtnFunc = () => {
  const projectSaveBtn = document.querySelector(".save-project");
  const projectInput = document.querySelector("#project-input");

  projectSaveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const projectItem = projectInput.value.trim(); //to avoid adding blank input values
    if (projectItem) {
      projectArr.push({ projectName: projectInput.value });
      const storageProjectArray = localStorage.setItem(
        "projectKey",
        JSON.stringify(projectArr)
      );
      projectFunc(storageProjectArray);
      displayProject(projectArr);
    }
  });
};

export const displayProject = (storageArray) => {
  // removes the existing object
  const previousContainer = asideEle.querySelector(".project-container");
  if (previousContainer) asideEle.removeChild(previousContainer);

  let projectContainer = document.createElement("div");
  projectContainer.className = "project-container";
  for (const storageItems of storageArray) {
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = storageItems.projectName;
    projectContainer.appendChild(projectTitle);
  }

  const insertProject = asideEle.querySelector(".items-container");
  if (insertProject && insertProject.nextSibling) {
    asideEle.insertBefore(projectContainer, itemsContainer.nextSibling);
  } else asideEle.appendChild(projectContainer);
}

displayProject(projectArr);
projectBtnFunc();