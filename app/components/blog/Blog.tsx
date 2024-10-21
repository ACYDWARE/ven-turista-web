import React from 'react'
import { ReadMore } from '../buttons/Buttons'

const Blog = () => {
  return (
    <div className='bg-primary/40 dark:bg-quinary/40 w-screen h-screen dark:text-gray-100 font-inter '>
      {/*Title*/}
      <div className='title'>
        <h1>Blog</h1>
      </div>
      {/*News*/}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mt-[2rem]'>
        <div className='bg-black p-4 rounded-3xl'>
          <img src='/blog1.jpg' alt='Noticia 1' className='w-full h-40 rounded-3xl object-cover mb-4' />
          <h2 className='text-lg font-bold mb-2'>Título de la noticia 1</h2>
          <h3 className='text-sm font-semibold mb-2'>Subtítulo de la noticia 1</h3>
          <p className='text-sm mb-4'>Descripción breve de la noticia 1.</p>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Leer más</button>
        </div>
        <div className='bg-black p-4 rounded-3xl'>
          <img src='/blog2.jpg' alt='Noticia 2' className='w-full h-40 rounded-3xl object-cover mb-4' />
          <h2 className='text-lg font-bold mb-2'>Título de la noticia 2</h2>
          <h3 className='text-sm font-semibold mb-2'>Subtítulo de la noticia 2</h3>
          <p className='text-sm mb-4'>Descripción breve de la noticia 2.</p>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Leer más</button>
        </div>
        <div className='bg-slate-950 dark:bg-gray-100 text-gray-100 dark:text-slate-950 rounded-3xl'>
          <img src='blog3.jpg' alt='Noticia 3' className='w-full h-[60%] rounded-3xl object-cover mb-[1rem] ' />
          <div className='p-4'>
            <h2 className='text-lg font-bold mb-2'>Título de la noticia 3</h2>
            <h3 className='text-sm font-semibold mb-2'>Subtítulo de la noticia 3</h3>
            <p className='text-sm mb-4'>Descripción breve de la noticia Descripción breve de la noticia Descripción breve de la noticia Descripción breve de la noticia  </p>
            <button className='bg-gray-100 dark:bg-slate-950 text-slate-950 dark:text-gray-100 py-2 px-4 mb-1 rounded-xl'>Leer más</button>
            <ReadMore />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
