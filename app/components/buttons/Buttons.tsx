import { FaMoon, FaSun, FaGooglePlay, FaRegUser, FaEye } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';

// interface BotonesProps {
//   children: React.ReactNode;
// }

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
      <button
        className='text-gray-100 dark:text-slate-900 bg-slate-900 dark:bg-gray-100 text-[15px] px-4 py-1.5 rounded-full flex items-center gap-1 group'>
        <span className='group-hover:block hidden transition-all duration-200'>INGRESAR</span>
        <FaRegUser className='cursor-pointer ' />
      </button>
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

export const SeeAllButton = () => {
  return (
    <>
      <button className='flex bg-black text-black w-[200px] h-[50px] rounded-md hover:scale-110 transition-all duration-[0.3s] border-black border-solid border-2 dark:bg-quinary dark:border-white'>
        <div className=' inline-block bg-slate-50 rounded-full w-14 h-14 ml-[-30px] mt-[-5px]'>
          <FaEye className='inline-block text-4xl mt-2' />
        </div>
        <h1 className='inline-block text-white ml-[30px] mt-[8px] font-inter font-black text-xl'>VER TODO</h1>
      </button>
    </>
  );
}



// export const Lightmode = ({ children }: BotonesProps) => {
//   return (
//     <>
//       <button className='bg-black text-white w-8 h-6 '>
//         {children}
//       </button>
//     </>
//   );
// }
