'use client'

import s11 from '../../../Images/servicio11.jpg'
import s12 from '../../../Images/servicio12.jpg'
import s21 from '../../../Images/servicio21.png'
import s22 from '../../../Images/servicio22.png'
import s31 from '../../../Images/servicio31.avif'
import s32 from '../../../Images/servicio32.avif'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '../../../Components/NavigationBar'

import Atropos from 'atropos/react'
const Servicios = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  const imageVariants = {
    hover: { scale: 1.1 }
  }

  return (
    <>
      <Navigation />
      <motion.div className='portada-galeria-main' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div className='titulo-portada-galeria' initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h4>Nuestros Servicios</h4>
          <p>Casa / Hogar</p>
        </motion.div>
      </motion.div>

      <div className='primerservicios-container'>
        <Atropos shadow={0}>
          <motion.div className='primer-servicio' variants={containerVariants} initial='hidden' animate='visible'>
            <div className='imagenes-tiras' whileHover='hover' variants={imageVariants}>
              <Image src={s11} alt='Image1' />
              <Image src={s12} alt='Image2' />
            </div>
            <motion.div className='texto-tiras'>
              <p>REMODELACION</p>
              <h3>Casa y Habitaciones</h3>
              <p className='parrafo-texto-tiras'>
                Transforma tus espacios con nuestro servicio de remodelación. Expertos en renovación de paredes, pisos y techos, creamos ambientes atractivos y funcionales tanto en interiores como en exteriores. Tu visión, nuestra ejecución excepcional. Descubre cómo podemos hacerlo realidad
              </p>
              <motion.button whileHover={{ scale: 1.1 }}>Solicitar!</motion.button>
            </motion.div>
          </motion.div>
        </Atropos>
        <motion.div className='primer-servicio' variants={containerVariants} initial='hidden' animate='visible'>
          <div className='imagenes-tiras'>
            <Image src={s21} alt='Image1' />
            <Image src={s22} alt='Image2' />
          </div>
          <motion.div className='texto-tiras'>
            <p>MANTENIMIENTO</p>
            <h3>Casa y Puertas de Garaje</h3>
            <p className='parrafo-texto-tiras'>
              Mantén tu hogar en óptimas condiciones con nuestro servicio de mantenimiento. Cuidamos de tu casa y de las puertas de garaje, asegurando su funcionamiento y apariencia impecables. Confía en nosotros para preservar y proteger tu inversión, proporcionando tranquilidad y comodidad en tu vida cotidiana.
            </p>
            <motion.button whileHover={{ scale: 1.1 }}>Solicitar!</motion.button>
          </motion.div>
          <div className='imagenes-tiras-largo'>
            <Image src={s21} alt='Image1' />
            <Image src={s22} alt='Image2' />
          </div>
        </motion.div>
        <Atropos shadow={0}>
          <motion.div className='primer-servicio' variants={containerVariants} initial='hidden' animate='visible'>
            <div className='imagenes-tiras' whileHover='hover' variants={imageVariants}>
              <Image src={s31} alt='Image1' />
              <Image src={s32} alt='Image2' />
            </div>
            <motion.div className='texto-tiras'>
              <p>RENOVACIÓN</p>
              <h3>Interiores y Exteriores</h3>
              <p className='parrafo-texto-tiras'>
                Transforma tus espacios con nuestro servicio de remodelación. Expertos en renovación de paredes, pisos y techos, creamos ambientes atractivos y funcionales tanto en interiores como en exteriores. Tu visión, nuestra ejecución excepcional. Descubre cómo podemos hacerlo realidad
              </p>
              <motion.button whileHover={{ scale: 1.1 }}>Solicitar!</motion.button>
            </motion.div>
          </motion.div>
        </Atropos>
      </div>
    </>
  )
}

export default Servicios
