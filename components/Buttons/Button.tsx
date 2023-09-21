import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  className?: string;
}
const Button = ({ className, name }: ButtonProps) => {
  return (
    <div
      className={twMerge(
        "text-center border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline",
        className
      )}
    >
      {name}
    </div>
  );
};

export default Button;
