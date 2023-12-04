import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FadeProps } from "@/lib/type";
import { twMerge } from "tailwind-merge";

const Fade = ({ children, show, closeStyle = true }: FadeProps) => {
  return (
    <div className="mt-2">
      <Transition
        as={Fragment}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave={twMerge(
          "transition-opacity duration-500",
          !closeStyle && "duration-100"
        )}
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={show} // Show error message with fade-in effect when there's an error
      >
        {children}
      </Transition>
    </div>
  );
};

export default Fade;
