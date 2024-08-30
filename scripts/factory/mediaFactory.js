// // // fonction qui permetra d'invoquer un templette video ou image
import { Image } from '../models/Image.js';
import { Video } from '../models/video.js';
// // // appeler une des fonction
export function mediaFactory(photographerMedia) {
    if (media.image) {
        return image(photographerMedia);
    }
    else {
        return video(photographerMedia);
    }
}
