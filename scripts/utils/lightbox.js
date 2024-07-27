export const lightbox = {
    init(medias) {
        this.medias = medias;
        this.currentIndex = 0;

        this.lightbox = document.createElement('div');
        this.lightbox.classList.add('lightbox_wrapper');
        this.lightbox.innerHTML = `
            <button class="btn_close_lightbox">Close</button>
            <button class="btn_previous">Previous</button>
            <div class="lightbox_media"></div>
            <button class="btn_next">Next</button>
        `;

        document.body.appendChild(this.lightbox);

        this.btnClose = this.lightbox.querySelector('.btn_close_lightbox');
        this.btnPrevious = this.lightbox.querySelector('.btn_previous');
        this.btnNext = this.lightbox.querySelector('.btn_next');
        this.lightboxMedia = this.lightbox.querySelector('.lightbox_media');

        this.addEventListeners();
    },

    open(mediaIndex) {
        this.currentIndex = mediaIndex;
        this.updateLightboxContent();
        this.lightbox.classList.add('open');
        this.btnClose.focus();
    },

    close() {
        this.lightbox.classList.remove('open');
        this.lightboxMedia.innerHTML = '';
    },

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.medias.medias.length;
        this.updateLightboxContent();
        this.showActiveBtn(this.btnNext);
    },

    previous() {
        this.currentIndex = (this.currentIndex - 1 + this.medias.medias.length) % this.medias.medias.length;
        this.updateLightboxContent();
        this.showActiveBtn(this.btnPrevious);
    },

    updateLightboxContent() {
        const currentMedia = this.medias.medias[this.currentIndex];
        const photographer = this.medias.photographer;

        this.lightboxMedia.innerHTML = `
            ${currentMedia.image ? `
            <img src="./assets/images/photographers/samplePhotos-Medium/${photographer.name}/${currentMedia.image}" alt="${currentMedia.alt}">` :
                `<video controls aria-label="${currentMedia.alt}"><source src="./assets/images/photographers/samplePhotos-Medium/${photographer.name}/${currentMedia.video}" type="video/mp4"></video>`}
            <figcaption>${currentMedia.title}</figcaption>
        `;
    },

    showActiveBtn(btn) {
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 100);
    },

    addEventListeners() {
        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.previous();
                    break;
                case 'ArrowRight':
                    this.next();
                    break;
            }
        });

        this.btnClose.addEventListener('click', () => this.close());
        this.btnPrevious.addEventListener('click', () => this.previous());
        this.btnNext.addEventListener('click', () => this.next());

        const mediaProvider = Array.from(document.querySelectorAll('.gallery_card a'));
        mediaProvider.forEach(media => {
            media.addEventListener('click', () => {
                const mediaId = media.dataset.media;
                const mediaIndex = this.medias.medias.findIndex(m => m.id == mediaId);
                this.open(mediaIndex);
            });
        });
    }
};
