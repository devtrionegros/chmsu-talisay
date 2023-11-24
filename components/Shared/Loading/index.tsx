import React from "react";
import { TbLoader2 } from "react-icons/tb";
const LoadingComponent = () => {
  return (
    <div className="h-full flex justify-center items-center space-x-1 ">
      <TbLoader2 className="h-20 w-20 animate-spin" />
    </div>
  );
};

export default LoadingComponent;
