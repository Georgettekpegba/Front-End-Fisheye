// media sections  
export function displayLightBox(photographerMedia) {
    const { image, id, mediaId, photographerId } = photographerMedia;
    const picture = `assets/media/${photographerId}/${image}`;
    function getMediaCardDOM() {
        const card = document.createElement('div');
        card.classList.add('photographer-media');
        const media = document.createElement('div');
        media.classList.add('media');
        const cardMedia = document.createElement('div');
        cardMedia.classList.add('media-card');
        // on rajoute l'image du photographe
        const img = document.createElement('img');
        img.src = picture;
        img.classList.add("photographer-all-img");
        // svg
        const btnClose = document.querySelector('.btn_close');
        // access to the lightbox
        // add event listener to open the lightbox

        const lightboxWrapper = document.querySelector(".lightbox_wrapper");
        lightboxWrapper.style.display = 'flex';

        lightboxWrapper.appendChild(card);
        card.appendChild(media);
        media.appendChild(img);
        lightboxWrapper.appendChild(btnClose);
        btnClose.addEventListener('click', function () {
            lightboxWrapper.style.display = 'none';
            card.remove();
        });
        return card;
    }
    return { getMediaCardDOM };
}