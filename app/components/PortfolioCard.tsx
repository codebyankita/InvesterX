import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  year: string;
  icon: string; // Image source URL
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  year,
  icon,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`relative p-9 h-96 rounded-2xl border border-solid bg-white text-black group hover:bg-custom-blue hover:text-white transition-all duration-300 flex flex-col`}
  >
    {/* Arrow Icon */}
    <div className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white">
      <MdOutlineArrowOutward />
    </div>

    {/* Image */}
    <div className="flex justify-center items-center mt-20">
      <Image
        src={icon}
        alt={`${title} icon`}
        width={80} // Adjust the width to match your design
        height={80} // Adjust the height to match your design
        className="transition-all duration-300 grayscale group-hover:grayscale-0"
        priority={true} // Prioritize loading for performance-critical images
      />
    </div>

    {/* Text content */}
    <div className="mt-24 text-left">
      <h3 className="text-xl font-semibold text-black transition-all duration-300 group-hover:text-white">
        {title}
      </h3>
      <p className="text-lg text-gray-500 transition-all duration-300 group-hover:text-white">
        {description} / {year}
      </p>
    </div>
  </a>
);

export default PortfolioCard;
