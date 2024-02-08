
export async function getGuitarras() {
    const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?populate=*`);
    return await respuesta.json()
    
}

export async function getGuitarra(url) {
    const respuesta = await fetch(`http://127.0.0.1:1337/api/guitarras?filters[url]=${url}&populate=imagen`);
    return await respuesta.json()   
}