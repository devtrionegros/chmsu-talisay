import Image from 'next/image'
import React from 'react'
import { FcFeedback , FcLock} from "react-icons/fc";

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
        <Image 
        className="h-12 max-w-full relative text-white select-none pl-4 text-sm" src="/chmsus.webp"
        width={90}
        height={80}
        alt='chmsu logo'
        />
        <nav className="navigation"> 
            <button className="btnLogin-popup w-24 h-10 bg-transparent rounded-md cursor-pointer text-white ml-10 border-2 border-[#fff]-600 outline-none text-sm font-bold transition bg-[#fff]">Login</button>
        </nav> 
    </header>
        <div className="wrapper relative w-[45vh] h-[45vh] bg-opacity-0  border-2 border-solid border-white border-opacity-50 rounded-[20px] backdrop-blur-[2px] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex justify-center items-center overflow-hidden">

 <div className="w-[100%] p-[40px] form-box absolute">
            <h2 className='text-center text-xl text-[#162938] font-bold border-b-2 border-solid border-[#162938]'>Register to Chmsu</h2>
            <form action="#">
                <div className="input-box relative w-full h-16 border-b-2 border-[#162938] my-8">
                    <span className="icon absolute right-2 text-xl text-blue-900 text-center h-14 leading-14">
                        <FcFeedback className='absolute right-0 top-[2.5rem]' />
                    </span>
                    <input type="email" placeholder="."  className='  w-full h-full bg-transparent border-none outline-none text-base text-blue-900 pl-5 pr-0 py-0' required />
                    <label className='absolute top-3/4 left-0 transform -translate-y-1/2 text-base  text-[#162938] font-semibold pointer-events-none'  >Email</label>
                </div>
                <div className="input-box relative w-full h-16 border-b-2 border-[#162938] my-8">
                    <span className="icon absolute right-2 text-xl text-blue-900 text-center h-14 leading-14">
                    <FcLock className='absolute right-0 top-[2.5rem]'/>
                    </span>
                    <input type="password" className=' w-full h-full bg-transparent border-none outline-none text-base text-blue-900 pl-5 pr-0 py-0' required />
                    <label className='absolute top-3/4 left-0 transform -translate-y-1/2 text-base  text-[#162938] font-semibold pointer-events-none'  >Password</label>
                </div>
                <div className="remember-forgot text-sm text-blue-900 font-semibold my-[-15px] flex justify-between">
                    <label><input type="checkbox" className='mr-3 accent-[#162938]' /> Remember me</label>
                    <a href="#" className='hover:underline'>Forgot Password?</a>
                </div>
                <button type="submit" className="btn w-full h-12 bg-[#162938] rounded-lg focus:outline-none cursor-pointer text-base font-semibold text-white mt-[57%]">Login</button>
                <div className="login-register text-sm text-[#162938] text-center font-semibold my-6">
                    <p className='text-blue-900 no-underline font-semibold'>{ "Don't have an account?" }
                        <a  href="#" className="register-link className='text-[#162938] no-underline font-semibold' hover:underline">Register</a>
                    </p>
                </div>
            </form>
        </div>

        </div>
    </div>
  )
}


export default UserLogin

