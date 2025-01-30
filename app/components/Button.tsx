// import { FC } from "react";
// import { GoArrowRight } from "react-icons/go"; // You can install react-icons if needed

// interface ButtonProps {
//   text: string;
//   href: string;
// }

// const Button: FC<ButtonProps> = ({ text,  }) => {
//   return (
//     <a
//       href={href}
//       className="flex items-center justify-center  bg-custom-blue text-white rounded-full  font-semibold group hover:bg-[#474b64] transition-all duration-500 hover:scale-80 hover:translate-y-[-3px] hover:shadow-lg 
//         px-4 py-2 text-base  // Small screen size adjustments
//         md:px-5 md:py-3 md:text-md // Medium screen size adjustments
//         lg:px-6 lg:py-3 lg:text-lg" // Large screen size (already existing behavior)
//     >
//       {text}
//       <GoArrowRight className="ml-2 sm:ml-1 transform group-hover:translate-x-2 transition-all duration-300" />
//     </a>
//   );
// };

// export default Button;
// //app/components/Button.tsx
// import { FC } from "react";
// import { GoArrowRight } from "react-icons/go"; // Ensure you have react-icons installed

// interface ButtonProps {
//   text: string;
// }

// const Button: FC<ButtonProps> = ({ text }) => {
//   return (
//     <div className="relative group">
//       <div
//         className="flex items-center justify-center bg-custom-blue text-white rounded-full font-semibold 
//         hover:bg-[#474b64] transition-all duration-500 px-4 py-2 text-base 
//         md:px-5 md:py-3 md:text-md lg:px-6 lg:py-3 lg:text-lg cursor-not-allowed"
//       >
//         {text}
//         <GoArrowRight className="ml-2 sm:ml-1 transform group-hover:translate-x-2 transition-all duration-300" />
//       </div>
//       {/* Popup */}
//       <span
//         className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-sm  text-white
//         rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//       >
//         Upcoming
//       </span>
//     </div>
//   );
// };

// export default Button;

// app/components/Button.tsx
import { FC } from "react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string; // Optional href prop
}

const Button: FC<ButtonProps> = ({ text, href }) => {
  const buttonContent = (
    <div
      className="flex items-center justify-center bg-custom-blue text-white rounded-full font-semibold 
      hover:bg-[#474b64] transition-all duration-500 px-4 py-2 text-base 
      md:px-5 md:py-3 md:text-md lg:px-6 lg:py-3 lg:text-lg cursor-pointer"
    >
      {text}
      <GoArrowRight className="ml-2 sm:ml-1 transform group-hover:translate-x-2 transition-all duration-300" />
    </div>
  );

  return href ? (
    <Link href={href}>{buttonContent}</Link> // Wrap in Link if href is provided
  ) : (
    <div className="relative group">
      {buttonContent}
      <span
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-sm text-white
        rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        Upcoming
      </span>
    </div>
  );
};

export default Button;

