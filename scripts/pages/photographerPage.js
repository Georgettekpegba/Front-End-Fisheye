// Mettre le code JavaScript lié à la page photographer.html
import {
    displayModal,
    closeModal,
    closeModalEscape,
} from "../utils/contactForm.js";
import { getMedia } from "../api/media.js";
import { photographerMainTemplate } from "../templates/photographerMainTemplate.js";
import { mediaFactory } from "../factory/mediaFactory.js";
import { displayLightBox } from "../templates/displayLightBox.js";
import { displayCounterInfos } from "../templates/displaycounterInfos.js";
let media = [];
// @event
const contactFormBtn = document.querySelector(".contact_button");
const contactFormClose = document.querySelector(".contact_close_btn");

// **********************************************************
// accessibility
contactFormBtn.setAttribute("aria-label", "Open contact form");
contactFormBtn.setAttribute("role", "button");

contactFormBtn.addEventListener("click", displayModal);
contactFormClose.addEventListener("click", closeModal);

window.addEventListener("keydown", closeModalEscape);

const selectElement = document.querySelector("#sort-select");
// Add an event listener for the 'change' event
selectElement.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    console.log("Selected value:", selectedValue);
    filterData(selectedValue); // pop < test
});
// form validation for contact form
const form = document.querySelector(".contact_form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorElement = document.querySelector(".error");
form.addEventListener("submit", (e) => {
    let messages = [];
    if (firstName.value === "" || firstName.value == null) {
        messages.push("First Name is required");
    }
    if (lastName.value === "" || lastName.value == null) {
        messages.push("Last Name is required");
    }
    if (email.value === "" || email.value == null) {
        messages.push("Email is required");
    }
    if (message.value === "" || message.value == null) {
        messages.push("Message is required");
    }
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});

// accessibility
form.setAttribute("aria-label", "Contact form");
form.setAttribute("role", "form");
firstName.setAttribute("aria-label", "First Name");
firstName.setAttribute("role", "textbox");
lastName.setAttribute("aria-label", "Last Name");
lastName.setAttribute("role", "textbox");
email.setAttribute("aria-label", "Email");
email.setAttribute("role", "textbox");
message.setAttribute("aria-label", "Message");
message.setAttribute("role", "textbox");
errorElement.setAttribute("aria-label", "Error message");
errorElement.setAttribute("role", "alert");

// alternative for form validation

// Form validation
// function formValidation() {
//     let successScore = 0;

//     for (let i = 0; i < formInputs.length; i++) {
//         const inputField = formInputs[i];
//         inputField.value = inputField.value.trim();
//         const inputId = inputField.id;

//         if ((inputId === "firstname" || inputId === "lastname") && !isEmpty(inputField) && !checkLength(inputField, 2)) {
//             successScore++;
//         } else if (inputId === "email" && !isEmpty(inputField) && validateEmail(inputField)) {
//             successScore++;
//         } else if (inputId === "message" && !isEmpty(inputField)) {
//             successScore++;
//         }
//     }

//     if (successScore === 4) {
//         showSuccessMessage();
//     }
// }

// // Display success message if all fields are validated
// function showSuccessMessage() {
//     form.textContent = "";
//     modalTitle.textContent = "";
//     modalSuccessMessage.style.display = "block";
// }

// // Check if inputs are filled
// function isEmpty(e) {
//     if (e.value === '') {
//         e.classList.add("wrong-input");
//         e.nextElementSibling.textContent = "Ce champ est obligatoire, veuillez saisir une donnée";
//         return true;
//     } else {
//         e.classList.remove("wrong-input");
//         e.nextElementSibling.textContent = "";
//         return false;
//     }
// }

// // Check if element length is higher than specified number
// function checkLength(e, n) {
//     if (e.value.length < n) {
//         e.classList.add("wrong-input");
//         e.nextElementSibling.textContent = "Veuillez saisir au moins 3 caractères";
//         return true;
//     } else {       
//         e.classList.remove("wrong-input"); 
//         e.nextElementSibling.textContent = "";
//         return false;
//     }
// }

// // Check if the email format is valid
// function validateEmail(e) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!regex.test(e.value)) {
//         e.classList.add("wrong-input");
//         e.nextElementSibling.textContent = "Veuillez entrer une adresse email valide";
//         return false;
//     } else {
//         e.classList.remove("wrong-input");
//         e.nextElementSibling.textContent = "";
//         return true;
//     }
// }


// filter data
function filterData(filter) {
    let photographersGallery = document.querySelector(
        ".photograph-galery_content"
    );
    console.log(filter);
    photographersGallery.textContent = "";
    if (filter === "pop") {
        media = media.sort((a, b) => {
            console.log(media);
            return b.likes - a.likes;
        });
    } else if (filter === "date") {
        media = media.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    } else if (filter === "title") {
        media = media.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
    }
    // lightBox.innerHTML = "";
    displayPhotographerMedia(media);
    console.log("Gallery updated with sorted media.");
    console.log(media);
}

// get every photographer id
const url = new URL(window.location.href);
const id = url.searchParams.get("id");
// diplay pfotographer
function displayPhotographerSinglePage(photographer) {
    const photographersSection = document.querySelector("main");
    const photographerModel = photographerMainTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
}

// factory media
function displayPhotographerMedia(mediaList) {
    const photographersGallery = document.querySelector(
        ".photograph-galery_content"
    );
    mediaList.forEach((media) => {
        const photographerMedia = mediaFactory(media);
        const mediaCardDOM = photographerMedia.getMediaCardDOM();
        photographersGallery.appendChild(mediaCardDOM);
    });
    const allMedia = document.querySelectorAll(".photographer-all-img");
    allMedia.forEach((media, index) => {
        media.addEventListener("click", () => {
            const lightBoxMedia = displayLightBox(index, mediaList);
            const mediaCardDOM = lightBoxMedia.getMediaCardDOM();
            const lightboxWrapper = document.querySelector(".lightbox_wrapper");
            lightboxWrapper.appendChild(mediaCardDOM);
            // accessibility
            mediaCardDOM.setAttribute("aria-label", "Open lightbox");
            mediaCardDOM.setAttribute("role", "button");
            mediaCardDOM.focus();
            mediaCardDOM
                .querySelector(".lightbox_close_btn")
                .addEventListener("onpress", () => {
                    lightboxWrapper.removeChild(mediaCardDOM);
                });
        });
        // accessibility on press enter on image or title or like button open the light box
        media.addEventListener('keypress', function (event) {
            if (event.key === "Enter") {
                //  
                const lightBoxMedia = displayLightBox(index, mediaList);
                const mediaCardDOM = lightBoxMedia.getMediaCardDOM();
                const lightboxWrapper = document.querySelector(".lightbox_wrapper");
                lightboxWrapper.appendChild(mediaCardDOM);
                // accessibility
                mediaCardDOM.setAttribute("aria-label", "Open lightbox");
                mediaCardDOM.setAttribute("role", "button");
                mediaCardDOM.focus();
                mediaCardDOM
                    .querySelector(".lightbox_close_btn")
                    .addEventListener("onpress", () => {
                        lightboxWrapper.removeChild(mediaCardDOM);
                    });
            }
        })


    });
}

function displayPhotographerCounter(price) {
    displayCounterInfos(price);
    const photographersSection = document.querySelector("main");
    const counterInfos = displayCounterInfos(price);
    const userCardDOM = counterInfos.getCardDOM();
    photographersSection.appendChild(userCardDOM);
}

async function init() {
    // Récupère les datas des photographes
    const { photographer, photographerMedia } = await getMedia(id);
    media = photographerMedia;
    displayPhotographerSinglePage(photographer);
    displayPhotographerMedia(photographerMedia);
    displayPhotographerCounter(photographer.price);
}
init();
