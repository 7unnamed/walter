import Image from 'next/image'
import Link from 'next/link'

const ImagenServicios = ({ url, texto }) => {
  return (
    <div className='elemento-carrusel'>
      <Image src={url} alt='Imagen' loading='lazy' className='elemento-imagen' width={200} height={300} />
      <div className='texto-elemento-carrusel'>
        <p>{texto}</p>
        <div className='enlace-elemento-carrusel'>
          <Link className='link-elemento-carrusel' href='/servicios'>
            Leer más
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='17' viewBox='0 0 18 17' fill='none'>
              <path d='M1.11523 8.43536L14.8384 8.29851M9.73341 1.91132L16.2564 8.4343L9.60201 15.0887' stroke='#a18210' strokeWidth='2' strokeLinecap='square' strokeLinejoin='round' />
            </svg>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default ImagenServicios
