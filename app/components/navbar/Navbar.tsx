import React from 'react'
import DarkMode from './DarkMode';
import { FaBars, FaRegUser } from "react-icons/fa";
import { LoginButton } from '../buttons/Buttons';
import Link from 'next/link';

const MenuNav = [
  {
    id: 1,
    name: 'Hogar',
    link: '/',
  },
  {
    id: 2,
    name: 'Populares',
    link: '/popular',
  },
  {
    id: 3,
    name: 'Destinos',
    link: '/destinations',
  },
  {
    id: 4,
    name: 'Blog',
    link: '/blog',
  },
  {
    id: 5,
    name: 'Contacto',
    link: '/contact',
  },
]

interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

  return (
    <div className='w-[100%] fixed z-[10000] top-0 dark:text-gray-100 shadow-lg '>
      <div className='py-4 bg-primary dark:bg-quinary '>
        <div className='container font-inter'>
          {/*Logo & links*/}
          <div className='flex items-center justify-between'>
            <Link href="/"
              className='font-bold tracking-widest text-2xl uppercase sm:text-3xl mx-[1rem] '
            >
              LOGO
            </Link>
            {/*Menu*/}
            <div className='hidden lg:block md:mx-auto md:w-auto md:h-auto md:gap-1 md:text-[10px] '>
              <ul className='flex gap-4'>
                {MenuNav.map((data, key) =>
                  <li className='nav-menu' key={key}>
                    <Link href={data.link}>{data.name}</Link>
                  </li>
                )}
              </ul>
            </div>
            {/*Login*/}
            <div className='flex justify-between items-center gap-3'>
              {/*<button className='font-bold uppercase mx-auto my-auto bg-gray-300 dark:bg-black dark:bg-gray-gray-950 border-black dark:border-gray-100 border-[2px] rounded-full py-1 px-3 hover:scale-110 duration-200 md:block hidden'>Ingresar</button>*/}
              <LoginButton />
              {/*DarkMode Switch*/}
              <div className='mx-auto my-auto gap-3'>
                <DarkMode />
              </div>
              {/*Burguer*/}
              <div onClick={openNav}>
                <FaBars className='mx-[1rem] w-[2rem] md:hidden h-[2rem] cursor-pointer dark:text-gray-100' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar