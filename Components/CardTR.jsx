import React from 'react'
import Image from 'next/image'

const CardTR = ({ Categoria, Texto, Imagen }) => {
  return (
    <div className='card-container'>
      <Image className='card-imagen' src={Imagen} alt='Logo' width={1000} height={1000} />
      <div className='card-texto-container'>
        <span className='card-categoria'>
          {Categoria}
        </span>
        <p className='card-parrafo'>{Texto}</p>
      </div>
    </div>
  )
}

export default CardTR
