// Correct imports
import { getData } from '../api/data.js';
import { displayModal, closeModal } from '../utils/contactForm.js';
import { photographersMainTemplate } from '../templates/photographerMain.js';
import photographerHeader from '../templates/photographerHeader.js';

// Function to display main photographer template
export function photographersMainTemplate(data, id) {
    const photographer = data.photographers.find((photographer) => photographer.id == id);
    console.log(photographer);
    if (photographer && photographer.value === true) {
        displayModal(photographer);
    } else {
        closeModal();
    }
}

// Function to display photographer media
export function photographerMedia(photographer) {
    const photographerSection = document.getElementById('main');
    const photographerTemplate = document.createElement('div');
    photographerTemplate.innerHTML = `
    <div class="photographer">
        <div class="photographer__header">
            <h1 class="photographer__name">${photographer.name}</h1>
            <button class="photographer__contact">Contactez-moi</button>
        </div>
        <div class="photographer__infos">
            <p class="photographer__location">${photographer.city}, ${photographer.country}</p>
            <p class="photographer__tagline">${photographer.tagline}</p>
            <p class="photographer__price">${photographer.price}€/jour</p>
        </div>
        <div class="photographer__tags">
            ${photographer.tags.map((tag) => `<span class="tag">#${tag}</span>`).join('')}
        </div>
    </div>
    <div class="photographer__media">
        ${photographer.media.map((media) => `
            <div class="media">
                <img src="images/${photographer.id}/${media.image}" alt="${media.title}" class="media__img">
                <p class="media__title">${media.title}</p>
                <p class="media__likes">${media.likes}</p>
                <button class="media__like">J'aime</button>
            </div>
        `).join('')}
    </div>
`;
    photographerSection.appendChild(photographerTemplate);
    console.log(photographer);
}

// Log imported functions
console.log('toto');
console.log(getData());
console.log(photographersMainTemplate);
console.log(photographerHeader);
console.log(photographerMedia);

// Get every photographer id from the URL
const url = new URL(window.location.href);
const id = url.searchParams.get('id');
console.log(id);

// Get photographer data and display the modal if the photographer exists
getData().then((data) => {
    const photographer = data.photographers.find((photographer) => photographer.id == id);
    console.log(photographer);
    if (photographer) {
        displayModal(photographer);
    } else {
        closeModal();
    }
});
