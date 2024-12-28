// displauy media video
export function displayVideo(photographerMedia) {
    const { video, title, likes, price, tags, id, photographerId } = photographerMedia;
    const videoUrl = `assets/media/${photographerId}/${video}`;
    const svg = `assets/svg/heart-red.svg`;
    function getMediaCardDOM() {
        const card = document.createElement('div');
        card.classList.add('photographer-media');
        const media = document.createElement('div');
        media.classList.add('media');
        const cardMedia = document.createElement('div');
        cardMedia.classList.add('media-card');
        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        link.setAttribute('tabindex', '0');
        link.setAttribute('aria-label', title);
        link.setAttribute('alt', title);
        // on rajoute l'image du photographe
        const video = document.createElement('video');
        const source = document.createElement('source');
        source.src = videoUrl;
        // accessibilty
        video.setAttribute('tabindex', '0');
        video.setAttribute('aria-label', title);
        video.setAttribute('alt', title);
        video.setAttribute('controls', 'controls');

        video.appendChild(source);
        // img.alt = `Portrait de ${name}`;
        video.classList.add("photographer-all-img");
        // @event listeners
        video.addEventListener('click', () => {
            video.play()
                .catch((error) => {
                    document.querySelector("photographer-all-img").innerHTML = "Erreur: " + error;
                });
        });

        // carddescription
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        const titleElement = document.createElement('p');
        titleElement.textContent = title;
        cardDescription.appendChild(titleElement);
        // link to click on image to display the light box
        link.appendChild(video);
        // // likes
        // const likeWraper = document.createElement('div');
        const likeBtn = document.createElement('btn');
        likeBtn.classList.add('like-btn');
        const likeNumber = document.createElement('span');
        likeNumber.textContent = likes;
        // svg
        const svgImage = document.createElement('img');
        svgImage.src = svg;
        svgImage.classList.add('heart');
        // accessibility
        svgImage.setAttribute('tabindex', '0');
        svgImage.setAttribute('aria-label', 'likes');
        svgImage.setAttribute('alt', 'likes');

        likeBtn.appendChild(likeNumber);
        likeBtn.appendChild(svgImage);
        cardDescription.appendChild(likeBtn);
        // @listerner like btn
        likeBtn.addEventListener('click',
            () => {
                likeNumber.textContent = Number(likeNumber.textContent) + 1;
            }
        );

        // gallery
        const gallery = document.querySelector('.photograph-galery_content');
        gallery.appendChild(card);
        card.appendChild(media);
        media.appendChild(link);
        media.appendChild(cardMedia);
        media.appendChild(video);
        media.appendChild(cardDescription);
        return card;
    }
    return { video, title, likes, price, tags, id, photographerId, getMediaCardDOM };
}