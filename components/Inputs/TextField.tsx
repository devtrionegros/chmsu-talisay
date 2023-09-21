import React from "react";
import { InputProps } from "@/lib/type";

const TextField: React.FC<InputProps> = ({
  type,
  label,
  placeholder,
  name,
}) => {
  return (
    <div className="flex flex-col">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </div>
  );
};

export default TextField;
