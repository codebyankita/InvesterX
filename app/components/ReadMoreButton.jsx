// // components/ReadMoreButton.jsx
// import React, { useState } from 'react';
// import { GoArrowRight } from 'react-icons/go';

// const ReadMoreButton = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Handle mouse hover effect
//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <a
//       href="#"
//       className={`text-black flex items-center font-semibold group transition-all duration-300 ${isHovered ? 'text-blue-500' : ''}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <span className="text-lg hover:text-blue-500">Read more</span>
//       <GoArrowRight
//         className={`ml-2 transform transition-all duration-300 ${isHovered ? 'translate-x-2 text-blue-500' : ''}`}
//       />
//     </a>
//   );
// };

// export default ReadMoreButton;
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const ReadMoreButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse hover effect
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button */}
      <div
        className={`text-black flex items-center font-semibold group transition-all duration-300 
        ${
          isHovered ? "text-blue-500 cursor-not-allowed" : "cursor-not-allowed"
        }`}
      >
        <span className="text-lg">Read more</span>
        <GoArrowRight
          className={`ml-2 transform transition-all duration-300 ${
            isHovered ? "translate-x-2 text-blue-500" : ""
          }`}
        />
      </div>
      {/* Popup */}
      {isHovered && (
        <div
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-white text-sm 
          rounded-md opacity-100 shadow-lg transition-opacity duration-300 pointer-events-none"
        >
          Upcoming
        </div>
      )}
    </div>
  );
};

export default ReadMoreButton;
