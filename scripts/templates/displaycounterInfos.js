// media sections
export function displayCounterInfos(price) {
    const svg = `assets/svg/heart.svg`;
    function getCardDOM() {
        const article = document.createElement('article');
        // likes
        const mediaLikeCount = document.querySelectorAll(".like-btn");
        let totalMediaLikeCount = 0;
        mediaLikeCount.forEach((likes) => {
            console.log('====================================');
            console.log(likes);
            console.log('====================================');
            totalMediaLikeCount += Number(likes.textContent);


        });

        // svg
        const svgImage = document.createElement('img');
        svgImage.src = svg;
        svgImage.classList.add('heart');
        // // likes
        const likeWrapper = document.createElement('div');
        likeWrapper.classList.add('like-wrapper');
        const likeNumber = document.createElement('span');
        likeNumber.classList.add('total-like');
        likeNumber.textContent = totalMediaLikeCount;
        likeWrapper.appendChild(likeNumber);
        likeWrapper.appendChild(svgImage);
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
        const displayCounterInfosWrap = document.createElement('div');
        displayCounterInfosWrap.classList.add('display-counter-infos-wrap');
        displayCounterInfosWrap.appendChild(likeWrapper);
        displayCounterInfosWrap.appendChild(displayPrice);
        // a mettre en absolu css
        // appenchild galerry
        const gallery = document.querySelector('.photograph-galery');
        // appenchild price
        article.appendChild(displayPrice);
        gallery.appendChild(displayPrice);
        displayCounterInfosWrap.appendChild(likeWrapper);
        displayCounterInfosWrap.appendChild(likeNumber);
        displayCounterInfosWrap.appendChild(svgImage);
        displayCounterInfosWrap.appendChild(displayPrice);
        displayCounterInfosWrap.appendChild(likeWrapper);
        gallery.appendChild(likeWrapper);
        gallery.appendChild(displayCounterInfosWrap);
        return article;
    }
    return { getCardDOM };

}