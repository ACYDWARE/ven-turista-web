import { Begin, ReadMore } from "@/app/components/buttons/Buttons"
import Image from "next/image"

const menuNav = [
  {
    id: 1,
    name: "Guias",
    link: "#",
  },
  {
    id: 2,
    name: "Itinerarios",
    link: "#",
  },
  {
    id: 3,
    name: "Noticias",
    link: "#",
  },
  {
    id: 4,
    name: "Testimonios",
    link: "#",
  },
  {
    id: 5,
    name: "Consejos",
    link: "#",
  },
]

export default function Blog() {
  return <>
    {/*Lower Navbar*/}
    <div className="w-[100%] mt-[4rem] bg-primary/80 py-2.5 font-inter font-medium">
      <div className="flex justify-center">
        <ul className="flex justify-between items-center">
          {menuNav.map((data) => (
            <li key={data.id}>
              <a href={data.link}
                className='inline-block px-2 sm:px-3 md:px-5 py-1 hover:text-tertiary hover:scale-110 duration-200 text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg-[2rem]'>{data.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    {/*Hero*/}
    <div style={{ backgroundColor: '#fff8', backgroundImage: `url(${"/blog_hero.jpg"})`, backgroundBlendMode: 'lighten' }} className="font-inter text-stone-950 dark:text-gray-100 flex flex-col items-center justify-center text-center bg-cover h-screen "
    >
      <h1 className="mx-[4rem] text-[2.1rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] font-bold ">Ven-Turista, descubre la aventura de tu vida.</h1>
      <h3 className="mx-[5rem] my-[3rem] text-stone-700 text-[1.1rem] sm:text-[1.5rem] md:text-[1.6rem] lg:text-[2rem] ">Desde playas paradisiacas hasta ciudades inolvidables. Explora Venezuela con toda la informacion que tenemos preparada para ti!</h3>
      <Begin />
    </div>
    {/*CONTENT*/}
    <div className="bg-gradient-to-br from-primary to-secondary /70 dark:from-quinary/85 dark:to-quinary font-inter text-stone-950 dark:text-gray-100 h-auto flex flex-col items-center justify-center">
      {/*Guias*/}
      <div>
        <h1 className="title">Guias </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:cols-2">
          <div className="text-center mx-auto my-auto w-[70%] ">
            <h3 className="subtitle">
              No sabes como llegar a tu destino favorito?
            </h3>
            <p className="text-left py-[3rem]">
              Preparate para la aventura de tu vida! Encuentra las mejores rutas, consejos y recomendaciones en nuestras guias de viaje. Comienza a explorar ahora!
            </p>
            <ReadMore />
          </div>
          <div className="mx-auto my-auto py-[2rem] ">
            <Image
              src="/Blog/doubt.png"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      {/*Itinerarios*/}
      <h1 className="title">Itinerarios</h1>
      {/*Noticias*/}
      <h1 className="title">Noticias</h1>
      {/*Testimonios*/}
      <h1 className="title">Testimonios</h1>
      {/*Consejos*/}
      <h1 className="title">Consejos</h1>
    </div>
  </>
}