import React from 'react'
import './LoginPage.css'

export function LoginPage() {
  return (
  <>
  <div className=' '>
    <div className="flex flex-col h-screen md:h-auto  bg-gradient-to-r from-deepblue from-30% to-liteblue to-70% lg:grid lg:grid-flow-col md:mx-40 md:my-20 md:rounded-3xl text-white">
      <img src='/public/images/logoLg.svg' className="self-center min-w-max w-2/5 md:w-1/4  lg:w-3/5  lg:self-center h-auto lg:m-0 m-20 lg:order-2"/>
        <div className="flex md:self-center md:px-5 flex-col m-10 lg:self-start lg:mt-32 ">
            <div className="font-thin ">ENTRA CON TU CUENTA</div>
            <div className="font-bold text-4xl mt-3 mb-4">Login</div>
            <div className="font-thin my-2">
              <label>Email
                <br></br>
                <input type='email' className="bg-gradient-to-r from-liteblue from-20% to-deepblue to-80% rounded-lg border-0 w-full md:max-w-md h-10"/>
              </label>
            </div>
            <div className="font-thin my-2">
            <label>Contraseña
              <br></br>
              <input type='password'className="bg-gradient-to-r from-liteblue from-20% to-deepblue to-80% rounded-lg border-0 md:max-w-md w-full h-10"/>
            </label>
            </div>
          <div className="font-thin m-5 self-center lg:self-start fixed bottom-0 md:static md:mt-20">
          ¿Necesitas una cuenta?&nbsp;
          <a className="text-transparent bg-clip-text bg-gradient-to-r from-orange from-10% to-pink to-90% font-semibold">
            Regístrate
          </a>
          </div>
        </div>
    </div>
  </div>
    <img src='/public/images/VectorRosado.svg' className="hidden lg:block lg:absolute lg:top-0 lg:-z-50 h-4/6"/>
    <img src='/public/images/VectorRosadoSm.svg' className="hidden md:block md:absolute md:top-0 md:-z-50 lg:hidden"/>
    <img src='/public/images/VectorMorado.svg' className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 h-4/6 "/>
    <img src='/public/images/VectorMoradoSm.svg' className="hidden lg:hidden md:block md:absolute md:bottom-0 md:right-0 md:-z-50"/>
  </>
  )
}

