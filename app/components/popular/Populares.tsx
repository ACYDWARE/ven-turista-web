import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { SeeAllButton } from '../buttons/Buttons'
import Img1 from '../../../public/imgDay1.jpg'
import Img2 from '../../../public/imgDay2.jpg'
import Img3 from '../../../public/imgDay3.jpg'
import Img4 from '../../../public/imgDay4.jpg'
import Img5 from '../../../public/imgDay5.jpg'
import { useState } from 'react';
import { FaStar } from "react-icons/fa6";

let sitios = [{
  nombre: 'Avila',
  img: Img1,
  points: 4,
},
{
  nombre: 'La guaira',
  img: Img2,
  points: 3,
},
{
  nombre: 'Zona Colonial',
  img: Img3,
  points: 5,
},
{
  nombre: 'Rio',
  img: Img4,
  points: 2,
},
{
  nombre: 'Petare',
  img: Img5,
  points: 1,
}]
let starsFull = <FaStar className='text-quaternary'/>;
let starsNone = <FaStar className='text-black'/>;

console.log(sitios[2].points);

const Ranking = (number: { nombre: string; img: StaticImageData; points: number }[]) => {
  return number.map((item, index) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < item.points) {
        stars.push(starsFull);
      } else {
        stars.push(starsNone);
      }
    }
    return (
      <div key={index} className="flex items-center">
        <div>{item.nombre}</div>
        <div className="flex">{stars}</div>
      </div>
    );
  });
};

let prueba = Ranking(sitios);

const Populares = () => {
  return (
    <div className='font-inter w-screen h-screen bg-primary/20 dark:bg-quinary/85 dark:text-gray-100 overflow-hidden flex flex-col items-center'>
      <h1 className='mt-8 font-bold tracking-widest text-xl lg:text-5xl mx-[1rem] mb-[1rem] text-justify'>POPULARES</h1>
      <div className='container flex flex-wrap'>
        <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px] relative group cursor-pointer'>
          <Image src="/imgDay1.jpg" alt="img" width={0} height={0} className='w-full h-[80%] object-cover' />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-500">
            <p className=" opacity-0 group-hover:opacity-100 transition-opacity duration-500">{prueba}</p>
          </div>
          </div>
        {/* <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px]'><Image src="/imgDay2.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px]'><Image src="/imgDay3.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px]'><Image src="/imgDay4.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px]'><Image src="/imgNight1.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px]'><Image src="/imgNight2.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px]'><Image src="/imgNight3.jpg" alt="img" width={0} height={0} className='w-full h-full' /></div>
        <div className='bg-black w-[300px] h-[150px] sm:w-[150px] mx-[50px] my-[30px]'><Image src="/imgNight4.jpeg" alt="img" width={0} height={0} className='w-full h-full' /></div> */}
      </div>
      <SeeAllButton />
    </div>
  )
}

export default Populares
