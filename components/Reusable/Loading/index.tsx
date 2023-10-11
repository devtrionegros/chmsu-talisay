import React from "react";
const LoadingComponent = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-red-500 rounded-full";
  return (
    <div className="h-screen flex justify-center items-center space-x-1 ">
      <p className="font-bold animate-bounce">Loading please wait</p>
      <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export default LoadingComponent;
