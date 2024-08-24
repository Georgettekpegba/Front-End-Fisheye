// // // fonction qui permetra d'invoquer un templette video ou image
// // // appeler une des fonction
export function mediaFactory(media) {
    if (media.image) {
        return image(media);
    }
    else {
        return video(media);
    }
}