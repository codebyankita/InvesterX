// // // app/components/PortfoliopageCard.tsx

// 'use client'
// import React, { useState } from "react";
// import Image from "next/image";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import Link from "next/link";

// interface PortfoliopageCardProps {
//     id: string;
//     image: string;
//     title: string;
//     category: string;
//     year: string;
// }

// const PortfoliopageCard: React.FC<PortfoliopageCardProps> = ({
//     id,
//     image,
//     title,
//     category,
//     year,
// }) => {
//     const [isHovered, setIsHovered] = useState(false);
//     const [isClicked, setIsClicked] = useState(false); // Track if clicked

//     // Handle mouse hover effect
//     const handleMouseEnter = () => setIsHovered(true);
//     const handleMouseLeave = () => setIsHovered(false);

//     // Handle click event to disable further clicks
//     const handleClick = () => {
//         if (!isHovered) {
//             setIsClicked(true);
//         }
//     };

//     return (
//         <div
//             className={`bg-white border rounded-2xl py-12 text-center relative transition-all duration-300 group hover:border-2 hover:border-blue-500 hover:shadow-lg transform hover:scale-95 ${isClicked ? 'pointer-events-none' : ''}`}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//         >
//             {/* "Upcoming" Gradient on Hover */}
//             {isHovered && !isClicked && (
//                 <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white font-bold text-lg py-2 text-center rounded-t-2xl">
//                     Upcoming
//                 </div>
//             )}
//             <div className="absolute top-4 right-4 text-gray-500 transition-colors duration-300 group-hover:text-blue-500">
//                 <MdOutlineArrowOutward size={24} />
//             </div>
//             {/* Centered Image with gray background and transition on hover */}
//             <div className="flex justify-center items-center mx-auto w-30 h-30 group ">
//                 <Image
//                     className="rounded-full transform transition-transform m-4 overflow-visible p-4 bg-gray-400  hover:bg-blue-500 duration-300 group-hover:scale-110"
//                     src={image}
//                     alt={`Portfolio of ${title}`}
//                     width={80}
//                     height={80}
//                 />
//             </div>
//             {/* Title and Category */}
//             <div className="mt-12 text-left mx-4">
//                 <h2 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-500">
//                     {title}
//                 </h2>
//                 <p className="text-gray-500 text-lg">{category} / {year}</p>
//             </div>
//             {/* Only clickable if not hovered and not clicked */}
//             {!isClicked && !isHovered && (
//                 <Link href={`/portfolio/${id}`} onClick={handleClick}>
//                     {/* This Link component will now only work if not hovered and not clicked */}
//                 </Link>
//             )}
//         </div>
//     );
// };

// export default PortfoliopageCard;
'use client'
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

interface PortfoliopageCardProps {
    id: string;
    image: string;
    title: string;
    category: string;
    year: string;
}

const PortfoliopageCard: React.FC<PortfoliopageCardProps> = ({
    id,
    image,
    title,
    category,
    year,
}) => {
    return (
        <Link href={`/portfolio/${id}`}>
            <div
                className="bg-white border rounded-2xl py-12 text-center relative transition-all duration-300 group hover:border-2 hover:border-blue-500 hover:shadow-lg transform hover:scale-95"
            >
                <div className="absolute top-4 right-4 text-gray-500 transition-colors duration-300 group-hover:text-blue-500">
                    <MdOutlineArrowOutward size={24} />
                </div>
                {/* Centered Image with gray background and transition on hover */}
                <div className="flex justify-center items-center mx-auto w-30 h-30 group">
                    <Image
                        className="rounded-full m-4 overflow-visible p-4   bg-blue-500"
                        src={image}
                        alt={`Portfolio of ${title}`}
                        width={80}
                        height={80}
                    />
                </div>
                {/* Title and Category */}
                <div className="mt-12 text-left mx-4">
                    <h2 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-500">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-lg">{category} / {year}</p>
                </div>
            </div>
        </Link>
    );
};

export default PortfoliopageCard;
