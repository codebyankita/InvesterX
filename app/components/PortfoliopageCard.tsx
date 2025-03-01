// // app/components/PortfoliopageCard.tsx


// 'use client'
// import React from "react";
// import Image from "next/image";
// import { MdOutlineArrowOutward } from "react-icons/md";
// // import Link from "next/link";

// interface PortfoliopageCardProps {
//     id?: string;
//     image: string;
//     title: string;
//     category: string;
//     year: string;
// }

// const PortfoliopageCard: React.FC<PortfoliopageCardProps> = ({
//     // id,
//     image,
//     title,
//     category,
//     year,
// }) => {
//     return (
//         // <Link href={`/portfolio/${id}`}>
//         <div
//             className="bg-white border rounded-2xl py-12 text-center relative transition-all duration-300 group hover:border-2 hover:border-custom-blue hover:shadow-lg transform hover:scale-95"
//         >
//             <div className="absolute top-4 right-4 text-gray-500 transition-colors duration-300 group-hover:text-custom-blue">
//                 <MdOutlineArrowOutward size={24} />
//             </div>
//             {/* Centered Image with gray background and transition on hover */}
//             <div className="flex justify-center items-center mx-auto w-30 h-30 group">
//                 <Image
//                     className="rounded-full w-auto h-auto m-4 overflow-visible p-4   bg-custom-blue"
//                     src={image}
//                     alt={`Portfolio of ${title}`}
//                     width={80}
//                     height={80}

//                 />
//             </div>
//             {/* Title and Category */}
//             <div className="mt-12 text-left mx-4">
//                 <h2 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-custom-blue">
//                     {title}
//                 </h2>
//                 <p className="text-gray-500 text-lg">{category} / {year}</p>
//             </div>
//         </div>
//         // </Link>
//     );
// };

// export default PortfoliopageCard;
"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

interface PortfoliopageCardProps {
    id?: string;
    image: string;
    title: string;
    category: string;
    year: string;
}

const PortfoliopageCard: React.FC<PortfoliopageCardProps> = ({ image, title, category, year }) => {
    return (
        <div className="bg-white border rounded-2xl py-12 text-center relative transition-all duration-300 group hover:border-2 hover:border-custom-blue hover:shadow-lg transform hover:scale-95">
            {/* Arrow Icon */}
            <div
                className="absolute top-4 right-4 text-gray-500 transition-colors duration-300 group-hover:text-custom-blue"
                aria-label="Navigate"
            >
                <MdOutlineArrowOutward size={24} />
            </div>

            {/* Image */}
            <div className="flex justify-center items-center mx-auto w-30 h-30">
                <Image
                    className="rounded-full w-auto h-auto overflow-visible m-4 p-4 bg-custom-blue"
                    src={image}
                    alt={`Portfolio of ${title}`}
                    width={80}
                    height={80}
                    layout="intrinsic"
                />
            </div>

            {/* Title and Category */}
            <div className="mt-12 text-left mx-4">
                <h2 className="text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-custom-blue">
                    {title}
                </h2>
                <p className="text-gray-500 text-lg">{category} / {year}</p>
            </div>
        </div>
    );
};

export default PortfoliopageCard;
