// // // fonction qui permetra d'invoquer un templette video ou image
// // // appeler une des fonction
import { image } from './mediaFactory.js';
import { video } from '../models/media.js';
export function mediaFactory(media) {
    if (media.image) {
        return image(media);
    }
    else {
        return video(media);
    }
}