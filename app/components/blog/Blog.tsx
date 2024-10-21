import React from 'react'
import { ReadMore, SeeAllButton } from '../buttons/Buttons'

const Blog = () => {
  return (
    <div className='bg-primary/50 dark:bg-quinary/80 w-screen h-100% dark:text-gray-100 font-inter '>
      {/*Title*/}
      <div className='title'>
        <h1>Blog</h1>
      </div>
      {/*News*/}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-[3rem] mx-[5rem] py-[4rem] h-[80%]'>
        <div className='bg-gray-100 dark:bg-gray-950 text-gray-950 dark:text-gray-100 drop-shadow-lg rounded-3xl'>
          <img src='/blog1.jpg' alt='Noticia 1' className='w-full h-auto rounded-3xl object-fit mb-4' />
          <div className='p-4 mx-4 my-4'>
            <h2 className='text-2xl font-bold mb-2'>Título de la noticia 2</h2>
            <h3 className='text-lg font-semibold mb-2'>Subtítulo de la noticia 2</h3>
            <p className='text-sm text-justify mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae reiciendis, veniam similique sint est, eaque facere, necessitatibus adipisci tempore quas fugit ipsam iusto voluptatibus. Esse quis praesentium sed expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aut quas atque ratione accusantium? Libero tenetur, eligendi perferendis recusandae suscipit totam voluptate, animi quis asperiores laudantium tempore blanditiis repellendus porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum officia placeat distinctio magnam saepe quos, assumenda perspiciatis vitae eaque sunt soluta id veritatis quibusdam illo aspernatur magni eius maiores!</p>
            <ReadMore />
          </div>
        </div>
        <div className='bg-gray-100 dark:bg-gray-950 text-gray-950 dark:text-gray-100 drop-shadow-lg rounded-3xl'>
          <img src='/blog2.jpg' alt='Noticia 2' className='w-full h-auto rounded-3xl object-fit mb-4' />
          <div className='p-4 mx-4 my-4'>
            <h2 className='text-2xl font-bold mb-2'>Título de la noticia 2</h2>
            <h3 className='text-lg font-semibold mb-2'>Subtítulo de la noticia 2</h3>
            <p className='text-sm text-justify mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae reiciendis, veniam similique sint est, eaque facere, necessitatibus adipisci tempore quas fugit ipsam iusto voluptatibus. Esse quis praesentium sed expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aut quas atque ratione accusantium? Libero tenetur, eligendi perferendis recusandae suscipit totam voluptate, animi quis asperiores laudantium tempore blanditiis repellendus porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum officia placeat distinctio magnam saepe quos, assumenda perspiciatis vitae eaque sunt soluta id veritatis quibusdam illo aspernatur magni eius maiores!</p>
            <ReadMore />
          </div>
        </div>
        <div className='bg-gray-100 dark:bg-gray-950 text-gray-950 dark:text-gray-100 drop-shadow-lg rounded-3xl'>
          <img src='/blog3.jpg' alt='Noticia 3' className='w-full h-auto rounded-3xl object-fit mb-4' />
          <div className='p-4 mx-4 my-4 '>
            <h2 className='text-2xl font-bold mb-2'>Título de la noticia 2</h2>
            <h3 className='text-lg font-semibold mb-2'>Subtítulo de la noticia 2</h3>
            <p className='text-sm text-justify mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae reiciendis, veniam similique sint est, eaque facere, necessitatibus adipisci tempore quas fugit ipsam iusto voluptatibus. Esse quis praesentium sed expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aut quas atque ratione accusantium? Libero tenetur, eligendi perferendis recusandae suscipit totam voluptate, animi quis asperiores laudantium tempore blanditiis repellendus porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum officia placeat distinctio magnam saepe quos, assumenda perspiciatis vitae eaque sunt soluta id veritatis quibusdam illo aspernatur magni eius maiores!</p>
            <ReadMore />
          </div>
        </div>
      </div>
      {/*See All*/}
      <div className='flex justify-center items-center pt-[4rem] pb-[8rem]'>
        <SeeAllButton />
      </div>
    </div>
  )
}

export default Blog
