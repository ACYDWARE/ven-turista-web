import React from 'react'
import Image from 'next/image'
import googleButton from '../../../public/googlePlayButton.png'
import Qr from '../../../public/Qr.png'

export default function banner() {
  return (
    <div className='bg-primary dark:bg-quinary w-full h-full items-center'>
      <div className='dark:text-white md:w-[90%] flex md:justify-center p-6'>
        <div className='sm:flex-col md:w-[40%]'>
          <h1 className='text-6xl md:text-4xl lg:5xl m-3 md:m-1 font-bold'>Obten nuestra app ahora!</h1>
          <p className='text-secondary dark:text-tertiary text-2xl m-3 md:m-1 font-semibold'>Playas infinitas, aguas cristalinas. Descubre el paraíso.</p>
          <p className='m-3 md:m-1'>¿Quieres descubrir una nueva cafetería, un museo fascinante o una playa
            paradisíaca? Nuestra función de geolocalización te mostrará los puntos de
            interés más cercanos a tu ubicación, junto con fotos, reseñas y horarios de apertura.</p>
          <Image src={googleButton} alt={''} className='w-[200px] h-[60px] ml-3 mt-5 mb-8' />
        </div>
        <div className='hidden md:block'><Image src={Qr} alt='' className='w-[100px] h-[100px] mx-5 mt-20'></Image></div>
        <div className='hidden md:block'><p>Imagen Telefono</p></div>
      </div>
    </div>
  )
}
