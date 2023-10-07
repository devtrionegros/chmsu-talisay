import { Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FadeProps } from "@/lib/type";

const Fade = ({ children, show }: FadeProps) => {
  return (
    <div className="mt-2">
      <Transition
        as={Fragment}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
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
