import React from 'react'
import Image from 'next/image';
import Button from '@/app/components/Button';
import homeside from '@/public/home-1/sidehomeimage.jpg';
import SecondaryButton from '@/app/components/SecondButton';
import company from '@/public/home/company.svg';
import enterprice from '@/public/home/enterprice.svg';
import organization from '@/public/home/oragnization.svg';
import startup from '@/public/home/startup.svg';
import venture from '@/public/home/venture.svg';
// import { Marquee } from "@/components/magicui/marquee";
// import articles from '@/public/home-1/articles.svg';
// import bar from '@/public/home-1/bar.svg';
// import circle from '@/public/home-1/circleblue.jpg';
// import company from '@/public/home-1/companylogo.svg';
// import enterprice from '@/public/home-1/enterpricelogo.svg';
// import oragnzation from '@/public/home-1/organizationlogo.svg';
// import reading from '@/public/home-1/reading.svg';
// import reserch02 from '@/public/home-1/reserch02.jpg';
// import reserch03 from '@/public/home-1/reserch03.jpg';
// import startup from '@/public/home-1/startuplogo.svg';
// import tv from '@/public/home-1/tv.svg';
// import venture from '@/public/home-1/venturelogo.svg';
const companyLogos = [
  { id: 1, src: company, alt: 'Company Logo' },
  { id: 2, src: venture, alt: 'Venture Logo' },
  { id: 3, src: enterprice, alt: 'Enterprise Logo' },
  { id: 4, src: organization, alt: 'Organization Logo' },
  { id: 5, src: startup, alt: 'Startup Logo' },
 
];
const HomePage = () => {
  return (
<>
    <main className=" flex items-center justify-around ">
      <div className=" space-y-6 h-fit w-2/4 px-32">
        <h1 className="text-7xl font-bold text-gray-800">
          We invest in the companies of the future, today
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur sollicitudin pulvinar ipsum ut senectus malesuada
          dui lorem ac id vel nunc sapien magna.
        </p>
        <div className="flex space-x-4">
        <Button text="Pitch Your Startup" href="/your-link-here" />
          <SecondaryButton text="Investment portfolio" />
        </div>
      </div>
      <div className="w-2/4 mt-12 md:mt-0">
        <Image
          src={homeside}
          alt="Abstract blue and white wavy background"
          className=" rounded-lg shadow-lg "
          />
      </div>
          </main>
          <div className="relative  p-8 w-full overflow-hidden ">
      {/* Blur Effects */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Logos */}
      <div className="flex animate-scroll space-x-36">
        {[...companyLogos, ...companyLogos].map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-16  object-contain"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default HomePage;
