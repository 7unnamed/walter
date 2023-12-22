'use client'
import Image from 'next/image'
import React from 'react'
import bur1 from '../../../Images/Nosotros/bur1.png'
import bur2 from '../../../Images/Nosotros/bur2.png'
import bur3 from '../../../Images/Nosotros/bur3.png'
import bur4 from '../../../Images/Nosotros/bur4.png'
import bur5 from '../../../Images/Nosotros/bur5.png'
import mision from '../../../Images/Nosotros/mision.png'
import vision from '../../../Images/Nosotros/vision.png'
import { motion } from 'framer-motion'
import Navigation from '../../../Components/NavigationBar'

const Nosotros = () => {
  return (
    <>
      <Navigation />
      <div className='papacontainer'>
<<<<<<< HEAD
        <motion.div
          className='Container-nosotros-hero'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
=======
        <motion.div className='Container-nosotros-hero' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} transition={{ duration: 0.5 }}>
>>>>>>> 885b24cf8f16f7e4e4165586c0c2194b343b95ac
          <div className='imagenes-nosotros-hero'>
            <Image src={bur1} alt='img1' className='corner-image top-left' />
            <Image src={bur2} alt='img2' className='corner-image top-right' />
            <Image src={bur3} alt='img3' className='center-image' />
            <Image src={bur4} alt='img4' className='corner-image bottom-left' />
            <Image src={bur5} alt='img5' className='corner-image bottom-right' />
          </div>
          <div className='contenido-nosotros-hero'>
            <h2>HOYLE</h2>
            <p className='parrafo-nosotros'>Bienvenido a <span className='header-diferente'>Hoyle</span>, donde la excelencia y la innovación se unen para transformar tus espacios en verdaderos refugios de confort y estilo. En <span className='header-diferente'>Hoyle</span>, hemos estado sirviendo a nuestra comunidad con pasión y dedicación durante años, ofreciendo una gama completa de servicios de remodelación y mantenimiento para hogares y propiedades. Nuestro trabaja bajo cuatro pilares fundamentales:</p>
            <div className='pilares-nosotros'>
<<<<<<< HEAD
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >Excelencia
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >Calidad
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >Innovacion
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >Compromiso
              </motion.span>
            </div>
            <motion.div
              className='contacto-nosotros'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
=======
              <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.1 }}>Excelencia</motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.3 }}>Calidad</motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.5 }}>Innovacion</motion.span>
              <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.7 }}>Compromiso</motion.span>
            </div>
            <motion.div className='contacto-nosotros' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 1 }}>
>>>>>>> 885b24cf8f16f7e4e4165586c0c2194b343b95ac
              <p>Tienes alguna pregunta?</p>
              <p>Contactanos!</p>
              <span>+51987654321</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className='secciones-nosotros'>
<<<<<<< HEAD
        <motion.section
          className='mision-nosotros'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
=======
        <motion.section className='mision-nosotros' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.2 }}>
>>>>>>> 885b24cf8f16f7e4e4165586c0c2194b343b95ac
          <div className='mision-header'>
            <h4>Nuestra <span className='header-diferente'>Misión</span> </h4>
            <div className='barra' />
          </div>
          <div className='contenido-mision-nosotros'>
            <div className='contenido-texto'>
              <p>Hacer que tus sueños de renovación cobren vida. Ya sea que estés buscando transformar por completo tu hogar con una remodelación integral o mantenerlo en su mejor estado con nuestros servicios de mantenimiento, estamos aquí para ti.</p>
              <p>En <span className='header-diferente'>Hoyle</span>, nos enorgullece nuestra atención meticulosa a los detalles, nuestro compromiso con la calidad y nuestra capacidad para brindar soluciones creativas a los desafíos de diseño. Nuestro equipo de expertos altamente capacitados y apasionados está listo para llevar a cabo cada proyecto con maestría y entusiasmo.</p>
            </div>
            <Image className='imagen-nosotros' src={mision} alt='mision' />
          </div>
        </motion.section>
<<<<<<< HEAD
        <motion.section
          className='vision-nosotros'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
=======
        <motion.section className='vision-nosotros' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.2 }}>
>>>>>>> 885b24cf8f16f7e4e4165586c0c2194b343b95ac
          <div className='vision-header'>
            <h4>Nuestra <span className='header-diferente'>Visión</span></h4>
            <div className='barra' />
          </div>
          <div className='contenido-vision-nosotros'>
            <Image src={vision} alt='vision' className='imagen-nosotros' />
            <div className='contenido-texto'>
              <p>En <span className='header-diferente'>Hoyle</span>, nuestra visión es convertirnos en un referente confiable en la industria de la remodelación y el mantenimiento, ofreciendo soluciones de alta calidad y servicio personalizado para cada cliente.</p>
              <p>Nos esforzamos por ser una empresa sólida y respetada en nuestro campo, reconocida por nuestra dedicación a satisfacer las necesidades de nuestros clientes y por nuestra capacidad para mejorar sus espacios de manera significativa. Queremos ser conocidos por nuestro compromiso constante con la satisfacción del cliente y la excelencia en la ejecución de proyectos, contribuyendo a la mejora y embellecimiento de los hogares y propiedades que servimos</p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default Nosotros
