// media sections  
export function displayLightBox(photographerMedia) {
    const { image, id, mediaId, photographerId } = photographerMedia;
    const picture = `assets/media/${photographerId}/${image}`;
    const svg = `assets/svg/close.svg`;
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
        const svgImage = document.createElement('img');
        svgImage.src = svg;
        svgImage.classList.add('close');
        // access to the lightbox
        // add event listener to open the lightbox

        // close.addEventListener('click', function () {
        //     (document.querySelector(".lightbox_wrapper")).style.display = 'block';
        //     lightBoxContent.removeChild(lightBoxImg);
        // });
        (document.querySelector(".lightbox_wrapper")).appendChild(card);
        card.appendChild(media);
        media.appendChild(img);
        (document.querySelector(".lightbox_wrapper")).appendChild(svgImage);
        return card;
    }
    return { getMediaCardDOM };

}