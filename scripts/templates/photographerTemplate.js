export function photographerTemplate(data) {

    // const card = (data) => {
    const { name, portrait, city, country, tagline, price, id } = data;
    // use id later to get the photographer's photos
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer-card');
        // on cree le lien du photographer card
        const link = document.createElement('a');
        link.href = `photographer.html?id=${id}`;
        link.setAttribute('aria-label', `Voir la page de ${name}`);

        // on rajoute l'image du photographe

        const img = document.createElement('img');
        img.src = picture;
        img.alt = `Portrait de ${name}`;

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

        // prix
        const prix = document.createElement('p');
        prix.innerText = `${price}€/jour`;
        prix.classList.add('photographer-price');
        // creation de l'image
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;

        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(location);
        link.appendChild(slogan);
        link.appendChild(prix);


        return (article);
    }
    return { name, picture, city, country, tagline, price, id, getUserCardDOM };

}

