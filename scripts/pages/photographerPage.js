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
        media.addEventListener("click", (event) => {
            // console.log("toto", event.target);
            // console.log("image", mediaList[index]);
            const lightBoxMedia = displayLightBox(index, mediaList);
            const mediaCardDOM = lightBoxMedia.getMediaCardDOM();
            const lightboxWrapper = document.querySelector(".lightbox_wrapper");
            lightboxWrapper.appendChild(mediaCardDOM);
            // accessibility
            mediaCardDOM.setAttribute("aria-label", "Open lightbox");
            mediaCardDOM.setAttribute("role", "button");
            mediaCardDOM.focus();
            // mediaCardDOM.setAttribute("tabindex", "0");
            // mediaCardDOM.focus();    
            // mediaCardDOM.setAttribute("tabindex", "0");
            mediaCardDOM
                .querySelector(".lightbox_close_btn")
                .addEventListener("onpress", () => {
                    lightboxWrapper.removeChild(mediaCardDOM);
                });
        });
        // media.addEventListener('keypress', function (event) {
        //     event.preventDefault()
        //     console.log(event.key);

        //     if (event.key === "Enter") {
        //         // () => {
        //         const lightBoxMedia = displayLightBox(index, mediaList);
        //         const mediaCardDOM = lightBoxMedia.getMediaCardDOM();
        //         const lightboxWrapper = document.querySelector(".lightbox_wrapper");
        //         lightboxWrapper.appendChild(mediaCardDOM);

        //         // }
        //     }
        // })
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
