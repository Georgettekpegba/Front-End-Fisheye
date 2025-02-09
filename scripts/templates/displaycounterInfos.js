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
        // // likes
        const likeWrapper = document.createElement('div');
        likeWrapper.classList.add('like-wrapper');
        const likeNumber = document.createElement('span');
        likeNumber.classList.add('total-like');
        likeNumber.textContent = totalMediaLikeCount;
        const displayCounterInfosWrap = document.createElement('div');
        displayCounterInfosWrap.classList.add('display-counter-infos-wrap');
        displayCounterInfosWrap.appendChild(likeNumber);
        displayCounterInfosWrap.appendChild(svgImage);
        // @listerner like btn
        const likesBtns = document.querySelectorAll('.like-btn');
        likesBtns.forEach((likesBtn) =>
            likesBtn.addEventListener('click',
                () => {
                    if (likeNumber) {
                        likeNumber.textContent = Number(likeNumber.textContent) + 1;
                    }
                })
        );
        // prix
        const displayPrice = document.createElement('p');
        displayPrice.innerText = `${price}€/jour`;
        displayPrice.classList.add('photographer-price');
        likeWrapper.appendChild(displayCounterInfosWrap);
        likeWrapper.appendChild(displayPrice);
        // a mettre en absolu css
        // appenchild galerry
        const gallery = document.querySelector('.photograph-galery');
        // appenchild price
        gallery.appendChild(likeWrapper);
        return article;
    }
    return { getCardDOM };

}