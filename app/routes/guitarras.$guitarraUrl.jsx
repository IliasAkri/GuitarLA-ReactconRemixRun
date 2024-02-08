import {useState} from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export async function loader({ params }) {
  const { guitarraUrl } = params
  const guitarra = await getGuitarra(guitarraUrl)
  return guitarra
}

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { description: `Guitarra, venta de guitarras, guitarra ${data.data[0].attributes.nombre}` }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Guitarra() {
  const {agregarCarrito} = useOutletContext();
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData()
  const { nombre, imagen, precio } = guitarra.data[0].attributes
  const descripcion = guitarra.data[0].attributes.descripcion[0].children[0].text


  const handleSubmit = e => {
    e.preventDefault();

    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad')
      return
    }
    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    // console.log(guitarraSeleccionada)
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <main className='contenedor guitarra'>
      <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra: ${nombre}`} />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>{precio}€</p>

        <form onSubmit={handleSubmit} className='formulario'>
          <label htmlFor="cantidad">Cantidad</label>

          <select 
            onChange={ e => setCantidad(+e.target.value)}
            id="cantidad">
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>

          <input
            type="submit"
            value="Agregar al carrito"
          />
        </form>
      </div>
    </main>
  )
}

export default Guitarra
