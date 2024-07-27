export async function getData() {
    let reponse = await fetch('data/photographers.json')
    let data = await reponse.json()
    return data
}