import React from 'react'
import Img1 from '../../../public/Destinations1.jpg'
import Img2 from '../../../public/Destinations2.jpg'
import Img3 from '../../../public/Destinations3.jpg'
import Img4 from '../../../public/Destinations4.jpg'
import Img5 from '../../../public/Destinations5.jpg'
import Slider from 'react-slick';
import Image from 'next/image'
import { SeeAllButton } from '../buttons/Buttons'

const ImageList = [
  {
    id: 1,
    img: Img1,
    display: " w-full h-96 rounded-3xl",
  },
  {
    id: 2,
    img: Img2,
    display: "w-full h-96 rounded-3xl",
  },
  {
    id: 3,
    img: Img3,
    display: "w-full h-96 rounded-3xl",
  },
  {
    id: 4,
    img: Img4,
    display: "w-full h-96 rounded-3xl",
  },
  {
    id: 5,
    img: Img5,
    display: "w-full h-96 rounded-3xl",
  },
]

const Destinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    // div padre
    <div className='w-screen h-screen bg-gradient-to-b from-secondary to-primary dark:bg-gradient-to-b dark:from-quaternary dark:to-quinary dark:text-gray-100 overflow-hidden items-center font-inter slider-container'>
      <h1 className='title'>DESTINOS</h1>
      {/* div de pantalla*/}
      <div className='w-4/5 mx-auto h-2/3 md:h-2 '>
        <Slider {...settings} className='rounded-xl'>
          {ImageList.map((data, key) => (
            <div key={key} className='w-full p-10 group'>
              <Image
                src={data.img}
                alt=""
                className={data.display}
              />
              <div className='w-full h-96 absolute p-10 top-10 bottom-[24rem] bg-gray-100/80 dark:bg-black border-solid rounded-3xl hidden group-hover:inline-block'>
                <h1 className='text-2xl font-black tracking-wider sm:w-10'>Chukuto Planet</h1>
                <br></br>
                <p>Lido Poodle</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className='flex justify-center items center py-[4rem]'>
          <SeeAllButton />
        </div>
      </div>
    </div>
  )
}

export default Destinations;