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
// // form validation for contact form
// ***********************************************************
// DOM Elements
// const modalbg = document.getElementById("contact_modal");
// const modalBtn = document.querySelectorAll(".modal-btn");
// const closeBtn = document.querySelector(".contact_close_btn");
// const form = document.querySelector("form");
// const firstName = document.querySelector("input:nth-of-type(1)");
// const lastName = document.querySelector("input:nth-of-type(2)");
// const email = document.querySelector("input:nth-of-type(3)");
// const message = document.querySelector("#msg");

// // Open modal
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// function launchModal() {
//     modalbg.style.display = "block";
// }

// // Close modal
// closeBtn.addEventListener("click", closeModal);
// function closeModal() {
//     modalbg.style.display = "none";
// }

// // Email validation function
// function validateEmail(email) {
//     const regex = /\S+@\S+\.\S+/;
//     return regex.test(email);
// }

// // Function to display error message
// function showError(input, message) {
//     let parentDiv = input.parentElement;
//     parentDiv.setAttribute("data-error-visible", true);
//     parentDiv.setAttribute("data-error", message);
// }

// // Function to clear error message
// function clearError(input) {
//     let parentDiv = input.parentElement;
//     parentDiv.setAttribute("data-error-visible", false);
//     parentDiv.setAttribute("data-error", "");
// }

// // Validation function
// function validate(event) {
//     event.preventDefault(); // Prevent form from submitting if there are errors
//     let nbError = 0;

//     // Validate First Name
//     if (firstName.value.trim() === "") {
//         showError(firstName, "Le prénom est requis");
//         nbError++;
//     } else if (firstName.value.length < 2) {
//         showError(firstName, "Minimum 2 caractères requis");
//         nbError++;
//     } else {
//         clearError(firstName);
//     }

//     // Validate Last Name
//     if (lastName.value.trim() === "") {
//         showError(lastName, "Le nom est requis");
//         nbError++;
//     } else if (lastName.value.length < 2) {
//         showError(lastName, "Minimum 2 caractères requis");
//         nbError++;
//     } else {
//         clearError(lastName);
//     }

//     // Validate Email
//     if (!validateEmail(email.value)) {
//         showError(email, "Veuillez entrer un email valide");
//         nbError++;
//     } else {
//         clearError(email);
//     }

//     // Validate Message
//     if (message.value.trim() === "") {
//         showError(message, "Le message ne peut pas être vide");
//         nbError++;
//     } else {
//         clearError(message);
//     }

//     // If no errors, submit the form
//     if (nbError === 0) {
//         alert("Formulaire envoyé !");
//         closeModal();
//         form.reset(); // Clear the form fields
//     }
// }

// // Event Listener for form submit
// form.addEventListener("submit", validate);


// ***********************************************************



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
                        // empty the lightbox

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
