import React from 'react'
import Img1 from '../../../public/Destinations1.jpg'
import Img2 from '../../../public/Destinations2.jpg'
import Img3 from '../../../public/Destinations3.jpg'
import Img4 from '../../../public/Destinations4.jpg'
import Img5 from '../../../public/Destinations5.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

const ImageList = [
  {
    id: 1,
    img: Img1,
    display: "bg-white ",
  },
  {
    id: 2,
    img: Img2,
    display: "bg-white",
  },
  {
    id: 3,
    img: Img3,
    display: "bg-white",
  },
  {
    id: 4,
    img: Img4,
    display: "bg-white",
  },
  {
    id: 5,
    img: Img5,
    display: "bg-white",
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
    <div className='w-screen h-screen inline-block bg-primary/40 dark:bg-quinary/70 dark:text-gray-100 overflow-hidden items-center'>
      <h1 className='font-bold tracking-widest text-xl lg:text-5xl mx-[1rem] my-[2rem] text-center'>DESTINOS</h1>
      <div className='w-screen h-1/2 inline-block'>
        <Slider {...settings}>
          {ImageList.map((data, key) => (
            <div key={key}>
              <Image
                src={data.img}
                alt=""
                className={data.display}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Destinations;