//app/components/PartnerCard.tsx
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
// import Link from "next/link";

interface PartnerCardProps {
  id: string;
  image: string;
  name: string;
  title: string;

}
const PartnerCard: React.FC<PartnerCardProps> = ({ image, name, title }) => {
  return (
    // <Link href={`/investors/${id}`}>
    <div className="bg-white border rounded-2xl  py-12 text-center relative transition-all duration-300 group hover:border-2 hover:border-blue-500 hover:shadow-lg transform hover:scale-95">
      <div className="absolute top-4 right-4 text-gray-500 transition-colors duration-300 group-hover:text-blue-500">
        <MdOutlineArrowOutward size={24} />
      </div>
      {/* Centered Image */}
      <div className="flex justify-center items-center  rounded-full mx-auto w-[120px] h-[120px]">
        <Image
          className="rounded-full transform transition-transform duration-300 group-hover:scale-110 object-cover"
          src={image}
          alt={`Portrait of ${name}`}
          width={120}
          height={120}
        />
      </div>
      {/* Name and Title at the Bottom */}
      <div className="mt-8">
        <h2 className="text-2xl flex-wrap font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-500">
          {name}
        </h2>
        <p className="text-gray-500 text-lg">{title}</p>
      </div>
    </div>
    // </Link>
  );
};

export default PartnerCard;
