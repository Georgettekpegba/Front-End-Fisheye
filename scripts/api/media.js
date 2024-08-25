import { getData } from "../api/data.js";
export async function getMedia(id) {
    let { photographers, media } = await getData();
    let photographer = photographers.find((photographer) => photographer.id == id);
    let photographerMedia = media.filter((item) => item.photographerId == id);
    return { photographer, photographerMedia }

}

