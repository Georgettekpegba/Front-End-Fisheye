export async function getData() {
    let reponse = await fetch('data/photographers.json')
    let data = await reponse.json()
    return data
}
// export async function getphotographerId() {
//     const url = new URL(window.location.href);
//     const id = url.searchParams.get('id');
//     return id;
// }

// export async function getPhotographerMedia() {
//     let response = await fetch('data/photographers.json');
//     let media = await response.json();
//     return media;

// }
