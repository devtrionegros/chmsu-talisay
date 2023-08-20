"use client";
import Image from "next/image";
import React from "react";
import { FcFeedback, FcLock } from "react-icons/fc";
import { useRouter } from "next/navigation";

const UserLogin = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/authenticated");
  };
  return (
    <div
      className="wrapper flex justify-center items-center min-h-screen bg-[#65F779] "
      style={{}}
    >
      {/* <div className="absolute inset-0 ">
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
        </div> */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center py-5 px-14 z-50">
        <Image
          className="h-12 max-w-full relative text-white select-none pl-4 text-sm"
          src="/chmsus.webp"
          width={80}
          height={80}
          alt="chmsu logo"
        />
        <nav className="navigation">
          <button className="btnLogin-popup w-24 h-10 bg-transparent rounded-md cursor-pointer text-white ml-10 border-2 border-[#162938]-600 outline-none text-sm font-bold transition bg-transparent text-[#162938]">
            Login
          </button>
        </nav>
      </header>
      <div className="wrapper relative w-[51vh] h-[56vh] bg-opacity-0  border-2 border-solid border-white border-opacity-50 rounded-[20px] backdrop-blur-[2px] shadow-[0_0_30px_rgba(0,0,0,0.5)] flex justify-center items-center overflow-hidden  border-[#fff]">
        <div className="w-[100%] p-[60px] form-box absolute">
          <h2 className="text-center text-xl text-[#162938] font-bold border-b-2 border-solid border-[#162938]">
            Register to Chmsu
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box relative w-full h-16 border-b-2 border-[#162938] my-8">
              <span className="icon absolute right-2 text-xl text-blue-900 text-center h-14 leading-14">
                <FcFeedback className="absolute right-0 top-[2.5rem] text-2xl mt-[-2px]" />
              </span>
              <input
                type="email"
                placeholder="."
                className="  w-full h-full  border-none outline-none text-base text-blue-900 pt-[30px] pb-0 pr-0  bg-[transparent]"
                required
              />
              <label className="labelTxt absolute top-3/4 left-0 transform -translate-y-1/2 text-base  text-[#162938] font-semibold pointer-events-none">
                Email
              </label>
            </div>
            <div className="input-box relative w-full h-16 border-b-2 border-[#162938] my-8">
              <span className="icon absolute right-2 text-xl text-blue-900 text-center h-14 leading-14">
                <FcLock className="absolute right-0 top-[2.5rem] text-2xl mt-[-2px]" />
              </span>
              <input
                type="password"
                className=" w-full h-full bg-[transparent] border-none outline-none text-base text-blue-900 pt-[30px] pb-0 pr-0 "
                required
              />
              <label className="labelTxt absolute top-3/4 left-0 transform -translate-y-1/2 text-base  text-[#162938] font-semibold pointer-events-none">
                Password
              </label>
            </div>
            <div className="remember-forgot text-sm text-blue-900 font-semibold  flex justify-between">
              <label>
                <input type="checkbox" className="mr-3 accent-[#162938]" />{" "}
                Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="btn w-full h-12 bg-[#162938] rounded-lg focus:outline-none cursor-pointer text-base font-semibold text-white mt-[10%] text-[#fff]"
            >
              Login
            </button>
            <div className="login-register text-sm text-[#162938] text-center font-semibold my-6">
              <p className="text-blue-900 no-underline font-semibold">
                {"Don't have an account?"}
                <a
                  href="#"
                  className="register-link className='text-[#162938] no-underline font-semibold' hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
