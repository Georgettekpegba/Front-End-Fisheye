// // // fonction qui permetra d'invoquer un templette video ou image
import { displayImage } from '../templates/displayImage.js';
import { displayVideo } from '../templates/displayVideo.js';
// // // appeler une des fonction
export function mediaFactory(photographerMedia) {
    if (photographerMedia.image) {
        return displayImage(photographerMedia);
    }
    else {
        return displayVideo(photographerMedia);
    }
}
