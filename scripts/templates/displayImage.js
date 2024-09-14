// media sections
export function displayImage(photographerMedia) {
    const { image, video, title, likes, price, tags, id, photographerId } = photographerMedia;
    const picture = `assets/media/${photographerId}/${image}`;
    function getMediaCardDOM() {
        const card = document.createElement('div');
        card.classList.add('photographer-media');
        const media = document.createElement('div');
        media.classList.add('media');
        const cardMedia = document.createElement('div');
        cardMedia.classList.add('media-card');
        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        // on rajoute l'image du photographe
        const img = document.createElement('img');
        img.src = picture;
        img.classList.add("photographer-all-img");
        // carddescription
        const cardDescription = document.createElement('div');
        const titleElement = document.createElement('p');
        titleElement.textContent = title;
        cardDescription.appendChild(titleElement);
        // like
        const like = document.createElement(like)
        // gallery
        const gallery = document.querySelector('.photograph-galery_content');
        console.log(gallery);
        gallery.appendChild(card);
        card.appendChild(media);
        media.appendChild(link);
        media.appendChild(cardMedia);
        media.appendChild(img);
        media.appendChild(cardDescription);

        return card;
    }
    return { image, video, title, likes, price, tags, id, photographerId, getMediaCardDOM };

}