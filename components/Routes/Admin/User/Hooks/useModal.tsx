import React from "react";

const UseModal = (setIsopen: React.Dispatch<React.SetStateAction<boolean>>) => {
  const openModal = () => {
    setIsopen(true);
  };

  const closeModal = () => {
    setIsopen(false);
  };

  return {
    openModal,
    closeModal,
  };
};

export default UseModal;
