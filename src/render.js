import './style.css'
import listFlix from './assets/listflix.png';

export const asideAndMainRender = () => {
    const asideEle = document.querySelector('aside');
    const mainEle = document.querySelector('main');
    
    // create logo
    const logo = new Image();
    logo.src = listFlix;
    logo.className = 'logo';
    logo.style.cssText = `
        height: clamp(100px, 15vw, 150px);
        padding: .8rem 0;
    `;
    // logo figure
    const logoFig = document.createElement('figure');
    logoFig.className = 'logoFig';
    logoFig.style.cssText = `
        display: flex;
        justify-content: center;
        align-items: end;
        height: clamp(130px, 25vw, 170px);
        width: 100%;      
    `;
    logoFig.appendChild(logo);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'items-container';
    itemsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
        padding: 2rem 0;
    `;

    const addAndProjects = [
        {
            name: 'Add Project',
            itemType: 'button'
        },
        {
            name: 'Projects',
            itemType: 'div'
        }
    ];

    for (const items of addAndProjects) {
        const createContainer = document.createElement(`${items.itemType}`);
        createContainer.textContent = `${items.name}`;
        createContainer.style.cssText = `
            width: clamp(180px, 15vw, 300px);
        `
        itemsContainer.appendChild(createContainer);
    }

    asideEle.append(logoFig, itemsContainer);
}