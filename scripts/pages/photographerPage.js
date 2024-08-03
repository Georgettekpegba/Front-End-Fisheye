// Mettre le code JavaScript lié à la page photographer.html
import { displayModal, closeModal } from '../utils/contactForm.js';
import { getData } from '../api/data.js';
import { photographerMainTemplate } from '../templates/photographerMainTemplate.js'
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
// factory media
// *
async function init() {
    // Récupère les datas des photographes
    const data = await getData();
    const photographers = data.photographers.find((photographer) => photographer.id == id);
    console.log(photographers);
    displayPhotographerSinglePage(photographers);
}
init();