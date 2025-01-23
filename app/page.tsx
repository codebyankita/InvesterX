'use client'
import React, { useState } from "react";
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
import companylogo from '@/public/home-1/companylogo.svg';
import enterpricelogo from '@/public/home-1/enterpricelogo.svg';
import oragnzationlogo from '@/public/home-1/organizationlogo.svg';
import venturelogo from '@/public/home-1/venturelogo.svg';
import startuplogo from '@/public/home-1/startuplogo.svg';
import PortfolioCard from "@/app/components/PortfolioCard";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
// import reading from '@/public/home-1/reading.svg';
import reserch02 from '@/public/home-1/reserch02.jpg';
import reserch03 from '@/public/home-1/reserch03.jpg';
import reserch01 from '@/public/home-1/reserch01.jpg';
import { CiMobile2 } from "react-icons/ci";
import { CgScreen } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import ReadMoreButton from './components/ReadMoreButton';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import Andy from "@/public/home-1/andy.jpg";
import John from "@/public/home-1/john.jpg"

import Matt from "@/public/home-1/matt.jpg"

import Sophie from "@/public/home-1/sophie.jpg"

// import tv from '@/public/home-1/tv.svg';
const companyLogos = [
  { id: 1, src: company, alt: "Company Logo" },
  { id: 2, src: venture, alt: "Venture Logo" },
  { id: 3, src: enterprice, alt: "Enterprise Logo" },
  { id: 4, src: organization, alt: "Organization Logo" },
  { id: 5, src: startup, alt: "Startup Logo" },
];
const researchData = [
  {
    id: "01",
    title: "Discovery",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.",
    image: reserch01,
  },
  {
    id: "02",
    title: "Research",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.",
    image: reserch02,
  },
  {
    id: "03",
    title: "Investment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proin laoreet purus sed. Sodales.",
    image: reserch03,
  },
];


const HomePage = () => {
  // State for the current index
const [currentIndex, setCurrentIndex] = useState(0);

// Handler for changing the index
const handleNavigation = (direction: "prev" | "next") => {
  if (direction === "prev") {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? researchData.length - 1 : prevIndex - 1
    );
  } else {
    setCurrentIndex((prevIndex) =>
      prevIndex === researchData.length - 1 ? 0 : prevIndex + 1
    );
  }
};

// Current research item
const currentResearch = researchData[currentIndex];
  return (
    <>
      {/* page1 */}
      <div className="bg-[#f6f8ff]">
        <main className=" flex items-center justify-around ">
          <div className=" space-y-6 mb-28 w-2/4 px-32">
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
          <div className="w-2/4  md:mt-0">
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
      <div className="grid grid-cols-4 gap-4 mx-8 px-20  py-28  bg-white">
        <div className=" text-left  mb-8 ">
          <h1 className="text-7xl font-bold text-gray-900 mb-10 ">
            About Our Invest Firm
          </h1>
          <div className="mb-16 mr-32  items-start justify-start ">
            <Button text="Pitch Your Startup" href="/your-link-here" />
          </div>
          <div className="mb-16 mr-20">
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

        <div className="items-center col-span-2 justify-center ">
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
        <div className="flex flex-col text-right font-semibold text-2xl ">
          <div className="flex flex-col  mb-4">
            <p className="text-gray-600  my-4">Companies</p>
            <p className="text-blue-600 text-5xl font-bold">+200</p>
          </div>
          <hr className="mb-7 border-1 border-black w-3/5 ml-auto" />

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600 my-4">Team members</p>
            <p className="text-blue-600 text-5xl font-bold">+50</p>
          </div>
          <hr className="mb-7 border-1 border-black w-3/5 ml-auto" />

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600 my-4">Capital investment</p>
            <p className="text-blue-600 text-5xl font-bold">+5B</p>
          </div>
          <hr className="mb-7 border-1 border-black w-3/5 ml-auto" />

          <div className="flex flex-col  mb-4">
            <p className="text-gray-600  my-4">Years of experience</p>
            <p className="text-blue-600 text-5xl font-bold">+15</p>
          </div>

        </div>
      </div>
      {/* page3 */}
      <div className="bg-[#f6f8ff]">
        <div className=" p-12 mx-28 ">
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-12">Our Portfolio</h1>
          <div className="grid grid-cols-3 gap-10 m-6">
            <PortfolioCard
              title="Company"
              description="Social Network"
              year="2025"
              icon={companylogo.src}

              link="/company-link"
            />
            <PortfolioCard
              title="Startup"
              description="Cloud Software"
              year="2024"
              icon={startuplogo.src}

              link="/startup-link"
            />
            <PortfolioCard
              title="Organization"
              description="Streaming"
              year="2022"
              icon={oragnzationlogo.src}

              link="/organization-link"
            />
            <div className="col-span-2">

              <PortfolioCard
                title="Venture"
                description="E-commerce"
                year="2023"
                icon={venturelogo.src}

                link="/venture-link"
              />
            </div>
            <PortfolioCard
              title="Enterprise"
              description="AI Solutions"
              year="2026"
              icon={enterpricelogo.src}

              link="/enterprise-link"
            />
          </div>
          <div className="flex justify-center  py-12">

            <SecondaryButton text="Browse investment portfolio" />
          </div>
        </div>
      </div>
      {/* page4 */}
      <div className="flex  items-center justify-center p-6 m-10 py-28 bg-white">
      <div className="w-full mx-32 ">
        {/* Header */}
        <div className="flex justify-between">
          <h1 className="text-5xl font-bold text-gray-900">Our approach</h1>
        <div className="flex items-start space-x-5 mr-32">
         
         <Button text="Pitch Your Startup" href="/your-link-here" />
         <SecondaryButton text=" Learn more" />
        
       </div>
        </div>
        <div className="flex my-12">
          {/* Left Section - Image */}
          <div className="">
            <Image
              src={currentResearch.image}
              alt={currentResearch.title}
              className="rounded-2xl"
              width={900}
              height={600}
              priority
            />
          </div>
          {/* Right Section - Content */}
          <div className="w-1/2 px-16 ml-6 mt-4 ">
         
            <div className="">
              <h2 className="text-5xl font-bold  text-gray-900">
                {currentResearch.id}
              </h2>
              <h3 className="text-2xl font-semibold my-2 text-gray-900">
                {currentResearch.title}
              </h3>
              <p className="mt-10 text-wrap	mr-6 text-lg text-gray-600">{currentResearch.description}</p>
            </div>
            {/* Navigation Buttons */}
        <div className="flex  mt-10 ">
          <button className="flex items-center justify-center px-6 py-3 text-black hover:text-white border border-gray-300 hover:bg-blue-600 rounded-l-full bg-white"
            onClick={() => handleNavigation("prev")}
          >
            <IoMdArrowBack className="text-xl " />
            
          </button>
          <button   className="flex items-center justify-center px-6 py-3 text-black hover:text-white border border-gray-300 hover:bg-blue-600 rounded-r-full bg-white"
            onClick={() => handleNavigation("next")}
          >
            
            <IoMdArrowForward className="text-xl " />
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
    {/* page 5 */}
    <div className="bg-[#f6f8ff] text-left  py-16 px-16">
            <div className="text-center mb-8">
          
                <h1 className="text-5xl font-semibold text-gray-800">Industries we invest in</h1>
            </div>
            <div className="grid grid-cols-3 gap-8 mx-28">
                <div className=" p-6 mr-6  ">
                    <CiMobile2  className=" mb-6 h-12 w-12"/>
                    <div className="mb-4">
                        <i className="fas fa-mobile-alt text-4xl text-blue-500"></i>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mobile app</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus felis leo.
                    </p>
                    <ReadMoreButton />
                </div>
                <div className=" p-6 mr-6  ">
                    <CgScreen  className=" mb-6 h-12 w-12"/>
                    <div className="mb-4">
                        <i className="fas fa-mobile-alt text-4xl text-blue-500"></i>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Hardware companies</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus felis leo.
                    </p>
                    <ReadMoreButton />
                </div>
                <div className=" p-6 mr-6 ">
                    <IoSettingsOutline  className=" mb-6 h-12 w-12"/>
                    <div className="mb-4">
                        <i className="fas fa-mobile-alt text-4xl text-blue-500"></i>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Software companies</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus felis leo.
                    </p>
                    <ReadMoreButton />
                </div>
                
               
            </div>
        </div>
        {/* page 6 */}
        <div className="bg-[#f6f8ff] flex items-center justify-center ">
           
                <div className="relative rounded-3xl overflow-hidden mx-52">
                <Image
              src={reserch01}
              alt="Abstract blue and white wavy background"
              
              className="  "
            />
                    <div className="absolute inset-0 text-white  bg-black bg-opacity-30 flex flex-col items-center justify-center text-center p-8">
                       
                       <div className="">

          <h1 className=" flex  mx-60   text-4xl md:text-5xl font-bold mb-4">
            We invest in the companies of the future, today
          </h1>
          <p className=" text-lg mb-6 mx-80">
                            Lorem ipsum dolor sit amet consectetur sollicitudin pulvinar ipsum ut senectus malesuada dui lorem ac.
                        </p>
                     
          <div className="flex items-center mx-10 justify-center  gap-8">
            <Button text="Pitch Your Startup" href="/your-link-here" />
            <div className="     transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
              <FaFacebookF />
            </div>
            <div className="  transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
              <FaTwitter />
            </div>
            <div className="  transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
              <AiFillInstagram />
            </div>
            <div className="   transform transition-all duration-300 hover:scale-110 hover:text-gray-300 hover:translate-y-[-8px]">
              <FaLinkedinIn />
            </div>
          </div>
                       </div>
       
                        
                      
                    </div>
                </div>
            
        </div>
        {/* page 7 */}
        <div className="bg-white text-gray-900">
            <div className=" px-4 py-16 mx-48">
                <div className=" flex justify-between text-left mb-12  ">
                   
                    <h1 className="text-5xl w-1/3  content-end  font-bold text-gray-900">Our partners</h1>
                    <p className="text-gray-500 w-1/3 text-xl mt-4  ">
                        Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus felis leo vestibulum ut neque mus.
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-8 ">
                    {/* Partner Card 1 */}
                    <div className="bg-white hover:border-blue-500 border rounded-2xl px-10 p-6 text-center relative">
                       <div className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white">
                            <MdOutlineArrowOutward />
                          </div>
                        <Image className=" rounded-full mb-4 " src={John} alt="Portrait of John Carter" />
                        <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-500">John Carter</h2>
                        <p className="text-gray-500">CEO & Founding Partner</p>
                        
                    </div>
                    {/* Partner Card 2 */}
                    <div className="bg-white hover:border-blue-500 px-10 hover:text-blue-500 border rounded-lg p-6 text-center relative">
                    <div className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white">
                            <MdOutlineArrowOutward />
                          </div>
                        <Image className="rounded-full  mb-4" src={Sophie} alt="Portrait of Sophie Moore" />
                        <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-500">Sophie Moore</h2>
                        <p className="text-gray-500">Managing partner</p>
                       
                    </div>
                    {/* Partner Card 3 */}
                    <div className="bg-white hover:border-blue-500 px-10 border rounded-lg p-6 text-center relative">
                    <div className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white">
                            <MdOutlineArrowOutward />
                          </div>
                        <Image className="rounded-full  mb-4" src={Matt} alt="Portrait of Matt Cannon" />
                        <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-500">Matt Cannon</h2>
                        <p className="text-gray-500">Managing partner</p>
                       
                    </div>
                    {/* Partner Card 4 */}
                    <div className="bg-white hover:border-blue-500 px-10 border rounded-lg p-6 text-center relative">
                    <div className="absolute top-4 right-4 text-gray-500 transition-all duration-300 group-hover:text-white">
                            <MdOutlineArrowOutward />
                          </div>
                        <Image className="rounded-full  mb-4" src={Andy} alt="Portrait of Andy Smith" />
                        <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-500">Andy Smith</h2>
                        <p className="text-gray-500">Managing partner</p>
                       
                    </div>
                </div>
                <div className="mt-12 flex justify-center space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                        Pitch your startup <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                    <button className="border border-gray-300 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition">
                        Browse all team members
                    </button>
                </div>
            </div>
        </div>
        {/* page 8 */}
        <div className="max-w-7xl mx-auto p-6">
                    <h1 className="text-4xl font-bold text-center mb-8">News & Articles</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row items-center">
                            <img src="https://placehold.co/100x100" alt="Book and magnifying glass icon" className="w-24 h-24 mb-4 md:mb-0 md:mr-6"/>
                            <div>
                                <p className="text-sm text-gray-500">Investments <span className="mx-2">—</span> Jul 19, 2023</p>
                                <h2 className="text-xl font-semibold mt-2">How to raise capital: 5 fundraising strategies for your startup</h2>
                                <p className="text-gray-600 mt-2">Lorem ipsum dolor amet consectetur diam nullam mauris non turpis mi sit in a nunc id lectus facilisi justo eu egestas amet.</p>
                                <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">Read article <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                            <img src="https://placehold.co/100x100" alt="Startup icon" className="w-24 h-24 mb-4"/>
                            <div>
                                <p className="text-sm text-gray-500">Business Tips <span className="mx-2">—</span> Jul 15, 2023</p>
                                <h2 className="text-xl font-semibold mt-2">Building your startup team: Key considerations</h2>
                                <p className="text-gray-600 mt-2">Explore tips on assembling a strong team that can take your business to the next level.</p>
                                <a href="#" className="text-blue-600 font-semibold mt-4 inline-block">Read article <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold text-center mb-6">More Articles</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                                <img src="https://placehold.co/100x100" alt="Coins icon" className="w-24 h-24 mb-4"/>
                                <p className="text-sm text-gray-500">Investments</p>
                                <h3 className="text-lg font-semibold">Raising Funds Through Crowdfunding</h3>
                                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Read article <i className="fas fa-arrow-right"></i></a>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                                <img src="https://placehold.co/100x100" alt="Chart icon" className="w-24 h-24 mb-4"/>
                                <p className="text-sm text-gray-500">Analytics</p>
                                <h3 className="text-lg font-semibold">Key Metrics Every Startup Should Track</h3>
                                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Read article <i className="fas fa-arrow-right"></i></a>
                            </div>
                            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                                <img src="https://placehold.co/100x100" alt="Presentation icon" className="w-24 h-24 mb-4"/>
                                <p className="text-sm text-gray-500">Strategy</p>
                                <h3 className="text-lg font-semibold">The Power of Networking for Entrepreneurs</h3>
                                <a href="#" className="text-blue-600 font-semibold mt-2 inline-block">Read article <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        
      

      

   
    </>
  );
};

export default HomePage;
