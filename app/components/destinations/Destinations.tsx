import React from 'react'
import Img1 from '../../../public/Destinations1.jpg'
import Img2 from '../../../public/Destinations2.jpg'
import Img3 from '../../../public/Destinations3.jpg'
import Img4 from '../../../public/Destinations4.jpg'
import Img5 from '../../../public/Destinations5.jpg'
import Slider from 'react-slick';
import Image from 'next/image'

const ImageList = [
  {
    id: 1,
    img: Img1,
    display: "w-full h-96",
  },
  {
    id: 2,
    img: Img2,
    display: "w-full h-96 ",
  },
  {
    id: 3,
    img: Img3,
    display: "w-full h-96",
  },
  {
    id: 4,
    img: Img4,
    display: "w-full h-96",
  },
  {
    id: 5,
    img: Img5,
    display: "w-full h-96",
  },
]

const Destinations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className='w-screen h-screen bg-primary/40 dark:bg-quinary/70 dark:text-gray-100 overflow-hidden items-center font-inter'>
      <h1 className='font-bold tracking-widest text-xl lg:text-5xl mx-[1rem] my-[2rem] text-center'>DESTINOS</h1>
      <div className='w-screen h-2/3'>
        <Slider {...settings} className='h-full'>
          {ImageList.map((data, key) => (
            <div key={key} className='w-full p-8'>
              <Image
                src={data.img}
                alt=""
                className={data.display}
              />
              <div className='w-full p-8 bg-gray-100 dark:bg-black'>
                <h1 className='text-2xl font-black tracking-wider'>Chukuto Planet</h1>
                <br></br>
                <p>Lido Poodle</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Destinations;