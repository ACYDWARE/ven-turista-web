import Image from "next/image";
import Img1 from '../../../public/imgDay1.jpg'
import Img2 from '../../../public/imgDay2.jpg'
import Img3 from '../../../public/imgDay3.jpg'
import Img4 from '../../../public/imgDay4.jpg'
import Img5 from '../../../public/imgDay5.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { SearchButton } from "../buttons/Buttons";

const ImageList = [
  {
    id: 1,
    img: Img1,
    display: "w-screen h-screen dark:hidden",
  },
  {
    id: 2,
    img: Img2,
    display: "w-screen h-screen hidden dark:block",
  },
  {
    id: 3,
    img: Img3,
    display: "w-screen h-screen hidden dark:block",
  },
  {
    id: 4,
    img: Img4,
    display: "w-screen h-screen hidden dark:block",
  },
  {
    id: 5,
    img: Img5,
    display: "w-screen h-screen hidden dark:block",
  },
]

export default function Main() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return <>
    <div className="font-inter w-full">
      {/* La ventana donde el usuario introduce su destino y fecha de llegada */}
      <div className=' flex flex-col items-center inset-72 bg-primary/70 backdrop-blur-md top-[55%] absolute z-20 dark:bg-quinary/70 drop-shadow-md rounded-3xl ml-2  
      left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      w-[80%] h-[340px] sm:h-[380px] lg:h-[250px] lg:p-8'>
        <h1 className='mb-2 mt-6 text-sm sm:text-2xl p-1 bg-white rounded-lg w-[80%] text-center lg:text-4xl lg:h-[30%] font-black tracking-wide'>Bienvenido a Ven-Turista!</h1>
        <div className="flex w-[80%] text-center text-xs lg:text-base  items-center flex-col lg:justify-center lg:flex-row">
          <div><p className="text-white">Ubicación</p><input type="name" className=' mb-1 rounded-lg ml-2 text-center w-[150px] h-[20px] sm:w-[300px] sm:h-[25px] lg:w-[250px]' placeholder="Ingresar Destino" /></div>
          <div><p className="text-white">Fecha de Llegada</p><input type="date" className='mb-1 rounded-lg ml-2 text-center w-[150px] h-[20px] sm:w-[300px] sm:h-[25px] lg:w-[180px]' /></div>
          <div><p className="text-white">Fecha de Salida</p><input type="date" className='mb-1 rounded-lg ml-2 text-center w-[150px] h-[20px] sm:w-[300px] sm:h-[25px] lg:w-[180px]' /></div>
          <div><p className="text-white">Precio</p><input type="name" className='mb-1 rounded-lg ml-2 text-center w-[150px] h-[20px] sm:w-[300px] sm:h-[25px] lg:w-[60px]' placeholder="Min" /></div>
          <div><p className="text-white">Precio</p><input type="name" className='mb-2 lg:mb-1 rounded-lg ml-2 text-center w-[150px] h-[20px] sm:w-[300px] sm:h-[25px] lg:w-[60px]' placeholder="Max" /></div>
        </div>

        {/*Search Button*/}
        <SearchButton />
      </div>
      <div className='z-10 absolute w-screen h-screen bg-primary opacity-25 dark:bg-quinary dark:opacity-25'></div>
      {/* carrousel*/}
      <div className='z-0 relative'>
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
      {/* carrousel*/}
    </div >

  </>
}