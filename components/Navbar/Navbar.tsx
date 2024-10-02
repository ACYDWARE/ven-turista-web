import React from 'react'
import DarkMode from './DarkMode'

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
        name: 'Nosotros',
        link: '/#',
    },
    {
        id: 5,
        name: 'Contacto',
        link: '/#',
    },
]

const Navbar = () => {
  return (
    <div className='shadow-lg dark:text-gray-100 duration-200 w-[100%] fixed z-[10000]'>
        <div className='py-4 bg-primary dark:bg-quinary '>
            <div className='container font-inter'>
                {/*Logo & links*/}
                <div className='flex justify-between items-center'>
                    <a href="#"
                    className='font-bold tracking-widest text-2xl uppercase sm:text-3xl '
                    >
                        LOGO
                    </a>
                    {/*MENU*/}
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            {
                                MenuNav.map((data, index) => (
                                    <li key={index}>
                                        <a 
                                        href={data.link}
                                        className='nav-menu'
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))
                            }
                            {/*Login*/}
                            <button className='inline-block font-bold text-[14px] uppercase bg-gray-200 dark:bg-gray-950 border-black dark:border-white border-[1.5px] rounded-full py-1 px-3 mx-[0.8rem] hover:scale-110 duration-200 '>Ingresar</button>
                            {/*DarkMode Switch*/}
                            <DarkMode/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar