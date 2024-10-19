const allMedia = document.querySelectorAll('.photographer-all-img');
allMedia.forEach(media => {
    media.addEventListener('click', (event) => {
        // const { image, video, title, photographerId } = media;
        const lightboxImg = document.createElement('img');
        // const img = `assets/media/${photographerId}/${image}`;
        // img.src = picture;
        lightboxImg = img.src
        lightboxImg = img.src.index
        console.log(event.target.src);
        // const card = document.querySelector('.lightbox_wrapper');
        // lightboxImg.appendChild(card);
        // if (media.image) {
        //     lightboxImg.src = `assets/media/${media.photographerId}/${media.image}`;
        //     lightboxImg.alt = media.title;
        // } else if (media.video) {
        //     const videoElement = document.createElement('video');
        //     videoElement.src = `assets/media/${media.photographerId}/${media.video}`;
        //     lightboxImg.replace(videoElement);
        // }



        //     if (event.target.src === lightboxImg) {
        //         card.style.display = 'block';
        //     }
        //     else
        //         card.style.display = 'none';
        // });
        // const nextLightBox = document.querySelector('.next');
        // const previousLightBox = document.querySelector('.previous');
        // const lightBoxContent = document.querySelector('.lightbox_content');
        // nextLightBox.addEventListener('click', () => {
        //     console.log('next');
        // });
        // previousLightBox.addEventListener('click', () => {
        //     console.log('previous');



    });
});

}
// display lightbox on click on the card
// function displayPhotograherZoom(media) {
//     // displayPhotograherZoom(media);
//     const lightBox = document.querySelector(".lightbox_wrapper");
//     // find the media in the array
//     // const mediaId = media.dataset.media;
//     // const mediaClick = photographerMedia.find(media => media.id === mediaId);
//     media.forEach(media => {
//         const photographerMedia = displayLightBox(media);
//         const mediaCardDOM = photographerMedia.getMediaCardDOM();
//         lightBox.appendChild(mediaCardDOM);
//     });
//     console.log(lightBox);
//     // const lightBoxClose = document.querySelector(".lbtn_close_lightbox btn_close");
//     // lightBoxClose.addEventListener("click", () =>