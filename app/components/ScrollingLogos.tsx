import React from "react";
import Image from "next/image";
import company from "@/public/home/company.svg";
import enterprice from "@/public/home/enterprice.svg";
import organization from "@/public/home/oragnization.svg";
import startup from "@/public/home/startup.svg";
import venture from "@/public/home/venture.svg";

const companyLogos = [
  { id: 1, src: company, alt: "Company Logo" },
  { id: 2, src: venture, alt: "Venture Logo" },
  { id: 3, src: enterprice, alt: "Enterprise Logo" },
  { id: 4, src: organization, alt: "Organization Logo" },
  { id: 5, src: startup, alt: "Startup Logo" },
];

const ScrollingLogos = () => {
  return (
    <div className="relative p-8 w-full overflow-hidden">
      {/* Blur Effects */}
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Logos */}
      <div className="flex animate-scroll space-x-16 sm:space-x-12 md:space-x-16 lg:space-x-36">
        {[...companyLogos, ...companyLogos].map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
