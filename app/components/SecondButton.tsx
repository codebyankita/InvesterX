// app/components/SecondaryButton.tsx
import React from 'react';

interface SecondaryButtonProps {
  text: string;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-[#d8dbe9]] text-gray-800 px-6 py-3 text-lg  rounded-full hover:bg-custom-blue hover:text-white  transition-all duration-500 hover:scale-80 hover:translate-y-[-3px] hover:shadow-lg
       sm:px-4 sm:py-2 sm:text-base  // Small screen size adjustments
        md:px-5 md:py-3 md:text-md // Medium screen size adjustments
        lg:px-6 lg:py-3 lg:text-lg" // Large screen size (already existing behavior)
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
