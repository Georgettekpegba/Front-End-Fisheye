// media sections
export function displayImage(photographerMedia) {
    const { image, video, title, likes, link, tags, id, footer, photographerId } = photographerMedia;
    const picture = `assets/media/${photographerId}/${image}`;
    const svg = `assets/svg/heart.svg`;
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
        const likeNumber = document.createElement('span');
        likeNumber.textContent = likes;
        // svg
        const svgImage = document.createElement('img');
        svgImage.src = svg;
        svgImage.classList.add('heart');
        likeBtn.appendChild(likeNumber);
        likeBtn.appendChild(svgImage);
        cardDescription.appendChild(likeBtn);
        // @listerner like btn
        likeBtn.addEventListener('click',
            () => {
                likeNumber.textContent = Number(likeNumber.textContent) + 1;
            }
        );
        // select setion?????????????????????????????
        // const selection = document.getElementById('section')
        // const dropdownHtml = select
        // selection.innerHTML += dropdownHtml;;
        // gallery
        const gallery = document.querySelector('.photograph-galery_content');
        console.log(gallery);
        gallery.appendChild(card);
        card.appendChild(media);
        media.appendChild(link);
        card.appendChild(link);
        media.appendChild(cardMedia);
        media.appendChild(img);
        media.appendChild(cardDescription);

        return card;
    }
    return { image, video, title, likes, link, tags, id, footer, photographerId, getMediaCardDOM };

}