// Mettre le code JavaScript lié à la page photographer.html
import { displayModal, closeModal } from '../utils/contactForm.js';
import { getMedia } from '../api/media.js';
import { photographerMainTemplate } from '../templates/photographerMainTemplate.js';
import { mediaFactory } from '../factory/mediaFactory.js';
import { displayLightBox } from '../templates/displayLightBox.js';
import { displayCounterInfos } from '../templates/displaycounterInfos.js';
// @event
const contactFormBtn = document.querySelector(".contact_button");
const contactFormClose = document.querySelector(".contact_close_btn");
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
contactFormBtn.addEventListener('click', displayModal);
contactFormClose.addEventListener("click", closeModal);
// get every photographer id
const url = new URL(window.location.href);
const id = url.searchParams.get('id');
// diplay pfotographer
function displayPhotographerSinglePage(photographer) {
    const photographersSection = document.querySelector("main");
    const photographerModel = photographerMainTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
}
// factory media
function displayPhotographerMedia(mediaList) {
    const photographersGallery = document.querySelector(".photograph-galery_content");
    mediaList.forEach(media => {
        const photographerMedia = mediaFactory(media);
        const mediaCardDOM = photographerMedia.getMediaCardDOM();
        photographersGallery.appendChild(mediaCardDOM);
    });
    const allMedia = document.querySelectorAll('.photographer-all-img');
    allMedia.forEach(media => {
        media.addEventListener('click', (event) => {

            const lightboxImg = document.create('img');
            lightboxImg = img.src
            lightboxImg = img.src.index
            console.log(event.target.src);
        }
        )
    }

    )

}
// display lightbox on click on the card
// function displayPhotograherZoom(media) {
//     // displayPhotograherZoom(media);
//     const lightBox = document.querySelector(".lightbox_wrapper");
//     // find the media in the array
//     // const mediaId = media.dataset.media;
//     // const mediaClick = photographerMedia.find(media => media.id === mediaId);
//     media.forEach(media => {
//         const photographerMedia = displayLightBox(media);
//         const mediaCardDOM = photographerMedia.getMediaCardDOM();
//         lightBox.appendChild(mediaCardDOM);
//     });
//     console.log(lightBox);
//     // const lightBoxClose = document.querySelector(".lbtn_close_lightbox btn_close");
//     // lightBoxClose.addEventListener("click", () => {
//     //     lightBox.classList.remove("open");
//     // });
// }

//
function displayPhotographerCounter(price,) {
    displayCounterInfos(price);
    const photographersSection = document.querySelector("main");
    const counterInfos = displayCounterInfos(price);
    const userCardDOM = counterInfos.getCardDOM();
    photographersSection.appendChild(userCardDOM);
}
// function displayPhotographerCounter(totalMediaLikeCountrice) {
//     displayImage(photographerMedia);
//     const photographersSection = document.querySelector("main");
//     const counterInfos = displayCounterInfos(price);
//     const userCardDOM = counterInfos.getCardDOM();
//     photographersSection.appendChild(userCardDOM);
// }


async function init() {
    // Récupère les datas des photographes
    const { photographer, photographerMedia } = await getMedia(id);
    displayPhotographerSinglePage(photographer);
    displayPhotographerMedia(photographerMedia)
    // displayPhotograherZoom(photographerMedia)
    displayPhotographerCounter(photographer.price);
}
init();