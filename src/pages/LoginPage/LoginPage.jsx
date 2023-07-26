import React from 'react'
import './LoginPage.css'

export function LoginPage() {
  return (
  <>
  <div className=' '>
    <div className="flex flex-col h-screen md:h-auto  bg-gradient-to-r from-deepblue from-30% to-liteblue to-70% lg:grid lg:grid-flow-col md:mx-40 md:my-20 md:rounded-3xl text-white">
      <img src='https://firebasestorage.googleapis.com/v0/b/finatest-3f1ee.appspot.com/o/logoLg.svg?alt=media&token=5ea92dce-0a78-4055-86c3-54584fc6cc7d' className="self-center min-w-max w-2/5 md:w-1/4  lg:w-3/5  lg:self-center h-auto lg:m-0 m-20 lg:order-2"/>
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
    <img src='https://firebasestorage.googleapis.com/v0/b/finatest-3f1ee.appspot.com/o/VectorRosado.svg?alt=media&token=063e6abb-d428-4c0f-92cc-ca879af8b2d1' className="hidden lg:block lg:absolute lg:top-0 lg:-z-50 h-4/6"/>
    <img src='https://firebasestorage.googleapis.com/v0/b/finatest-3f1ee.appspot.com/o/VectorRosadoSm.svg?alt=media&token=49fff031-c610-42f8-8778-86dd791c6e04' className="hidden md:block md:absolute md:top-0 md:-z-50 lg:hidden"/>
    <img src='https://firebasestorage.googleapis.com/v0/b/finatest-3f1ee.appspot.com/o/VectorMorado.svg?alt=media&token=ed99ba8e-0c92-488e-bad3-18119252324f' className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0 h-4/6 "/>
    <img src='https://firebasestorage.googleapis.com/v0/b/finatest-3f1ee.appspot.com/o/VectorMoradoSm.svg?alt=media&token=155d6780-d54a-4de0-b9d1-7870e057ba85' className="hidden lg:hidden md:block md:absolute md:bottom-0 md:right-0 md:-z-50"/>
  </>
  )
}

