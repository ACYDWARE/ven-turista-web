import React from 'react'


export const Footer = () => {
  return (
    <div className='h-36 bg-orange-300 dark:bg-quinary dark:text-gray-100'>
      <div className='text-xs flex w-full justify-center'>
        <span>Contactos</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
      <div className='text-center'>
        <ol>
          <li>Hogar</li>
          <li>Populares</li>
          <li>Destinos</li>
          <li>Blog</li>
          <li>contacto</li>
        </ol>
      </div>
    </div>
  )
}

export default Footer
