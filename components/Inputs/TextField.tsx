import React, { Fragment } from "react";
import { InputProps } from "@/lib/type";
import { useFormContext } from "react-hook-form";
import Fade from "../Transitions/Fade";
import { twMerge } from "tailwind-merge";

const TextField: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  name,
}) => {
  const { register, formState } = useFormContext();
  const { errors } = formState || {};

  return (
    <div className="flex flex-col">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...register(name)}
        className={twMerge(
          "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
          errors[name] ? "border-red-500" : ""
        )}
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
      />
      <Fade show={!!errors[name]}>
        <p className="text-red-500 text-xs italic">
          {errors[name]?.message?.toString()}
        </p>
      </Fade>
    </div>
  );
};

export default TextField;
