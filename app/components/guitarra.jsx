import { Link } from "@remix-run/react";
export default function Guitarra({guitarra}) {

    const { descripcion, imagen, precio, url, nombre } = guitarra
  
    return (
        <div className="guitarra">
            <div className="contenidoImagen">
                <img src={imagen.data.attributes.formats.small.url} alt={`Imagen Guitarra ${nombre}`} /> 
            </div>
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="descripcion">{descripcion[0].children[0].text}</p>
                <p className="precio">{precio}€</p>
                <Link className="enlace" to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}

