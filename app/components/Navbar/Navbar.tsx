import React from 'react'
import DarkMode from './DarkMode';
import { FaBars } from "react-icons/fa";
import Link from 'next/link';

const MenuNav = [
    {
        id: 1,
        name: 'Hogar',
        link: '/#',
    },
    {
        id: 2,
        name: 'Populares',
        link: '/#',
    },
    {
        id: 3,
        name: 'Destinos',
        link: '/#',
    },
    {
        id: 4,
        name: 'Blog',
        link: '/#',
    },
    {
        id: 5,
        name: 'Contacto',
        link: '/#',
    },
]

interface Props {
    openNav: () => void;
}

const Navbar = ({openNav}:Props) => {
    
  return (
    <div className='w-[100%] fixed z-[10000] top-0 dark:text-gray-100 shadow-lg '>
        <div className='py-4 bg-primary dark:bg-quinary '>
            <div className='container font-inter'>
                {/*Logo & links*/}
                <div className='flex items-center justify-between'>
                    <a href="#"
                    className='font-bold tracking-widest text-2xl uppercase sm:text-3xl mx-[1rem] '
                    >
                        LOGO
                    </a>
                    {/*Menu*/}
                    <div className='hidden lg:block md:mx-auto md:w-auto md:h-auto md:gap-1 md:text-[10px] '>
                        <ul className='flex gap-4'>
                            <div className='nav-menu'>
                                <Link href={'/#'}>Hogar</Link>
                            </div>
                            <div className='nav-menu'>
                                <Link href={'/#'}>Populares</Link>
                            </div>
                            <div className='nav-menu'>
                                <Link href={'/#'}>Destinos</Link>
                            </div>
                            <div className='nav-menu'>
                                <Link href={'/#'}>Blog</Link>
                            </div>
                            <div className='nav-menu'>
                                <Link href={'/#'}>Contacto</Link>
                            </div>
                        </ul>
                    </div>
                    {/*Login*/}
                    <div className='grid grid-cols-2'>
                        <button className='font-bold uppercase mx-auto my-auto bg-gray-300 dark:bg-black dark:bg-gray-gray-950 border-black dark:border-white border-[2px] rounded-full py-1 px-3 hover:scale-110 duration-200 md:block hidden'>Ingresar</button>
                        {/*DarkMode Switch*/}
                        <div className='mx-auto my-auto'>
                            <DarkMode/>
                        </div>
                        {/*Burguer*/}
                        <div onClick={openNav}>
                            <FaBars className='mx-[1rem] w-[2rem] md:hidden h-[2rem] cursor-pointer dark:text-white '/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar