import { getData } from "../api/data";
export function photographerMainTemplate(data) {
    // const card = (data) => {
    const { name, portrait, city, country, tagline, galery, photo, id } = data;
    // use id later to get the photographer's photos
    const picture = `assets/photographers/${portrait}`;
    function getUserCardDOM() {
        const article = document.createElement('article');
        article.classList.add('photographer-infos');
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
        const photographerInfoWrapper = document.createElement('div');
        photographerInfoWrapper.classList.add('header-title');
        const photographerName = document.createElement('h1');
        photographerName.textContent = name;

        // location photographer
        const location = document.createElement('h3');
        location.textContent = `${city}, ${country}`;
        location.classList.add('photographer-location');
        // blason photographer
        const slogan = document.createElement('p');

        slogan.textContent = tagline;
        // accessing photographer header section
        const header = document.querySelector('.photograph-header');
        const btn = document.querySelector('.contact_button');
        header.insertBefore(article, btn);


        // article.appendChild(title);
        header.appendChild(img);
        // article.appendChild(location);
        header.appendChild(location);
        // article.appendChild(slogan);
        header.appendChild(slogan);
        header.appendChild(photographerInfoWrapper)
        photographerInfoWrapper.appendChild(photographerName)
        photographerInfoWrapper.appendChild(location)
        photographerInfoWrapper.appendChild(slogan)


        // adding a footer section
        const footer = document.createElement('footer');
        footer.classList.add('photographer-footer');
        return (article);
    }
    return { name, picture, city, country, tagline, galery, photo, id, getUserCardDOM };

}