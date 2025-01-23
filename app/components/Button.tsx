import { FC } from "react";
import { GoArrowRight } from "react-icons/go"; // You can install react-icons if needed

interface ButtonProps {
  text: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="flex items-center justify-center px-6 py-3 bg-custom-blue text-white rounded-full text-lg font-semibold group hover:bg-[#474b64] transition-all duration-500 hover:scale-80 hover:translate-y-[-3px] hover:shadow-lg 
        sm:px-4 sm:py-2 sm:text-base  // Small screen size adjustments
        md:px-5 md:py-3 md:text-md // Medium screen size adjustments
        lg:px-6 lg:py-3 lg:text-lg" // Large screen size (already existing behavior)
    >
      {text}
      <GoArrowRight className="ml-2 sm:ml-1 transform group-hover:translate-x-2 transition-all duration-300" />
    </a>
  );
};

export default Button;
