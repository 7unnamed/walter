'use client'
import { Icon } from './IconGeneral'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
// import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='footer-Container'>
      <div className='footer-Superior'>
        <div className='footer-1'>
          <motion.h2
            initial={{ x: -20 }}
            animate={{ x: 0 }}
          >
            Hoyle Remodelaciones
          </motion.h2>
          <motion.input
            type='text'
            placeholder='Suscribete'
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          />
        </div>
        <div className='footer-2'>
          <div className='contenedor-footer2'>
            <span>Páginas</span>
            <motion.ul>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Inicio
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Servicios
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Galería
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Nosotros
              </motion.li>
            </motion.ul>
          </div>
          <div className='contenedor-footer2'>
            <span>Servicios</span>
            <motion.ul>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Remodelación
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Mantenimiento
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Renovación
              </motion.li>
            </motion.ul>
          </div>
          <div className='contenedor-footer2'>
            <span>Contactos</span>
            <motion.ul>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Filadelfia IV
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                Miraflores
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                (123)345678
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
      <div className='footer-Inferior'>
        <motion.div
          className='redes-footer'
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
        >
          <a href='https://www.facebook.com' className='red-footer-link'>
            <motion.div
              whileHover={{ scale: 1.3, rotate: -40, color: '#3b5998' }}
            >
              <Icon icono={faFacebook} css='icono-footer-inferior' />
            </motion.div>
          </a>
          <a href='https://www.instagram.com' className='red-footer-link'>
            <motion.div
              whileHover={{ scale: 1.3, rotate: -40, color: '#FFDC80' }}
            >
              <Icon icono={faInstagram} css='icono-footer-inferior' />
            </motion.div>
          </a>
          <a href='https://www.tiktok.com' className='red-footer-link'>
            <motion.div
              whileHover={{ scale: 1.3, rotate: -40, color: 'black' }}
            >
              <Icon icono={faTiktok} css='icono-footer-inferior' />
            </motion.div>
          </a>
        </motion.div>

        <motion.div
          className='copy-footer'
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <p className='hover-color-animation'>© 2023 Daniel Orozco - Panchos Design</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer
