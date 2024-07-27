// Mettre le code JavaScript lié à la page photographer.html
// a changer type modutule et à impoter from api
import { displayModal, closeModal } from '../utils/contactForm.js';
console.log('toto');
import { getData } from '../api/data.js';


// const headerInstance = new PhotographerHeader();
// console.log(headerInstance); <=> a corriger ?????????????????????????????????????? 

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
// diplay pfotographer

// template

// media

// factory media
// *
async function init() {
    // Récupère les datas des photographes
    const data = await getData();
    const photographer = data.photographers.find((photographer) => photographer.id == id);
    console.log(photographer);
}
init();