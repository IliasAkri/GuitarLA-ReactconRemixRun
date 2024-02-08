export async function getPosts() {
    const respuesta = await fetch(`http://127.0.0.1:1337/api/posts?populate=*`);
    return await respuesta.json()
}

export async function getPost(url) {
    const respuesta = await fetch(`http://127.0.0.1:1337/api/posts?filters[url]=${url}&populate=imagen`);
    return await respuesta.json()   
}