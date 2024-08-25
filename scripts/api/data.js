export async function getData() {
    let response = await fetch('data/photographers.json')
    let data = await response.json()
    return data

}



