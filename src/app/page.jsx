'use client'

import { motion } from 'framer-motion'
import Carrusel from '../../Components/Carrusel'
import Contactos from '../../Components/Contactos'
import Portada from '../../Images/portada-ingenieros.png'
import Image from 'next/image'
import Navigation from '../../Components/NavigationBar'
import Atropos from 'atropos/react'
import { useEffect } from 'react'
import Link from 'next/link'

const Home = () => {
  const scriptContent = `
// function([string1, string2],target id,[color1,color2])    
 consoleText(['Porque la perfeccion se logra en base al esfuerzo', 'Dedicación en cada servicio', 'Detalles que marcan la diferencia'], 'text',['#354C30','#354C30','#354C30']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 70)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
`

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

  useEffect(() => {
    // Ejecuta el script cuando el componente se monta
    const script = document.createElement('script')
    script.innerHTML = scriptContent
    document.head.appendChild(script)

    // Limpia el script cuando el componente se desmonta
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      <Navigation />
      <motion.div
        className='hero-template'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
      >
        <div className='hero-content'>
          <span className='hero-title'>
            Enfocados
            <br className='space' /> en los
            <br className='space' /> <span>Detalles</span>
          </span>
          <span id='text' className='hero-desc' />
          <div className='console-underscore' style={{ display: 'none' }} id='console'>
            &#95;
          </div>

          <motion.button
            className='btnhero'
            variants={buttonVariants}
            whileTap='tap'
          >
            <Link
              id='contacto'
              href='#contact'
              passHref
            >
              <span className='box'>Contactanos</span>
            </Link>
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
      <section className='Home-Servicios'>
        <motion.div
          className='Imagen-Servicios'
          initial={{ opacity: 0, x: -50 }} // Configura la posición inicial y la opacidad
          animate={{ opacity: 1, x: 0 }} // Configura la animación de entrada
          transition={{ duration: 1 }}
        >
          <Atropos shadow={0}>
            <Image className='imagen-interno' src={Portada} alt='Imagen Servicio' width={1000} height={1000} />
          </Atropos>
        </motion.div>
        <motion.div
          className='Texto-Servicios'
          initial={{ opacity: 0, x: 50 }} // Configura la posición inicial y la opacidad
          animate={{ opacity: 1, x: 0 }} // Configura la animación de entrada
          transition={{ duration: 1, delay: 0.1 }}
        >
          <h4>Nuestros servicios de excelencia</h4>
          <motion.div
            className='sub-texto'
            initial={{ opacity: 0, x: -20 }} // Estado inicial (fuera de la pantalla a la izquierda)
            animate={{ opacity: 1, x: 0 }} // Estado animado (en pantalla)
            whileHover={{
              scale: 1.05,
              duration: 0.1
            }}
          >
            <span>
              <div className='loader'>
                <svg viewBox='0 0 80 80'>
                  <circle id='test' cx='40' cy='40' r='32' />
                </svg>
              </div>
              Remodelacion
            </span>
            <motion.p
              initial={{ opacity: 0, x: -20 }} // Estado inicial (fuera de la pantalla a la izquierda)
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >Transformamos tus espacios interiores con remodelaciones y diseño moderno. Incluyendo paredes, pisos, techos y ventanas
            </motion.p>
          </motion.div>
          <motion.div
            className='sub-texto'
            initial={{ opacity: 0, x: -20 }} // Estado inicial (fuera de la pantalla a la izquierda)
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.05,
              duration: 0.1
            }}
          >
            <span>
              <div className='loader triangle'>
                <svg viewBox='0 0 86 80'>
                  <polygon points='43 8 79 72 7 72' />
                </svg>
              </div>
              Mantenimiento
            </span>
            <motion.p
              initial={{ opacity: 0, x: -20 }} // Estado inicial (fuera de la pantalla a la izquierda)
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >Cuidamos de tu hogar con servicios de mantenimiento, con nuestros expertos en cuidado del hogar y puertas de garaje
            </motion.p>
          </motion.div>
          <motion.div
            className='sub-texto'
            initial={{ opacity: 0, x: -20 }} // Estado inicial (fuera de la pantalla a la izquierda)
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.05,
              duration: 0.1
            }}
          >
            <span>
              <div className='loader'>
                <svg viewBox='0 0 80 80'>
                  <rect x='8' y='8' width='64' height='64' />
                </svg>
              </div>
              Renovación
            </span>
            <motion.p
              initial={{ opacity: 0, x: -20 }} // Estado inicial (fuera de la pantalla a la izquierda)
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >Renovamos y pintamos tu casa, además de ofrecer cambio de pisos en porcelanato, mayolicas y empredrados de gran calidad
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <Carrusel />
      <div id='contact'>
        <Contactos />
      </div>

      {/* <Caro/> */}
    </>
  )
}

export default Home
