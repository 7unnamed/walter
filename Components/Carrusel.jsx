import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import ImagenServicios from './ImagenServicios'
import servicio1 from '../Images/Carrusel/Servicio1.png'
import servicio2 from '../Images/Carrusel/Servicio2.png'
import servicio3 from '../Images/Carrusel/Servicio3.png'
import servicio4 from '../Images/Carrusel/Servicio4.png'
import CardTR from './CardTR'
import Atropos from 'atropos/react'

const Home = () => {
  const images = [
    {
      url: servicio1,
      name: 'Renovación exterior de una casa'
    },
    {
      url: servicio2,
      name: 'Mantenimiento de puerta de garaje'
    },
    {
      url: servicio3,
      name: 'Pintado parte externa del hogar'
    },
    {
      url: servicio4,
      name: 'Ventanas para sala de estar'
    }
  ]

  return (
    <>
      <div className='carousel-container'>
        <h5>Proyectos Realizados</h5>
        <Carousel className='Main-Carrusel' showStatus={false} emulateTouch showArrows={false} showIndicators={false} showThumbs={false} infiniteLoop>
          {images.map((image, index) => (
            <div key={index} className='contenedor-carrusel-centrar'>
              <ImagenServicios url={image.url} texto={image.name} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='nocarousel-container'>
        <h3>Proyectos Realizados</h3>
        <div className='nocarousel-container2'>
          <div className='trabajosPar'>
            <Atropos shadowScale={0.94}><CardTR Categoria='DISEÑO DE VENTANAS' Texto='Convierte tu hogar u oficina en un lugar donde la luz natural fluye sin esfuerzo y donde cada ventana cuenta una historia de belleza y elegancia.' Imagen={servicio1} />
            </Atropos>
            <Atropos shadowScale={0.94}><CardTR Categoria='MANTENIMIENTO DE GARAJE' Texto='La prevención es la clave para evitar costosas reparaciones en el futuro. Identificar y abordar problemas potenciales antes de que se conviertan en grandes inconvenientes.' Imagen={servicio3} />
            </Atropos>
          </div>
          <div className='trabajosPar'>
            <Atropos shadowScale={0.94}><CardTR Categoria='REMODELACION EXTERNA' Texto='Imagina un lugar donde puedas relajarte, entretener a tus amigos y familiares, o simplemente disfrutar de la belleza de la naturaleza en la comodidad de tu hogar.' Imagen={servicio2} />
            </Atropos>
            <Atropos shadowScale={0.94}><CardTR Categoria='PINTADO EXTERIOR' Texto='Deja que tu propiedad brille con un aspecto fresco y renovado que refleje tu estilo y personalidad' Imagen={servicio4} />
            </Atropos>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
