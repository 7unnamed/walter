import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Toast ({ message }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (message) {
      setVisible(true)
      const timer = setTimeout(() => {
        setVisible(false)
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [message])

  return (
    <AnimatePresence>
      {visible && (
        <>
          <div className='backdrop' />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: [1.2, 1] }} // Agrega una escala inicial para simular un rebote
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 10, stiffness: 100 }} // Configura la transición con rebote
            className='toast-container'
          >
            <div className='toast'>{message}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Toast
