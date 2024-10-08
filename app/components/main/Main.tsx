export default function Main() {
  return <>
    <div>

      <div className='flex flex-col items-center w-[100%] h-[800px] font-inter'>
        <div className='flex flex-col items-center absolute inset-72 bg-slate-600 w-[900px] h-[200px] left-[30%] rounded-lg ml-2'>
          <h1 className='mb-5 mt-6 text-5xl bg-white rounded-lg w-[350px] text-center h-[60px]'>Bienvenidos</h1>
          <div className="flex text-center">
            <div><p className="text-white">Ubicación</p><input type="name" className='w-[200px] h-[35px] rounded-lg ml-2' placeholder="Ingresar Destino" /></div>
            <div><p className="text-white">Fecha de Llegada</p><input type="date" className='w-[200px] h-[35px] rounded-lg ml-2' /></div>
            <div><p className="text-white">Fecha de Salida</p><input type="date" className='w-[200px] h-[35px] rounded-lg ml-2' /></div>
            <div><p className="text-white">Precio</p><input type="name" className='w-[100px] h-[35px] rounded-lg ml-2' placeholder="Min" /></div>
            <div><p className="text-white">Precio</p><input type="name" className='w-[100px] h-[35px] rounded-lg ml-2' placeholder="Max" /></div>
          </div>
          <button>Buscar</button>
        </div>
        <div className='bg-slate-600 w-[100%] flex flex-wrap mt-[100px] '>
          <div className='box flex flex-wrap'>
            <div className='boxA bg-amber-400'></div>
            <div className='boxA bg-amber-400'></div>
            <div className='boxA bg-amber-400'></div>
            <div className='boxA bg-amber-400'></div>
          </div>
          <div className='box flex flex-wrap'>
            <div className='boxB bg-red-300'></div>
            <div className='boxB bg-red-300'></div>
            <div className='boxB bg-red-300'></div>
            <div className='boxB bg-red-300'></div>
            <div className='boxB bg-red-300'></div>
            <div className='boxB bg-red-300'></div>
            <div className='boxB bg-red-300'></div>
            <div className='boxB bg-red-300'></div>
          </div>
          <div className='box  flex flex-wrap'>
            <div className='boxC bg-green-500'></div>
            <div className='boxC bg-green-500'></div>
            <div className='boxC bg-green-500'></div>
            <div className='boxC bg-green-500'></div>
            <div className='boxC bg-green-500'></div>
            <div className='boxC bg-green-500'></div>
          </div>
          <div className='box  flex flex-wrap'>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
            <div className='boxD bg-rose-700'></div>
          </div>
        </div>
      </div>
    </div >
  </>
}