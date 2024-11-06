import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { SeeAllButton } from '../buttons/Buttons';
import { FaStar } from 'react-icons/fa';
import Img1 from '../../../public/imgDay1.jpg';
import Img2 from '../../../public/imgDay2.jpg';
import Img3 from '../../../public/imgDay3.jpg';
import Img4 from '../../../public/imgDay4.jpg';
import Img5 from '../../../public/imgDay5.jpg';
import Img7 from '../../../public/imgNight2.jpg';
import Img8 from '../../../public/imgNight3.jpg';
import Img9 from '../../../public/imgNight4.jpeg';

// Define el tipo de sitio para mejor verificación de tipos
type Site = {
  nombre: string;
  img: StaticImageData;
  points: number;
};

// Array de sitios
const sitios: Site[] = [
  { nombre: 'Avila', img: Img1, points: 4 },
  { nombre: 'La guaira', img: Img2, points: 3 },
  { nombre: 'Zona Colonial', img: Img3, points: 5 },
  { nombre: 'Rio', img: Img4, points: 2 },
  { nombre: 'Petare', img: Img5, points: 1 },
  { nombre: 'Catatumbo', img: Img7, points: 3 },
  { nombre: 'Parque central', img: Img8, points: 5 },
  { nombre: 'Montañas', img: Img9, points: 2 },
];

// Función para renderizar estrellas
const renderStars = (points: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < points ? <FaStar key={i} className='text-tertiary' /> : <FaStar key={i} className='text-black' />);
  }
  return stars;
};

// Componente de Ranking
const Ranking = (number: Site[], showAll: boolean) => {
  const visibleSites = showAll ? number : number.slice(0, 3);
  return visibleSites.map((item, index) => (
    <div key={index} className="flex items-center w-[100%] sm:w-[250px] mx-[20px]">
      <div className='w-screen h-[150px] sm:w-[100%] sm:h-[250px] group relative cursor-pointer'>
        <Image src={item.img} alt={item.nombre} className='w-[100%] h-[80%] object-cover rounded-2xl' />
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black dark:bg-opacity-0  bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-500 h-[120px] sm:h-[200px] rounded-2xl">
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xl font-black">
            {item.nombre}
          </p>
        </div>
        <div className="flex justify-center w-[100%] text-xl">{renderStars(item.points)}</div>
      </div>
    </div>
  ));
};

// Componente principal
const Populares = () => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowAll(window.innerWidth >= 640);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='font-inter w-screen h-[800px] sm:h-full sm:py-7 bg-gradient-to-b from-primary to-secondary dark:bg-gradient-to-b dark:from-quinary dark:to-quaternary dark:text-gray-100 overflow-hidden flex flex-col items-center mt-[-6px]'>
      <h1 className='title'>POPULARES</h1>
      <div className='container flex flex-wrap justify-center items-center'>
        {Ranking(sitios, showAll)}
      </div>
      <div className='py-[2rem]'>
        <SeeAllButton />
      </div>
    </div>
  );
};

export default Populares;
