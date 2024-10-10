import React from 'react'
import Link from 'next/link';


export const Footer = () => {
  return (
    <div className='h-36 bg-orange-300 dark:bg-quinary dark:text-gray-100'>
      <div className='text-xs flex w-full justify-center'>

        {/*<span>&copy;Copyrith {new Date().getFullYear()}</span>*/}
      </div>
      <div>
        <div className='font-inter'>
          <h1 className='right-8'>Redes sociales</h1>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl flex flex-row justify-center mt-4 '>
        <div className='m-4'>
          <Link href='/'>Hogar</Link>
        </div>
        <div className='m-4'>
          <Link href='/'>Populares</Link>
        </div>
        <div className='m-4'>
          <Link href='/'>Destinos</Link>
        </div>
        <div className='m-4'>
          <Link href='/'>Blog</Link>
        </div>
        <div className='m-4'>
          <Link href='/'>Contacto</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
