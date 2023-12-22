import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import hero1 from '../Images/hero/hero1.png'
import hero2 from '../Images/hero/hero2.png'
import hero3 from '../Images/hero/hero3.png'
import hero4 from '../Images/hero/hero4.png'
import Image from 'next/image'
import Navigation from '../Components/NavigationBar'

const images = [
  hero1, hero2, hero3, hero4
]

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0)

  // Función para mostrar el siguiente slide
  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length)
  }

  useEffect(() => {
    // Configura un temporizador para cambiar de diapositiva automáticamente cada 5 segundos (5000 milisegundos)
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // Cambia cada 5 segundos

    return () => {
      // Limpia el temporizador al desmontar el componente
      clearInterval(timer)
    }
  }, [currentImage])

  return (
    <div className='carousel' style={{ overflow: 'hidden', height: '100vh' }}>
      <Navigation />
      {images.map((image, index) => (
        <motion.div
          key={index}
          className='slide'
          style={{
            display: currentImage === index ? 'block' : 'none',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentImage === index ? 1 : 0,
            x: currentImage === index ? 0 : 50 // Efecto de entrada (traslación)
          }}
          exit={{
            opacity: 0,
            x: -50 // Efecto de salida (traslación en dirección opuesta)
          }}
          transition={{ duration: 1, ease: 'easeOut' }} // Usa una función de facilidad personalizada si es necesario
        >
          <Image
            src={image} alt={`Slide ${index + 1}`} width={1000} height={1000}
            style={{}}
          />
        </motion.div>
      ))}
      <motion.div
        className='hero-templat2e'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        style={{
          position: 'absolute',
          top: '25%',
          left: '0',
          width: '100%',
          height: '100%'
        }}
      >
        <div className='hero-content'>
          <span className='hero-title'>
            Enfocados
            <br className='space' /> en los
            <br className='space' /> <span>Detalles</span>
          </span>
          <span className='hero-desc'>
            Porque la perfeccion se logra en base al esfuerzo
          </span>
          <motion.button
            className='hero-btn'
            //   variants={buttonVariants}
            whileHover='hover'
            whileTap='tap'
            initial='rest'
          >
            Contactanos
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='17' viewBox='0 0 18 17' fill='none'>
              <path d='M1.11523 8.43536L14.8384 8.29851M9.73341 1.91132L16.2564 8.4343L9.60201 15.0887' stroke='#324C27' strokeWidth='2' strokeLinecap='square' strokeLinejoin='round' />
            </svg>
          </motion.button>
          <div className='wave-container'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 100'
              fill='none'
              className='wave'
            >
              <path
                d='M864.595 36.3813C597.538 -3.45801 365.483 -20.0887 0 36.3813V107.679H1440V28.1452C1319.93 63.5219 1101.65 68.4885 864.595 36.3813Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Carousel
