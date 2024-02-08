import { useLoaderData } from '@remix-run/react'
import { getPost} from '~/models/posts.server'
import {formatearFecha} from '~/utils/helpers'
import style from '~/styles/blog.css'

export function meta() {
    return [{
        title: 'GuitarLA - Nuestro Blog' ,
        description: 'GuitarLA, Blog de música y venta de guitarras'
    }]
  }

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: style
        }
    ]
}

export async function loader({params}){
    const { postUrl } = params
    const post = await getPost(postUrl)
    return post
}

export default function Posts() {
    const post = useLoaderData()
    const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes
  return (
    <article className='contenedor post'>
    <img className="mt-3" src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h3 className="">{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{post.data[0].attributes.contenido[0].children[0].text}</p>
        </div>
    </article>
  )
}
