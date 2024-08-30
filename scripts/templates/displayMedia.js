// media sections
export function displayMedia(photographerMedia) {
    console.log('====================================');
    console.log(photographerMedia);
    console.log('====================================');
    // const { name, image, video, title, likes, date, price, tags, id } = photographerMedia;
    const { image, video, title, likes, price, tags, id, photographerId } = photographerMedia;
    // const picture = `assets/photographers//${portrait}`;
    const picture = `assets/media/${photographerId}/${image}`;

    function getMediaCardDOM() {
        console.log('toto5');
        const card = document.createElement('div');
        card.classList.add('photographer-media');
        const media = document.createElement('div');
        media.classList.add('media');
        const cardMedia = document.createElement('div');
        cardMedia.classList.add('media-card');

        // const article = document.createElement('article');
        // article.classList.add('photographer-media');
        // on cree le lien du photographer card
        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        // on rajoute l'image du photographe
        const img = document.createElement('img');
        img.src = picture;
        // img.alt = `Portrait de ${name}`;
        img.classList.add("photographer-img");
        // gallery
        const gallery = document.querySelector('.photograph-galery_content');

        console.log(gallery);
        gallery.appendChild(card);
        card.appendChild(media);
        media.appendChild(link);
        media.appendChild(cardMedia);
        media.appendChild(img);

        return card;
    }
    return { image, video, title, likes, price, tags, id, photographerId, getMediaCardDOM };

}