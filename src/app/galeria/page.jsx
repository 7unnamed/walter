'use client'
import servicio1 from '../../../Images/Carrusel/Servicio1.png'
import servicio2 from '../../../Images/Carrusel/Servicio2.png'
import servicio3 from '../../../Images/Carrusel/Servicio3.png'
import servicio4 from '../../../Images/Carrusel/Servicio4.png'
import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '../../../Components/IconGeneral'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Navigation from '../../../Components/NavigationBar'

const itemsPerPage = 8

const Galeria = () => {
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
    },
    {
      url: servicio2,
      name: 'Renovación exterior de una casa'
    },
    {
      url: servicio3,
      name: 'Mantenimiento de puerta de garaje'
    },
    {
      url: servicio1,
      name: 'Pintado parte externa del hogar'
    },
    {
      url: servicio2,
      name: 'Ventanas para sala de estar'
    },
    {
      url: servicio3,
      name: 'Renovación exterior de una casa'
    },
    {
      url: servicio1,
      name: 'Mantenimiento de puerta de garaje'
    },
    {
      url: servicio2,
      name: 'Pintado parte externa del hogar'
    },
    {
      url: servicio2,
      name: 'Ventanas para sala de estar'
    },
    {
      url: servicio3,
      name: 'Renovación exterior de una casa'
    },
    {
      url: servicio1,
      name: 'Mantenimiento de puerta de garaje'
    },
    {
      url: servicio2,
      name: 'Pintado parte externa del hogar'
    },
    {
      url: servicio2,
      name: 'Ventanas para sala de estar'
    }
<<<<<<< HEAD
    // Agrega más imágenes aquí
=======
>>>>>>> 885b24cf8f16f7e4e4165586c0c2194b343b95ac
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentImages = images.slice(startIndex, endIndex)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  return (
    <>
      <Navigation />
      <motion.div className='portada-galeria-main' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <motion.div className='titulo-portada-galeria' initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h4>Trabajos Realizados</h4>
          <p>Fotos / Videos</p>
        </motion.div>
      </motion.div>
      <motion.div className='image-gallery' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {currentImages.map((image, index) => (
          <motion.div className='image-item' key={index} initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Image src={image.url} alt={image.name} />
          </motion.div>
        ))}
      </motion.div>
      <motion.div className='pagination' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Icon icono={faArrowLeft} css='lest' />
        </button>
        <span>{currentPage} / {currentPage + 1}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= images.length}
        >
          <Icon icono={faArrowRight} css='lest' />
        </button>
      </motion.div>
    </>

  )
}

export default Galeria
