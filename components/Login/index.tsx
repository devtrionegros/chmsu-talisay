"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { UserObject } from "@/lib/type";
import toast from "react-hot-toast";
import { TbLoader2 } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const LoginComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!cred.email && !cred.password) {
        return toast.success(`Username or password is empty`);
      }
      const result = await signIn("credentials", {
        redirect: false,
        ...cred,
      });

      if (result?.status === 200 && result?.error === null) {
        const session = (await getSession()) as UserObject;

        if (session) {
          toast.success(`Welcome ${session.user.email}`);
          router.push(`${session.user.role.roleType}/dashboard`);
        }
      }
      if (result?.status === 200 && result.error === "Something went wrong") {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      toast.loading("Something went wrong");
    } finally {
      setLoading(false);
    }
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
              onChange={(e) => setCred({ ...cred, email: e.target.value })}
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
              onChange={(e) => setCred({ ...cred, password: e.target.value })}
            />
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className={twMerge(
                "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
                !loading && "hover:bg-indigo-500",
                loading && "bg-indigo-300 cursor-not-allowed"
              )}
            >
              <div className="flex item-center justify-center gap-2">
                <p> Sign in</p>
                {loading && (
                  <TbLoader2 className="h-4 w-4 animate-spin text-center mt-1" />
                )}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
