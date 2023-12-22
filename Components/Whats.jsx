'use client'
import { Icon } from '../Components/IconGeneral'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

function BubbleWhats () {
  const [iconLoad, setIconLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIconLoad(true)
    }, 2000)
  }, [])

  return (
    <>
      {iconLoad &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
        >
          <Link href='https://www.whatsapp.com' className='modalWhatsapp'>
            <div className='bubble' />
            <Icon icono={faWhatsapp} css='whatsappIcon' />
          </Link>
        </motion.div>}
    </>
  )
}

export default BubbleWhats
