// media sections
export function displayCounterInfos(price) {
    const svg = `assets/svg/heart-black.svg`;

    function getCardDOM() {
        const article = document.createElement('article');

        // likes
        const mediaLikeCount = document.querySelectorAll(".like-btn");
        let totalMediaLikeCount = 0;
        mediaLikeCount.forEach((likes) => {
            totalMediaLikeCount += Number(likes.textContent);
        });

        // svg
        const svgImage = document.createElement('img');
        svgImage.src = svg;
        svgImage.classList.add('heart');

        // accessibility
        svgImage.setAttribute('tabindex', '0');
        svgImage.setAttribute('aria-label', 'likes');
        svgImage.setAttribute('alt', 'likes');

        // likes counter
        const likeWrapper = document.createElement('div');
        likeWrapper.classList.add('like-wrapper');
        const likeNumber = document.createElement('span');
        likeNumber.classList.add('total-like');
        likeNumber.textContent = totalMediaLikeCount;
        const displayCounterInfosWrap = document.createElement('div');
        displayCounterInfosWrap.classList.add('display-counter-infos-wrap');
        displayCounterInfosWrap.appendChild(likeNumber);
        displayCounterInfosWrap.appendChild(svgImage);

        // @listener like btn
        const likesBtns = document.querySelectorAll('.like-btn');
        likesBtns.forEach((likesBtn) => {
            likesBtn.addEventListener('click', () => {
                if (likeNumber) {
                    likeNumber.textContent = Number(likeNumber.textContent) + 1;
                    updateTotalLikes();
                }
            });

            // Accessibility: 
            likesBtn.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.keyCode === 13) { // check for Enter key
                    if (likeNumber) {
                        likeNumber.textContent = Number(likeNumber.textContent) + 1;
                        updateTotalLikes();
                    }
                }
            });
        });

        // Price
        const displayPrice = document.createElement('p');
        displayPrice.innerText = `${price}€/jour`;
        displayPrice.classList.add('photographer-price');
        likeWrapper.appendChild(displayCounterInfosWrap);
        likeWrapper.appendChild(displayPrice);

        // Append to gallery
        const gallery = document.querySelector('.photograph-galery');
        gallery.appendChild(likeWrapper);

        return article;
    }

    function updateTotalLikes() {
        let totalMediaLikeCount = 0;
        document.querySelectorAll(".like-btn").forEach((likes) => {
            totalMediaLikeCount += Number(likes.textContent);
        });
        const likeNumber = document.querySelector('.total-like');
        likeNumber.textContent = totalMediaLikeCount;
    }

    return { getCardDOM };
}
