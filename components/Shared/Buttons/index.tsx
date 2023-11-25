import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  className,
  name,
  type,
  onClick,
  children,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        "text-center border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline",
        className,
        disabled && "bg-indigo-300 cursor-not-allowed hover:bg-indigo-300"
      )}
    >
      {name}
      {children}
    </button>
  );
};

export default Button;
