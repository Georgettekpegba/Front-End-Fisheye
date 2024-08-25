// // // fonction qui permetra d'invoquer un templette video ou image
import Image from '../models/Image.js'
import Video from '../models/Video.js
// // // appeler une des fonction
export function mediaFactory(media) {
    if (media.image) {
        return image(media);
    }
    else {
        return video(media);
    }
}
