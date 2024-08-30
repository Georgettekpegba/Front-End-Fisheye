// async function getPhotographers() {
//     // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
//     // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
import { getData } from '../api/data.js';
import { photographerTemplate } from '../templates/photographerTemplate.js'
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getData();
    displayData(photographers);
}
init();





