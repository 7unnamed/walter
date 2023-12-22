'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Icon } from './IconGeneral'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import logo from '../Images/Logo-negocio.png'

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`Navigation-Bar ${isMenuOpen ? 'open' : ''}`}
    >
      <div className='logo-empresa-d'>
        <Image src={logo} alt='logo' className='logo-imagen' width={500} height={500} />
      </div>
      <div className='mobilebar'>
        <div className='logo-empresa'>
          <Image src={logo} alt='logo' className='logo-imagen' width={500} height={500} />
        </div>
        <button className='nb-menu' onClick={toggleMenu}>
          <Icon icono={faBars} css='icono-nav' />
        </button>
      </div>

      <ul
        className={`enlaces ${isMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <motion.li
          className='opcion-navbar'
          initial={{ borderBottom: '2px solid transparent' }}
          whileHover={{ borderBottom: '2px solid #334327', scale: 1.1 }}
        >
          <Link className='enlace-link-nav' href='/'>Inicio</Link>
        </motion.li>
        <motion.li
          className='opcion-navbar'
          initial={{ borderBottom: '2px solid transparent' }}
          whileHover={{ borderBottom: '2px solid #334327', scale: 1.1 }}
        >
          <Link className='enlace-link-nav' href='/servicios'>Servicios</Link>
        </motion.li>
        <motion.li
          className='opcion-navbar'
          initial={{ borderBottom: '2px solid transparent' }}
          whileHover={{ borderBottom: '2px solid #334327', scale: 1.1 }}
        >
          <Link className='enlace-link-nav' href='/galeria'>Galeria</Link>
        </motion.li>
        <motion.li
          className='opcion-navbar'
          initial={{ borderBottom: '2px solid transparent' }}
          whileHover={{ borderBottom: '2px solid #334327', scale: 1.1 }}
        >
          <Link className='enlace-link-nav' href='/nosotros'>Nosotros</Link>
        </motion.li>
      </ul>
      <div className='btn-nav'>
        <motion.button
          className='nb-contact'
          variants={buttonVariants}
          whileHover='hover'
          whileTap='tap'
          initial='rest'
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Contactanos
          </motion.span>
        </motion.button>
      </div>

    </motion.nav>
  )
}
export default NavigationBar
