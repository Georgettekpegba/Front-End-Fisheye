// Mettre le code JavaScript lié à la page photographer.html
import { displayModal, closeModal } from '../utils/contactForm.js';
import { getData } from '../api/data.js';
import { photographerMainTemplate } from '../templates/photographerMainTemplate.js';
// import { mediaTemplate } from '../templates/photographerMediaTemplate.js';
// console.logs
// console.log(mediaTemplate);
// ********* */
// filter media data
// const mediaData = getPhotographerMedia();
// console.log(mediaData);
// const params = new URL(document.location).searchParams;
// const photographerId = parseInt(params.get("id"));
// return media.filter(
//     (mediaItem) => mediaItem.photographerId === photographerId
// );
//********* */
// @event
const contactFormBtn = document.querySelector(".contact_button");
console.log(contactFormBtn);
const contactFormClose = document.querySelector(".contact_close_btn");
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
contactFormBtn.addEventListener('click', displayModal);
contactFormClose.addEventListener("click", closeModal);

// get every photographer id
const url = new URL(window.location.href);
const id = url.searchParams.get('id');
console.log(id);

// numero 2 à faire
// diplay pfotographer
async function displayPhotographerSinglePage(photographer) {
    const photographersSection = document.querySelector("main");
    const photographerModel = photographerMainTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);

}
// media
// async function displayMedia(photographer) {
//     const mediaSection = document.querySelector('.gallery');
//     const mediaModel = mediaTemplate(photographer);
//     const userMediaCardDOM = mediaModel.getMediaCardDOM();
//     mediaSection.appendChild(userMediaCardDOMediaCardDOM);
// }
// factory media
// *
async function init() {
    // Récupère les datas des photographes
    const data = await getData();
    const photographers = data.photographers.find((photographer) => photographer.id == id);
    console.log(photographers);
    displayPhotographerSinglePage(photographers);
    // displayMedia(photographers);
}
init();