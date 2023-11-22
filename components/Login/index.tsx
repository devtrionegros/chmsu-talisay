"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FcFeedback, FcLock } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { TextField } from "../Shared";
import { twMerge } from "tailwind-merge";
import { signIn } from "next-auth/react";

const LoginComponent = () => {
  const router = useRouter();

  const [cred, setCred] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false, // Do not redirect, handle the result yourself
     ...cred
    });
    console.log(result);
    
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image height={150} width={150} alt="logo" src="/logo.svg" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 capriola" onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setCred({...cred, email: e.target.value})}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="Email"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder="Password"
              name="Password"
              onChange={(e) => setCred({...cred, password: e.target.value})}
            />
          </div>


          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
