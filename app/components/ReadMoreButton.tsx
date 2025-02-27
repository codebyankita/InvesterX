// // // components/ReadMoreButton.jsx
// // import React, { useState } from 'react';
// // import { GoArrowRight } from 'react-icons/go';

// // const ReadMoreButton = () => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   // Handle mouse hover effect
// //   const handleMouseEnter = () => setIsHovered(true);
// //   const handleMouseLeave = () => setIsHovered(false);

// //   return (
// //     <a
// //       href="#"
// //       className={`text-black flex items-center font-semibold group transition-all duration-300 ${isHovered ? 'text-blue-500' : ''}`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <span className="text-lg hover:text-blue-500">Read more</span>
// //       <GoArrowRight
// //         className={`ml-2 transform transition-all duration-300 ${isHovered ? 'translate-x-2 text-blue-500' : ''}`}
// //       />
// //     </a>
// //   );
// // };

// // export default ReadMoreButton;
// import React, { useState } from "react";
// import { GoArrowRight } from "react-icons/go";

// const ReadMoreButton = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Handle mouse hover effect
//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <div
//       className="relative group inline-block"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Button */}
//       <div
//         className={`text-black flex items-center font-semibold group transition-all duration-300
//         ${
//           isHovered ? "text-blue-500 cursor-not-allowed" : "cursor-not-allowed"
//         }`}
//       >
//         <span className="text-lg">Read more</span>
//         <GoArrowRight
//           className={`ml-2 transform transition-all duration-300 ${
//             isHovered ? "translate-x-2 text-blue-500" : ""
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// export default ReadMoreButton;
import React from "react";
import { GoArrowDown } from "react-icons/go";

interface ReadMoreButtonProps {
  onClick: () => void;
  expanded: boolean;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  onClick,
  expanded,
}) => {
  return (
    <button
      onClick={onClick}
      className="text-black flex items-center font-semibold group transition-all duration-300 hover:text-blue-500"
    >
      <span className="text-lg">{expanded ? "Read less" : "Read more"}</span>
      <GoArrowDown
        className={`ml-2 transform transition-all duration-300 ${expanded ? "rotate-180 text-blue-500" : ""
          }`}
      />
    </button>
  );
};

export default ReadMoreButton;
