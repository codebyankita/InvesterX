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
      className="border border-[#d8dbe9]] text-gray-800 px-6 py-3 rounded-full hover:bg-custom-blue hover:text-white"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
