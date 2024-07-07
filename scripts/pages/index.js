// async function getPhotographers() {
//     // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
//     // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
//     let photographers = [
//         {
//             "name": "Ma data test",
//             "id": 1,
//             "city": "Paris",
//             "country": "France",
//             "tagline": "Ceci est ma data test",
//             "price": 400,
//             "portrait": "account.png"
//         },
//         {
//             "name": "Autre data test",
//             "id": 2,
//             "city": "Londres",
//             "country": "UK",
//             "tagline": "Ceci est ma data test 2",
//             "price": 500,
//             "portrait": "account.png"
//         },
//     ]



//     // Récupère les données du fichier JSON

//     // et bien retourner le tableau photographers seulement une fois récupéré
//     return ({
//         photographers: [...photographers, ...photographers, ...photographers]
//     })
// }
import { photographerTemplate } from '../templates/photographer.js';

async function getData() {
    let reponse = await fetch('data/photographers.json')
    let data = await reponse.json()
    return data
}
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

