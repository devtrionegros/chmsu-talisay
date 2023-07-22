import Image from 'next/image'
import React from 'react'


const UserLogin = () => {
  return (
    <div className='wrapper flex justify-center items-center min-h-screen  ' style={{

    }}>
        <div className="absolute inset-0 ">
            <Image 
                src="/background.jpg"
                alt='background image'
                fill
      quality={100}
      sizes="100vw"
      style={{
        objectFit: 'cover',
        background: 'no-repeat',
      }}
            />
        </div>
        <header className="fixed top-0 left-0 w-full flex justify-between items-center py-5 px-14 z-50">
        <img className="h-12 max-w-full relative text-white select-none pl-4 text-sm" src="./chmsus.webp"/>
        <nav className="navigation"> 
            <button className="btnLogin-popup w-24 h-10 bg-transparent rounded-md cursor-pointer text-white ml-10 border-2 border-[#fff]-600 outline-none text-sm font-bold transition bg-[#fff]">Login</button>
        </nav> 
    </header>
        <div className="wrapper relative w-[45vh] h-[45vh] bg-opacity-0  border-2 border-solid border-white border-opacity-50 rounded-[20px] backdrop-blur-[2px] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex justify-center items-center overflow-hidden">
                    tester
        </div>
    </div>
  )
}


export default UserLogin

