"use client";

import React from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  className?: string; // For additional customization if needed
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, className }) => {
  const isPrev = direction === "prev";

  return (
    <button
      className={`flex items-center justify-center px-6 py-3 text-black hover:text-white border border-gray-300 hover:bg-blue-600 ${
        isPrev ? "rounded-l-full border-r-0" :  "  rounded-r-full"
      } bg-white ${className || ""}`}
      onClick={onClick}
    >
      {isPrev ? (
        <IoMdArrowBack className="text-xl" />
      ) : (
        <IoMdArrowForward className="text-xl" />
      )}
    </button>
  );
};

export default NavigationButton;
