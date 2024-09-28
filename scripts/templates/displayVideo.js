// displauy media video
export function displayVideo(photographerMedia) {
    const { image, video, title, likes, price, tags, id, photographerId } = photographerMedia;
    const videoUrl = `assets/media/${photographerId}/${video}`;
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
        const video = document.createElement('video');
        const source = document.createElement('source');
        source.src = videoUrl;
        video.appendChild(source);
        // img.alt = `Portrait de ${name}`;
        video.classList.add("photographer-all-img");
        // @event listeners
        video.addEventListener('click', () => {
            console.log('click');
        });
        // gallery
        const gallery = document.querySelector('.photograph-galery_content');

        console.log(gallery);
        gallery.appendChild(card);
        card.appendChild(media);
        media.appendChild(link);
        media.appendChild(cardMedia);
        media.appendChild(video);


        return card;
    }
    return { image, video, title, likes, price, tags, id, photographerId, getMediaCardDOM };

}