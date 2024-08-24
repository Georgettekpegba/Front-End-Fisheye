// media section
export function mediaTemplate(media) {
    const { name, image, video, title, likes, date, price, tags, id } = media;
    const picture = `assets/Sample Photos/ ${image}`;
    function getMediaCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer-media');
        // on cree le lien du photographer card
        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        link.setAttribute('aria-label', `Voir la page de ${name}`);
        // on rajoute l'image du photographe
        const img = document.createElement('img');
        img.src = picture;
        img.alt = `Portrait de ${name}`;
        img.classList.add("photographer-img");
        // on rajoute les infos photographes
        const photographerName = document.createElement('h1');
        photographerName.textContent = name;
        photographerName.classList.add('photographer-name');
        // location photographer
        const location = document.createElement('p');
        location.textContent = `${city}, ${country}`;
        location.classList.add('photographer-location');
        // blason photographer
        const slogan = document.createElement('p');
        slogan.textContent = tagline;
        // adding a footer section
        const footer = document.createElement('footer');
        footer.classList.add('photographer-footer');
        // adding a title section
        const title = document.createElement('h2');
        title.textContent = name;
        title.classList.add('photographer-title');

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(location);
        link.appendChild(slogan);
        link.appendChild(footer);
        link.appendChild(title);
    }
    return { name, image, video, title, likes, date, price, tags, id, getMediaCardDOM };

}