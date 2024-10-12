// media sections  
export function displayLightBox(photographerMedia) {
    const { image, card, title, tags, id, mediaId, photographerId } = photographerMedia;
    const picture = `assets/media/${photographerId}/${image}`;
    const svg = `assets/svg/close.svg`;
    function getMediaCardDOM() {
        const card = document.createElement('div');
        card.classList.add('photographer-media');
        const media = document.createElement('div');
        media.classList.add('media');
        // const cardMedia = document.createElement('div');
        // cardMedia.classList.add('media-card');
        // const link = document.createElement('a');
        // link.href = `photographer.html?id=${id}`;
        // on rajoute l'image du photographe
        const img = document.createElement('img');
        img.src = picture;
        img.classList.add("photographer-all-img");
        // svg
        const svgImage = document.createElement('img');
        svgImage.src = svg;
        svgImage.classList.add('close');
        // likeBtn.appendChild(likeNumber);
        // // likeBtn.appendChild(svgImage);
        // // cardDescription.appendChild(likeBtn);
        // // carddescription
        // const cardDescription = document.createElement('div');
        // const titleElement = document.createElement('p');
        // titleElement.textContent = title;
        // cardDescription.appendChild(titleElement);
        // // link to click on image to display the light box
        // // link.appendChild(img);
        // link.appendChild(img);
        // access to the lightbox
        // add event listener to open the lightbox
        card.addEventListener('click', function () {
            (document.querySelector(".lightbox_wrapper")).style.display = 'block';
            const lightBoxContent = document.querySelector('.lightbox_content');
            const lightBoxImg = document.createElement('img');
            lightBoxImg.src = picture;
            lightBoxContent.appendChild(lightBoxImg);
            const close = document.querySelector('.close');
            close.addEventListener('click', function () {
                (document.querySelector(".lightbox_wrapper")).style.display = 'none';
                lightBoxContent.removeChild(lightBoxImg);
            });
        });
        // gallery
        const gallery = document.querySelector('.photograph-galery_content');
        (document.querySelector(".lightbox_wrapper")).appendChild(card);
        card.appendChild(media);
        media.appendChild(link);
        card.appendChild(link);
        media.appendChild(cardMedia);
        media.appendChild(img);
        media.appendChild(cardDescription);
        (document.querySelector(".lightbox_wrapper")).appendChild(svgImage);
        return card;
    }
    return { image, card, title, tags, id, mediaId, photographerId, getMediaCardDOM };

}