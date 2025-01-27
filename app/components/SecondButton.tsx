// // app/components/SecondaryButton.tsx
// import React from 'react';

// interface SecondaryButtonProps {
//   text: string;
//   onClick?: () => void;
// }

// const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="border border-[#d8dbe9]] text-gray-800  rounded-full hover:bg-custom-blue hover:text-white  transition-all duration-500 hover:scale-80 hover:translate-y-[-3px] hover:shadow-lg
//        px-4 py-2 text-base  // Small screen size adjustments
//         md:px-5 md:py-3 md:text-md // Medium screen size adjustments
//         lg:px-6 lg:py-3 lg:text-lg" // Large screen size (already existing behavior)
//     >
//       {text}
//     </button>
//   );
// };

// export default SecondaryButton;
import React from 'react';

interface SecondaryButtonProps {
  text: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text }) => {
  return (
    <div className="relative group inline-block">
      <button
        className="border border-[#d8dbe9] text-gray-800 rounded-full bg-white hover:bg-custom-blue hover:text-white transition-all duration-500 
        px-4 py-2 text-base md:px-5 md:py-3 md:text-md lg:px-6 lg:py-3 lg:text-lg cursor-not-allowed"
      >
        {text}
      </button>
      {/* Popup */}
      <div
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-white text-sm 
        rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        Upcoming
      </div>
    </div>
  );
};

export default SecondaryButton;
