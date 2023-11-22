import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex">
        <div
          className="w-20 h-20 rounded-full animate-spin
                    border-8 border-solid border-purple-500 border-t-transparent shadow-md"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
