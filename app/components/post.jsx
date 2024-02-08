import { Link } from "@remix-run/react"
import { formatearFecha } from "../utils/helpers"

export default function Post({post}) {
    console.log()
    const {contenido, imagen, titulo, url, publishedAt} = post
  return (
    <article className="post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3 className="">{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{post.contenido[0].children[0].text}</p>
            <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}
