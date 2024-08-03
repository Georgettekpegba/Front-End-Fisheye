export function photographerMainTemplate(data) {
    // const card = (data) => {
    const { name, portrait, city, country, tagline, id } = data;
    // use id later to get the photographer's photos
    const picture = `assets/photographers/${portrait}`;
    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer-header');
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

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(location);
        link.appendChild(slogan);

        return (article);
    }
    return { name, picture, city, country, tagline, id, getUserCardDOM };

}

