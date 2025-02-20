

//app/components/portfolioCard.tsx

import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

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
}) => {
  const router = useRouter(); // Initialize router
  return (
    <div
      onClick={() => router.push(link)} // Navigate to the link when clicked
      className="relative p-4 lg:p-8 my-4 h-96 rounded-2xl border border-solid bg-white text-black group hover:bg-custom-blue hover:text-white transition-all duration-300 flex flex-col "
    >
      {/* Arrow Icon */}
      <div className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white" >
        <MdOutlineArrowOutward size={24} />
      </div>

      {/* Image */}
      <div className="flex justify-center items-center lg:mt-20 mt-16">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={80}
          height={80}
          className="transition-transform group-hover:scale-110 duration-300 overflow-visible rounded-full bg-custom-blue p-4"
        />
      </div>

      {/* Text content */}
      <div className="mt-24 text-left">
        <h3 className="text-xl font-semibold transition-all duration-300 group-hover:text-white">{title}</h3>
        <p className="text-lg text-gray-500 transition-all duration-300 group-hover:text-white">{description} / {year}</p>
      </div>
    </div>
  );
};
export default PortfolioCard;

// import React from "react";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import Image from "next/image";

// interface PortfolioCardProps {
//   title: string;
//   description: string;
//   year: string;
//   icon: string;
// }

// const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, year, icon }) => {
//   return (
//     <div className="relative p-6 lg:p-8 my-4 h-96 rounded-2xl border bg-white text-black group hover:bg-custom-blue hover:text-white transition-all duration-300 flex flex-col cursor-not-allowed">
//       {/* Arrow Icon */}
//       <div
//         className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white"
//         aria-label="External Link"
//       >
//         <MdOutlineArrowOutward size={24} />
//       </div>

//       {/* Image */}
//       <div className="flex justify-center items-center lg:mt-20 mt-16">
//         <Image
//           src={icon}
//           alt={title}
//           width={80}
//           height={80}
//           className="transition-transform group-hover:scale-110 duration-300 overflow-visible rounded-full bg-custom-blue p-4"
//         />
//       </div>

//       {/* Text content */}
//       <div className="mt-24 text-left">
//         <h3 className="text-xl font-semibold transition-all duration-300 group-hover:text-white">{title}</h3>
//         <p className="text-lg text-gray-500 transition-all duration-300 group-hover:text-white">{description} / {year}</p>
//       </div>
//     </div>
//   );
// };

// export default PortfolioCard;
