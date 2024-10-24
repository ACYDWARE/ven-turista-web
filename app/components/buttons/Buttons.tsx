import Link from 'next/link';
import { FaMoon, FaSun, FaGooglePlay, FaRegUser, FaEye } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { TbEyeClosed } from "react-icons/tb";


export const LightMode = () => {
  return (
    <>
      <button className='bg-primary text-black w-12 h-11 rounded-3xl flex flex-col items-center border-black border-solid border-2'>
        <FaSun className='mt-[9px] text-2xl' />
      </button>
    </>
  );
}

export const DarkModeButton = () => {
  return (
    <>
      <button className='bg-primary text-black w-12 h-11 rounded-3xl flex '>
        <FaMoon className='mt-[10px] text-2xl' />
      </button>
    </>
  );
}

export const PlayStoreButton = () => {
  return (
    <>
      <button className='bg-secondary text-black w-[150px] h-11 rounded-3xl hover:scale-110 transition-all duration-[0.3s] dark:bg-[#df2a33]'>
        <h2 className='text-white text-xl font-inter'>Play Store <FaGooglePlay className='inline-block' /></h2>
      </button>
    </>
  );
}

export const LoginButton = () => {
  return (
    <div className='md:block hidden'>
      <Link href="/login"
        className='text-gray-100 dark:text-slate-900 bg-slate-900 dark:bg-gray-100 text-[15px] px-4 py-1.5 rounded-full flex items-center gap-1 group'>
        <span className='group-hover:block hidden transition-all duration-200'>INGRESAR</span>
        <FaRegUser className='cursor-pointer ' />
      </Link>
    </div>
  );
}

export const SearchButton = () => {
  return (
    <>
      <button className='bg-slate-900 dark:bg-gray-100 text-gray-100 dark:text-slate-900 my-2 rounded-full border-gray-100 dark:border-slate-900 border-solid border-2 px-2 py-1.5 '>
        <IoSearch className='inline-block text-[25px]' />
      </button>
    </>
  );
}
// group-hover:[ bg-black text-black w-[200px] h-[50px]]

export const SeeAllButton = () => {
  return (
    <>
      <button className='flex rounded-md hover:scale-110 transition-all duration-[0.3s] dark:border-white group'>
        <div className=' inline-block bg-slate-50 rounded-full w-10 h-10 mr-[-30px] mt-[-2px] z-20'>
          <TbEyeClosed className='hidden sm:inline-block text-3xl mt-1 group-hover:hidden dark:text-black'/>
          <FaEye className='text-3xl mt-1 inline-block sm:hidden group-hover:inline-block dark:text-black' />
        </div>
        <h1 className='inline-block sm:hidden p-1 rounded-md text-white mt-[2px] font-inter font-black text-xl group-hover:inline-block group-hover:[ bg-black w-[180px] h-[35px] dark:bg-quinary ]'>VER TODO</h1>
      </button>
    </>
  );
}

export const ReadMore = () => {
  return (
    <>
      <button className='text-[10px] sm:text-[12px] md:text-[14] lg:text-[17px] text-left uppercase text-gray-950 dark:text-gray-100 font-inter font-semibold hover:scale-110 transition-all duration-[0.3s] '>
        <div className='bg-gray-950 dark:bg-gray-100 text-gray-100 dark:text-gray-950 py-2 px-4 mb-1 rounded-xl'>
          <h1 className='inline-block '>Leer mas</h1>
          <FaAnglesRight className='inline-block ml-2' />
        </div>
      </button>
    </>
  )
}

