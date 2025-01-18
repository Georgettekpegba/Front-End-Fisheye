// media sections
export function displayImage(photographerMedia) {
    const { image, video, title, likes, link, tags, id, footer, photographerId } = photographerMedia;
    const picture = `assets/media/${photographerId}/${image}`;
    const svg = `assets/svg/heart-red.svg`;
    function getMediaCardDOM() {
        const card = document.createElement('a');
        card.classList.add('photographer-media');
        // card.setAttribute('tabindex', '0');
        const media = document.createElement('div');
        media.classList.add('media');
        // const cardMedia = document.createElement('div');
        // cardMedia.classList.add('media-card');
        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        link.setAttribute('tabindex', '0');
        link.setAttribute('aria-label', title);
        link.setAttribute('alt', title);
        // on rajoute l'image du photographe
        const img = document.createElement('img');
        img.src = picture;
        // acessibility
        img.classList.add("photographer-all-img");
        img.setAttribute('tabindex', '0');
        img.setAttribute('aria-label', title);
        img.setAttribute('alt', title);

        // carddescription
        const cardDescription = document.createElement('div');
        cardDescription.classList.add('card-description');
        const titleElement = document.createElement('p');
        titleElement.textContent = title;
        cardDescription.appendChild(titleElement);
        // link to click on image to display the light box
        link.appendChild(img);
        // // likes
        // const likeWraper = document.createElement('div');
        const likeBtn = document.createElement('btn');
        likeBtn.classList.add('like-btn');
        likeBtn.setAttribute('tabindex', '0');
        const likeNumber = document.createElement('span');
        likeNumber.textContent = likes;
        // svg
        const svgImage = document.createElement('img');
        svgImage.src = svg;
        svgImage.classList.add('heart');
        // accessibility
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
        //********************************************** */
        likeBtn.addEventListener('keypress', function (event) {
            event.preventDefault()


            if (event.key === "Enter") {
                // () => {
                likeNumber.textContent = Number(likeNumber.textContent) + 1;

                // }
            }
        })


        // gallery
        const gallery = document.querySelector('.photograph-galery_content');
        gallery.appendChild(card);
        card.appendChild(media);
        media.appendChild(link);
        card.appendChild(link);
        // media.appendChild(cardMedia);
        media.appendChild(img);
        media.appendChild(cardDescription);

        return card;
    }
    return { image, video, title, likes, link, tags, id, footer, photographerId, getMediaCardDOM };

}