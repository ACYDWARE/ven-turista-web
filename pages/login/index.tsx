import React from 'react'

const Login = () => {
  return (
    <div className='bg-primary/50 dark:bg-quinary/50 w-screen h-screen flex justify-center items-center font-inter text-gray-950 dark:text-gray-100 '>
      <div className='bg-gray-100 dark:bg-gray-950 w-[80%] h-[60%] rounded-3xl'>
        {/*TITULO*/}
        <div className='title'>
          <h1>ingreso</h1>
        </div>
        {/*USER & PASSWORD*/}
        <div className='grid grid-cols-1 text-xl font-semibold text-center'>
          <div className='py-[4rem] '>
            <h3>Ingresar Usuario o  Correo</h3>
            <input type="text" />
          </div>
          <div>
            <p>Ingresar Contrasena</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
