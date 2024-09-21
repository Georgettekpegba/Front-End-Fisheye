// media sections
export function displayCounterInfos(price) {
    function getCardDOM() {
        // likes
        const mediaLikeCount = document.querySelectorAll(".heart");
        let totalMediaLikeCount = 0;
        mediaLikeCount.forEach((media) => {
            totalMediaLikeCount += Number(media.textContent);
        });

        // // likes
        const likeWrapper = document.createElement('div');
        likeWrapper.classList.add('like-wrapper');
        const likeNumber = document.createElement('span');
        likeNumber.textContent = mediaLikeCount;
        likeWrapper.appendChild(likeNumber);
        likeWrapper.appendChild(svgImage);
        // prix
        const displayPrice = document.createElement('p');
        displayPrice.innerText = `${price}€/jour`;
        displayPrice.classList.add('photographer-price');
        const displayCounterInfosWrap = document.createElement('div');
        // a mettre en absolu css

        // appenchild price
        displayCounterInfosWrap.appendChild(likeWrapper);
        displayCounterInfosWrap.appendChild(likeNumber);
        return card;
    }
    return { getCardDOM };

}