import React from 'react'


export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs h-36 bg-orange-300'>
      <span>Contactos</span>
      <span>&copy; {new Date().getFullYear() }</span>
    </div>
  )
}

export default Footer
