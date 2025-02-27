// 'use client'
// import { useState, } from "react";
// import { GrTechnology } from "react-icons/gr";
// import { MdOutlineHealthAndSafety } from "react-icons/md";
// import { LiaIndustrySolid } from "react-icons/lia";
// import { MdOutlineAgriculture } from "react-icons/md";
// import { GiMining } from "react-icons/gi";
// import ReadMoreButton from "./ReadMoreButton";

// type Industry = {
//     icon: keyof typeof iconMap;
//     title: string;
//     shortDescription: string;
//     fullDescription: string[];
// };

// const iconMap = {
//     GrTechnology: <GrTechnology className="mb-6 h-12 w-12" />,
//     MdOutlineHealthAndSafety: <MdOutlineHealthAndSafety className="mb-6 h-12 w-12" />,
//     LiaIndustrySolid: <LiaIndustrySolid className="mb-6 h-12 w-12" />,
//     MdOutlineAgriculture: <MdOutlineAgriculture className="mb-6 h-12 w-12" />,
//     GiMining: <GiMining className="mb-6 h-12 w-12" />,
// };

// interface IndustryCardProps {
//     industry: Industry;
// }

// const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
//     const [expanded, setExpanded] = useState(false);

//     return (
//         <div className="lg:p-6 xl:mr-6 mr-0 p-2 md:my-4 flex flex-col items-center lg:items-start">
//             {iconMap[industry.icon]}
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">{industry.title}</h2>
//             <span className="text-gray-600 text-lg mb-4">
//                 {expanded ? (
//                     industry.fullDescription.map((paragraph, index) => (
//                         <p key={index} className={index === 0 ? "" : "mt-2"}>{paragraph}</p>
//                     ))
//                 ) : (
//                     <p>{industry.shortDescription}</p>
//                 )}
//             </span>
//             <div className="mt-auto w-full flex justify-center lg:justify-start">
//                 <ReadMoreButton onClick={() => setExpanded(!expanded)} expanded={expanded} />
//             </div>
//         </div>
//     );
// };

// export default IndustryCard;
// components/IndustryCard.tsx
"use client";
import { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";

interface Industry {
    id: string;
    icon: React.ElementType; // Accept a component type directly
    title: string;
    shortDescription: string;
    fullDescription: string[];
}

interface IndustryCardProps {
    industry: Industry;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry }) => {
    const [expanded, setExpanded] = useState(false);

    // Render the icon component with its className
    const IconComponent = industry.icon;

    return (
        <div className="lg:p-6 xl:mr-6 mr-0 p-2 md:my-4 flex flex-col items-center lg:items-start">
            <IconComponent className="mb-6 h-12 w-12" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{industry.title}</h2>
            <span className="text-gray-600 text-lg mb-4">
                {expanded ? (
                    industry.fullDescription.map((paragraph, index) => (
                        <p key={index} className={index === 0 ? "" : "mt-2"}>
                            {paragraph}
                        </p>
                    ))
                ) : (
                    <p>{industry.shortDescription}</p>
                )}
            </span>
            <div className="mt-auto w-full flex justify-center lg:justify-start">
                <ReadMoreButton onClick={() => setExpanded(!expanded)} expanded={expanded} />
            </div>
        </div>
    );
};

export default IndustryCard;