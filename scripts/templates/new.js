// media sections  
export function displayLightBox(index, mediaArray) {
    function getMediaCardDOM() {
        let currentIndex = index;
        let photographerMedia = mediaArray[currentIndex];
        const { image, video, photographerId } = photographerMedia;
        const picture = `assets/media/${photographerId}/${image}`;
        const videoUrl = `assets/media/${photographerId}/${video}`;
        const card = document.createElement('div');
        card.classList.add('photographer-media');
        const media = document.createElement('div');
        media.classList.add('media');
        const cardMedia = document.createElement('div');
        cardMedia.classList.add('media-card');
        let asset = null;
        // on rajoute l'image du photographe
        const img = document.createElement('img');
        img.classList.add("photographer-all-video");
        // video
        const videoCard = document.createElement('video');
        const source = document.createElement('source');
        videoCard.classList.add("photographer-all-img");
        videoCard.appendChild(source);
        if (image) {
            // on rajoute l'image du photographe

            img.src = picture;

        }
        else {
            source.src = videoUrl;
            // // @event listeners
            // videoCard.addEventListener('click', () => {
            //     videoCard.play()
            //         .catch((error) => {
            //             document.querySelector("photographer-all-img").innerHTML = "Erreur: " + error;
            //         });
            // });

        }

        // svg
        const btnClose = document.querySelector('.btn_close');
        const btnNext = document.querySelector('.btn_next');
        const btnPrevious = document.querySelector('.btn_previous');
        // access to the lightbox
        // add event listener to open the lightbox
        const lightboxWrapper = document.querySelector(".lightbox_wrapper");
        lightboxWrapper.style.display = 'flex';
        lightboxWrapper.appendChild(card);
        card.appendChild(media);
        media.appendChild(img);
        media.appendChild(videoCard);
        lightboxWrapper.appendChild(btnClose);
        btnClose.addEventListener('click', function () {
            lightboxWrapper.style.display = 'none';
            card.remove();
        });
        lightboxWrapper.appendChild(btnNext);
        btnNext.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % mediaArray.length;
            if (currentIndex >= mediaArray.length) {
                currentIndex = 0;
            }
            photographerMedia = mediaArray[currentIndex];
            console.log(photographerMedia);
            img.src = `assets/media/${photographerMedia.photographerId}/${photographerMedia.image}`;
            videoCard.src = `assets/media/${photographerMedia.photographerId}/${photographerMedia.video}`;
            // asset.src = `assets/media/${photographerMedia.photographerId}/${photographerMedia.image ?? photographerMedia.video}`;
        });
        lightboxWrapper.appendChild(btnPrevious);
        btnPrevious.addEventListener('click', function () {
            currentIndex = (currentIndex - 1) % mediaArray.length;
            if (currentIndex < 0) {
                currentIndex = mediaArray.length - 1;
            }
            console.log('next');
            photographerMedia = mediaArray[currentIndex];
            console.log(photographerMedia);
            // asset.src = `assets/media/${photographerMedia.photographerId}/${photographerMedia.image ?? photographerMedia.video}`;
            if (photographerMedia.image) {
                img.src = `assets/media/${photographerMedia.photographerId}/${photographerMedia.image}`;
            }
            else {
                videoCard.src = `assets/media/${photographerMedia.photographerId}/${photographerMedia.video}`;
            }

        });

        return card;
    }
    return { getMediaCardDOM };
}