import React from 'react'
import Image from 'next/image'
import { SeeAllButton } from '../buttons/Buttons'

const Populares = () => {
  return (
    <div className='w-screen h-screen bg-primary/20 overflow-hidden -mt-2 flex flex-col items-center'>
      <h1 className='mt-4 font-bold tracking-widest text-xl lg:text-5xl mx-[1rem] my-[2rem] text-justify'>POPULARES</h1>
      <div className='container mt-3 flex flex-wrap'>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgDay1.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgDay2.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgDay3.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgDay4.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgNight1.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgNight2.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgNight3.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[250px] h-[200px] m-[50px]'><Image src="/imgNight4.jpeg" alt="img" width={0} height={0} className='w-full h-full' /></div>
      </div>
      <SeeAllButton />
    </div>
  )
}

export default Populares
