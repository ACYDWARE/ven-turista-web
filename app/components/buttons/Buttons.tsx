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
    <>
      <button className='bg-primary text-black w-16 h-16 rounded-full hover:scale-110 transition-all duration-[0.3s] border-black border-solid border-2 dark:bg-quinary dark:border-white'>
        <FaRegUser className='inline-block text-3xl dark:text-white' />
      </button>
    </>
  );
}

export const SearchButton = () => {
  return (
    <>
      <button className='bg-primary text-black w-16 h-16 rounded-full hover:scale-110 transition-all duration-[0.3s] border-black border-solid border-2 dark:bg-quinary dark:border-white'>
        <IoSearch className='inline-block text-3xl dark:text-white' />
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
