// Mettre le code JavaScript lié à la page photographer.html
import { displayModal, closeModal } from "../utils/contactForm.js";
import { getMedia } from "../api/media.js";
import { photographerMainTemplate } from "../templates/photographerMainTemplate.js";
import { mediaFactory } from "../factory/mediaFactory.js";
import { displayLightBox } from "../templates/displayLightBox.js";
import { displayCounterInfos } from "../templates/displaycounterInfos.js";
import { photographerFilter } from "../templates/tagFilter.js";
// @event
const contactFormBtn = document.querySelector(".contact_button");
const contactFormClose = document.querySelector(".contact_close_btn");
contactFormBtn.addEventListener("click", displayModal);
contactFormClose.addEventListener("click", closeModal);
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
// filter by popularity name title
function filterByPopularity(photographerMedia) {
    const photographersSection = document.querySelector("main");
    const photographerModel = photographerFilter(photographerMedia);
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
            console.log("toto", event.target);
            console.log("image", mediaList[index]);
            const lightBoxMedia = displayLightBox(index, mediaList);
            const mediaCardDOM = lightBoxMedia.getMediaCardDOM();
            const lightboxWrapper = document.querySelector(".lightbox_wrapper");
            lightboxWrapper.appendChild(mediaCardDOM);
        });
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
    displayPhotographerSinglePage(photographer);
    displayPhotographerMedia(photographerMedia);
    displayPhotographerCounter(photographer.price);
    filterByPopularity(photographerMedia);
}
init();
