import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import homeside from "@/public/home-1/sidehomeimage.jpg";
import SecondaryButton from "@/app/components/SecondButton";
import company from "@/public/home/company.svg";
import enterprice from "@/public/home/enterprice.svg";
import organization from "@/public/home/oragnization.svg";
import startup from "@/public/home/startup.svg";
import venture from "@/public/home/venture.svg";
// import { Marquee } from "@/components/magicui/marquee";
// import articles from '@/public/home-1/articles.svg';
// import bar from '@/public/home-1/bar.svg';
import circle from "@/public/home-1/circleblue.jpg";
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
  { id: 1, src: company, alt: "Company Logo" },
  { id: 2, src: venture, alt: "Venture Logo" },
  { id: 3, src: enterprice, alt: "Enterprise Logo" },
  { id: 4, src: organization, alt: "Organization Logo" },
  { id: 5, src: startup, alt: "Startup Logo" },
];
const HomePage = () => {
  return (
    <>
      {/* page1 */}
      <div className="bg-[#f6f8ff]">
        <main className=" flex items-center justify-around ">
          <div className=" space-y-6 h-fit w-2/4 px-32">
            <h1 className="text-7xl font-bold text-gray-800">
              We invest in the companies of the future, today
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur sollicitudin pulvinar ipsum
              ut senectus malesuada dui lorem ac id vel nunc sapien magna.
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
      </div>
      {/* page2 */}
      <div className="grid grid-cols-3 gap-4 mx-8 items-center justify-center py-28 p-16 bg-white">
        <div className=" text-left  mb-8 ">
          <h1 className="text-7xl font-bold text-gray-900 mb-10 mx-16">
            About Our Invest Firm
          </h1>
          <div className="mb-16 mx-28">
            <Button text="Pitch Your Startup" href="/your-link-here" />
          </div>
          <div className="mb-16 mx-20">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo vestibulum ut neque mus. Tempus arcu metus.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="rounded-full overflow-hidden mb-8">
            <Image
              src={circle} // Your circle image
              alt="Your image description"
              width={900} // Make the image larger
              height={900}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col text-right font-semibold text-3xl ">
          <div className="flex flex-col  mb-4">
            <p className="text-gray-600  m-4">Companies</p>
            <p className="text-blue-600 text-5xl font-bold">+200</p>
          </div>
          <hr className="mb-7 border-1 border-black w-3/5 ml-auto" />

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600 m-4">Team members</p>
            <p className="text-blue-600 text-5xl font-bold">+50</p>
          </div>
          <hr className="mb-7 border-1 border-black w-3/5 ml-auto" />

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600  m-4">Capital investment</p>
            <p className="text-blue-600 text-5xl font-bold">+5B</p>
          </div>
          <hr className="mb-7 border-1 border-black w-3/5 ml-auto" />

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600  m-4">Years of experience</p>
            <p className="text-blue-600 text-5xl font-bold">+15</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
