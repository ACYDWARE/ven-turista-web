import Image from "next/image";
import Img1 from '../../../public/avila.jpg'
import Img2 from '../../../public/avilaNight.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
]

export default function Main() {

  var settings = {
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
    <div>
      {/* La ventana donde el usuario introduce su destino y fecha de llegada */}
      <div className=' flex flex-col items-center justify-center inset-72 bg-slate-600 w-[50%] h-[200px] left-[25%] rounded-3xl ml-2 absolute z-20'>
        <h1 className='mb-5 mt-6 text-5xl p-1 bg-white rounded-lg w-[80%] text-center h-[60px] font-black'>Bienvenido a Ven-Turista!</h1>
        <div className="flex text-center">
          <div><p className="text-white">Ubicación</p><input type="name" className='w-[200px] h-[35px] rounded-lg ml-2' placeholder="Ingresar Destino" /></div>
          <div><p className="text-white">Fecha de Llegada</p><input type="date" className='w-[200px] h-[35px] rounded-lg ml-2' /></div>
          <div><p className="text-white">Fecha de Salida</p><input type="date" className='w-[200px] h-[35px] rounded-lg ml-2' /></div>
          <div><p className="text-white">Precio</p><input type="name" className='w-[100px] h-[35px] rounded-lg ml-2' placeholder="Min" /></div>
          <div><p className="text-white">Precio</p><input type="name" className='w-[100px] h-[35px] rounded-lg ml-2' placeholder="Max" /></div>
        </div>
        <button>Buscar</button>
      </div>
      {/* La ventana donde el usuario introduce su destino y fecha de llegada */}
      <div className='z-10 absolute w-[100%] h-[100%] bg-primary opacity-55 dark:bg-quinary'></div>
      {/* carrousel*/}
      <div className='z-0 relative'>
        <Slider {...settings}>

          {ImageList.map((data) => (
            <div>
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