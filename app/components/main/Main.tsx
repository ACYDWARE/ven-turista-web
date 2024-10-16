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
    display: "w-screen h-screen darck:hidden",
  },
  {
    id: 2,
    img: Img2,
    display: "w-screen h-screen hidden darck:block",
  },
  {
    id: 3,
    img: Img3,
    display: "w-screen h-screen hidden darck:block",
  },
  {
    id: 4,
    img: Img4,
    display: "w-screen h-screen hidden darck:block",
  },
  {
    id: 5,
    img: Img5,
    display: "w-screen h-screen hidden darck:block",
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
    <div className="font-inter">
      {/* La ventana donde el usuario introduce su destino y fecha de llegada */}
      <div className=' flex flex-col items-center inset-72 bg-primary/70 backdrop-blur-md w-[70%] h-[55%] top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl ml-2 absolute z-20 dark:bg-quinary/70 drop-shadow-md lg:h-[30%] lg:p-8'>
        <h1 className='mb-5 mt-6 text-xl sm:text-2xl  p-1 bg-white rounded-lg w-[50%] text-center lg:text-4xl lg:h-[30%] font-black tracking-wide'>Bienvenido a Ven-Turista!</h1>
        <div className="flex w-[80%] text-center items-center flex-col lg:justify-center lg:flex-row">
          <div><p className="text-white">Ubicación</p><input type="name" className='w-[300px] h-[35px] mb-2 rounded-lg ml-2 text-center lg:w-[200px]' placeholder="Ingresar Destino" /></div>
          <div><p className="text-white">Fecha de Llegada</p><input type="date" className=' w-[300px] h-[35px] mb-2 rounded-lg ml-2 text-center lg:w-[200px]' /></div>
          <div><p className="text-white">Fecha de Salida</p><input type="date" className=' w-[300px] h-[35px] mb-2 rounded-lg ml-2 text-center lg:w-[200px]' /></div>
          <div><p className="text-white">Precio</p><input type="name" className='w-[300px] h-[35px] mb-2 rounded-lg ml-2 text-center lg:w-[50px]' placeholder="Min" /></div>
          <div><p className="text-white">Precio</p><input type="name" className=' w-[300px] h-[35px] mb-2 rounded-lg ml-2 text-center lg:w-[50px]' placeholder="Max" /></div>
        </div>

        {/*Search Button*/}
        <SearchButton />
      </div>
      {/* La ventana donde el usuario introduce su destino y fecha de llegada */}
      <div className='z-10 absolute w-[100%] h-[100%] bg-primary opacity-25 dark:bg-quinary dark:opacity-25'></div>
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