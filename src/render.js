import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import listFlix from "./assets/listflix.png";
import { projectFunc } from "./project";

export const asideEle = document.querySelector("aside");
let projectArray = JSON.parse(localStorage.getItem("pr")) || [];
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

export const projectSaveBtnFunc = () => {
  const projectSaveBtn = document.querySelector(".save-project");
  const projectInput = document.querySelector("#project-input");
  projectSaveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectArray.push({ projectName: projectInput.value });
    projectFunc(projectArray);
  });
};

projectSaveBtnFunc();

export const displayProject = (storageProject) => {
  // const storageProjectArray = [];
  const iconsArray = ["fas fa-edit", "fa-solid fa-trash"];
  storageProject.forEach((storedProjects) => {
    const projectContainer = document.createElement("div");
    projectContainer.className = "project-container";
    projectContainer.style.cssText = `
      display: flex;
    `;
    const projectText = document.createElement("p");
    projectText.textContent = String(storedProjects.projectName);
    projectContainer.appendChild(projectText);

    for (const iconItems of iconsArray) {
      const iconsContainer = document.createElement("div");
      const icons = document.createElement("i");
      icons.className = iconItems;
      iconsContainer.appendChild(icons);
      projectContainer.appendChild(iconsContainer);
    }
    asideEle.appendChild(projectContainer);
  });
};
