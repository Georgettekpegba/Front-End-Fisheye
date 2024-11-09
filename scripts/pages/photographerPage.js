// Mettre le code JavaScript lié à la page photographer.html
import { displayModal, closeModal } from "../utils/contactForm.js";
import { getMedia } from "../api/media.js";
import { photographerMainTemplate } from "../templates/photographerMainTemplate.js";
import { mediaFactory } from "../factory/mediaFactory.js";
import { displayLightBox } from "../templates/displayLightBox.js";
import { displayCounterInfos } from "../templates/displaycounterInfos.js";
let media = [];
// @event
const contactFormBtn = document.querySelector(".contact_button");
const contactFormClose = document.querySelector(".contact_close_btn");
contactFormBtn.addEventListener("click", displayModal);
contactFormClose.addEventListener("click", closeModal);
const selectElement = document.querySelector("#sort-select");
// Add an event listener for the 'change' event
// selectElement.addEventListener('change', (event) => {
//     const selectedValue = event.target.value;
//     console.log("Selected value:", selectedValue);
//     filterData();
// });


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

function filterData(filter) {

    // const popularity = data.filter((popularity) => data.likes);
    // if (filter === "pop") { media.sort(media.sort((a, b) => new Date(b.date) - new Date(a.date))};
    // const filter =
    //     displayPhotographerMedia();
    // removeEventListener.card();
    console.log(filter);
    // const date = data.filter((data) => data.date);
    // const title = data.filter((data) => data.title);
    // popularity.sort((a, b) => b.likes - a.likes);
    // console.log(popularity);
    // date.sort((a, b) => new Date(b.date) - new Date(a.date));
    // title.sort((a, b) => a.title.localeCompare(b.title));
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
