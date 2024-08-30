// Mettre le code JavaScript lié à la page photographer.html
import { displayModal, closeModal } from '../utils/contactForm.js';
import { getMedia } from '../api/media.js';
import { photographerMainTemplate } from '../templates/photographerMainTemplate.js';
import { displayMedia } from '../templates/displayMedia.js';
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
// factory media
async function displayPhotographerMedia(mediaList) {
    const photographersGallery = document.querySelector(".photograph-galery_content");
    const photographerModel = displayMedia(mediaList[0]);
    const mediaCardDOM = photographerModel.getMediaCardDOM();
    photographersGallery.appendChild(mediaCardDOM);
}
//
async function init() {
    // Récupère les datas des photographes
    const { photographer, photographerMedia } = await getMedia(id);

    console.log(photographer, photographerMedia);
    displayPhotographerSinglePage(photographer);
    displayPhotographerMedia(photographerMedia)
}
init();