import React from 'react'
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';


export const Footer = () => {
  return (
    <div className='lg:h-36 bg-orange-300 dark:bg-quinary dark:text-gray-100 flex flex-col lg:flex-row'>
      {/* <div className='text-xs flex w-full justify-center'> */}
      {/*  */}
      {/* <span>&copy;Copyrith {new Date().getFullYear()}</span> */}
      {/* </div> */}
      <div className='font-inter flex lg:flex-col w-full lg:w-1/3 items-center justify-center my-4'>
        <h1 className='font-bold tracking-widest text-2xl uppercase lg:text-3xl mx-[1rem] text-justify'>Logo</h1>
      </div>
      <div className='max-w-screen-2xl flex flex-col lg:flex-row justify-center items-center w-full lg:w-1/3 my-4'>
        <div className='mx-4 my-1 hover:text-tertiary hover:text-lg transition-all'>
          <Link href='/'>Hogar</Link>
        </div>
        <div className='mx-4 my-1 hover:text-tertiary hover:text-lg transition-all'>
          <Link href='/'>Populares</Link>
        </div>
        <div className='mx-4 my-1 hover:text-tertiary hover:text-lg transition-all'>
          <Link href='/'>Destinos</Link>
        </div>
        <div className='mx-4 my-1 hover:text-tertiary hover:text-lg transition-all'>
          <Link href='/'>Blog</Link>
        </div>
        <div className='mx-4 my-1 hover:text-tertiary hover:text-lg transition-all'>
          <Link href='/'>Contacto</Link>
        </div>
      </div>
      <div className='font-inter flex flex-col w-full lg:w-1/3 items-center justify-center my-4'>
        <h1 className='font-light tracking-widest text-lg uppercase mx-[1rem] flex h-1/2 items-center justify-center'>Redes sociales</h1>
        <div className='h-1/2 flex flex-row items-center justify-center'>
          <a href='https://instagram.com/' target='_blank'><FaInstagram className='m-2 size-8'></FaInstagram></a>
          <a href='https://x.com/' target='_blank'><FaTwitter className='m-2 size-8'></FaTwitter></a>
          <a href='https://youtube.com/' target='_blank'><FaYoutube className='m-2 size-8'></FaYoutube></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
