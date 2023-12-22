'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Toast from '../Components/Alert'
const Contactos = () => {
  const [showToast, setShowToast] = useState(false)
  const [nom, setNom] = useState([''])
  const [cel, setCel] = useState([''])
  const [mail, setMail] = useState([''])
  const [des, setDes] = useState([''])
  const [serverMessage, setServerMessage] = useState('')

  const handleNomChange = (event) => {
    setNom(event.target.value)
  }

  const handleCelChange = (event) => {
    setCel(event.target.value)
  }

  const handleMailChange = (event) => {
    setMail(event.target.value)
  }

  const handleDesChange = (event) => {
    setDes(event.target.value)
  }

  const handleShowToast = (message) => {
    setServerMessage(message)
    setShowToast(true) // Mostrar el Toast
    setTimeout(() => setShowToast(false), 2000) // Ocultar el Toast después de 2 segundos
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setNom('')
    setDes('')
    setCel('')
    setMail('')
  }

  const handleSendEmail = async () => {
    if (nom !== '' && des !== '' && mail !== '' && cel !== '') {
      try {
        const res = await fetch('api/send', {
          method: 'POST'
        })
        const data = await res.json()
        console.log(data)
      } catch (error) {
        console.error('Error al enviar el correo:', error)
      }
      handleShowToast('¡Gracias por contactarnos, te responderemos pronto!')
    } else {
      handleShowToast('Debe completar el formulario para contactarnos')
    }
  }

  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    tap: {
      scale: 0.9
    }
  }
  const inputVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    }
  }

  return (
    <motion.form
      className='Contactos-container'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <h3>Contáctanos</h3>
      <motion.div
        className='formulario-contactos'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.input
          type='text'
          placeholder='Nombres y Apellidos'
          variants={inputVariants}
          name='name'
          value={nom}
          onChange={handleNomChange}
        />
        <motion.input
          id='celular'
          type='number'
          placeholder='Celular'
          variants={inputVariants}
          value={cel}
          onChange={handleCelChange}
        />
        <motion.input
          type='text'
          placeholder='Correo Electronico'
          variants={inputVariants}
          name='email'
          value={mail}
          onChange={handleMailChange}
        />
        <motion.textarea
          name='Comentarios'
          id='Comentarios'
          cols='auto'
          rows='5'
          dragControls={false}
          placeholder='Comentarios del caso...'
          variants={inputVariants}
          value={des}
          onChange={handleDesChange}
        />
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
          initial='rest'
          onClick={handleSendEmail}
        >
          Enviar
        </motion.button>
      </motion.div>
      {showToast && <Toast message={serverMessage} />}
    </motion.form>
  )
}

export default Contactos
