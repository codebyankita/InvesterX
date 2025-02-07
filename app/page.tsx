//app/page.tsx

"use client";
import React, { useState } from "react";
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper";
import Image from "next/image";
import Button from "@/app/components/Button";
import SecondaryButton from "@/app/components/SecondButton";
import PortfolioCard from "@/app/components/PortfolioCard";
import PartnerCard from "./components/PartnerCard";
import homeside from "@/public/home-1/sidehomeimage.jpg";
import circle from "@/public/home-1/circleblue.jpg";
import companylogo from "@/public/home-1/companylogo.svg";
import enterpricelogo from "@/public/home-1/enterpricelogo.svg";
import oragnzationlogo from "@/public/home-1/organizationlogo.svg";
import venturelogo from "@/public/home-1/venturelogo.svg";
import startuplogo from "@/public/home-1/startuplogo.svg";
import reserch02 from "@/public/home-1/reserch02.jpg";
import reserch03 from "@/public/home-1/reserch03.jpg";
import reserch01 from "@/public/home-1/reserch01.jpg";
import ReadMoreButton from "./components/ReadMoreButton";
import { FaFacebookF } from "react-icons/fa6";
import { CgScreen } from "react-icons/cg";
import { CiMobile2 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Spline from "@splinetool/react-spline";
import ScrollingLogos from "./components/ScrollingLogos";
import { investors } from "@/app/components/data/investors-data";
import NavigationButton from "@/app/components/NavigationButton";

const researchData = [
  {
    id: "01",
    title: "Discovery",
    description:
      "Our journey begins with identifying groundbreaking ideas and visionary founders. Through a proactive outreach and a robust network of industry experts, we stay ahead of emerging trends in blockchain, decentralized finance (DeFi), NFTs, and Web3 infrastructure.",
    image: reserch01,
  },
  {
    id: "02",
    title: "Research",
    description:
      "We conduct comprehensive research to evaluate the potential of each opportunity. Our due diligence process ensures we understand the market, the team, and the technology behind every project we consider.",
    image: reserch02,
  },
  {
    id: "03",
    title: "Investment",
    description:
      "Once we identify and validate a promising project, we invest with a commitment to long-term success. Our investments are more than financial; we provide strategic support, mentorship, and access to a global network of partners to accelerate growth..",
    image: reserch03,
  },
];

const HomePage = () => {

  // Slice the first 4 investors for Home or About page
  const limitedInvestors = investors.slice(0, 4);
  // State for the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for changing the index
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? researchData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === researchData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Current research item
  const currentResearch = researchData[currentIndex];



  return (
    <>
      {/*-------------------------------- page1 ---------------------*/}
      {/* Page 1 - Hero Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#f6f8ff]"
      > */}
      <div className="bg-[#f6f8ff]">
        <ScrollAnimationWrapper>
          <main className=" flex items-center justify-center lg:flex-row md:flex-col  flex-col lg:justify-between lg:px-0 lg:p-0 p-8 md:p-10 ">
            <div className=" space-y-6 mb-28 w-full lg:px-10 xl:px-14 sm:w-full lg:w-2/4">
              {/* Left Content */}
              {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 mb-28 w-full lg:px-10 xl:px-14 sm:w-full lg:w-2/4"
          > */}

              <h1 className="text-3xl lg:text-left text-center justify-center sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
                We invest in the companies of the future, today
              </h1>
              <p className="text-gray-600 lg:text-left  text-center  sm:text-sm lg:text-base">
                We are a venture capital firm dedicated to fueling the next wave of Web3 innovation. From blockchain protocols to decentralized finance (DeFi), we partner with visionary founders to shape the decentralized future.
              </p>
              <div className="flex flex-col md:justify-center md:flex-row lg:justify-self-start lg:flex-row space-y-5 md:space-y-0 md:space-x-4 lg:space-x-6">
                <Button text="Pitch Your Startup" />
                <SecondaryButton text="Investment portfolio" />
              </div>

              {/* </motion.div> */}

            </div>
            {/* Right Image */}
            {/* <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full sm:w-full lg:w-2/4"
            > */}
            <div className="w-full sm:w-full lg:w-2/4">
              <Image
                src={homeside}
                alt="Abstract blue and white wavy background"
                className=" rounded-lg  shadow-md"
                placeholder="blur"

              />
            </div>
            {/* </motion.div> */}
          </main>
        </ScrollAnimationWrapper>
        {/* Use the ScrollingLogos component */}
        <ScrollingLogos />
      </div>
      {/* ----------------------page2 --------------------*/}
      <div className="grid grid-cols-1  gap-4  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 lg:mx-6 mx-4 px-6 py-4 lg:px-10 xl:px-18 lg:py-20 xl:py-28  bg-white rounded-3xl overflow-hidden">
        <ScrollAnimationWrapper>

          <div className=" text-left  mb-8 ">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-10 ">
              About Our Invest Firm
            </h1>
            <div className="mb-10 lg:mr-24  items-start justify-start ">
              <Button text="Pitch Your Startup" />
            </div>
            <div className="mb-16 lg:mr-16 md:justify-center">
              <p className="text-gray-600 mb-4">
                To support bold entrepreneurs and groundbreaking projects that leverage blockchain, smart contracts, and decentralized systems to revolutionize industries.
              </p>
              <p className="text-gray-600">
                We envision a world where decentralization empowers individuals, fosters trust, and enhances global connectivity.
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>
        {/* Center Section */}
        <div className="items-center xl:col-span-2 lg:ml-8 2xl:col-span-1 justify-center lg:content-center ">
          <ScrollAnimationWrapper>
            <div className="rounded-full overflow-hidden  mb-8">
              <Image
                src={circle} // Your circle image
                alt="Your image description"
                width={900} // Make the image larger
                height={900}
                className="object-cover overflow-hidden"
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
        {/* Right Section */}
        <ScrollAnimationWrapper>
          <div className=" flex flex-col lg:col-span-1 md:col-span-2 md:flex-wrap lg:text-right text-center font-semibold text-2xl xl:mr-8 ">
            <div className="flex flex-col  mb-4">
              <p className="text-gray-600  my-4">Companies</p>
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">+200</p>
              <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
            </div>

            <div className="flex flex-col  mb-4">
              <p className="text-gray-600 my-4">Team members</p>
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">+50</p>
              <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
            </div>

            <div className="flex flex-col  mb-4">
              <p className="text-gray-600 my-4">Capital investment</p>
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">+5B</p>
              <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
            </div>

            <div className="flex flex-col  mb-4">
              <p className="text-gray-600  my-4">Years of experience</p>
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">+15</p>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
      {/* --------------------------------------page3 --------------------------*/}
      <div className="bg-[#f6f8ff]">
        <ScrollAnimationWrapper>

          <div className=" lg:p-8 xl:p-12 p-2 mx-4 md:mx-24 lg:mx-10 xl:mx-28 ">
            <h1 className="text-3xl font-semibold text-center text-gray-900 mb-12">
              Our Portfolio
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 xl:gap-8 m-6">
              <PortfolioCard
                title="Company"
                description="Social Network"
                year="2025"
                icon={companylogo.src}
              // link="/company-link"
              />
              <PortfolioCard
                title="Startup"
                description="Cloud Software"
                year="2025"
                icon={startuplogo.src}
              // link="/startup-link"
              />
              <PortfolioCard
                title="Organization"
                description="Streaming"
                year="2025"
                icon={oragnzationlogo.src}
              // link="/organization-link"
              />
              <div className="lg:col-span-2 col-span-1">
                <PortfolioCard
                  title="Venture"
                  description="E-commerce"
                  year="2025"
                  icon={venturelogo.src}
                // link="/venture-link"
                />
              </div>
              <PortfolioCard
                title="Enterprise"
                description="AI Solutions"
                year="2026"
                icon={enterpricelogo.src}
              // link="/enterprise-link"
              />
            </div>
            <div className="flex justify-center  py-12">
              <SecondaryButton text="Browse investment portfolio" />
            </div>
          </div>
        </ScrollAnimationWrapper >

      </div>
      {/* ------------------------page4 --------------------------*/}
      <div className="flex  items-center justify-center lg:p-6 p-4 m-4 py-6 lg:m-8 lg:py-10 xl:py-28 bg-white">
        <div className="w-full lg:mx-10 xl:mx-32 mx-4 ">
          {/* Header */}
          <div className="flex space-y-4 lg:space-y-0 flex-col lg:flex-row justify-between">
            <ScrollAnimationWrapper>

              <h1 className="lg:text-5xl text-3xl font-bold text-gray-900">
                Our approach
              </h1>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <div className="flex md:flex-row space-y-4 md:space-y-0 flex-col items-start lg:space-x-5 space-x-3  lg:mr-6 xl:mr-32">
                <Button text="Pitch Your Startup" />
                <SecondaryButton text=" Learn more" />
              </div>
            </ScrollAnimationWrapper>

          </div>
          <div className="flex lg:flex-row flex-col my-12">
            {/* Left Section - Image */}
            <div className="lg:w-1/2">
              <ScrollAnimationWrapper>
                <Image
                  src={currentResearch.image}
                  alt={currentResearch.title}
                  className="rounded-2xl"
                  width={900}
                  height={600}

                />
              </ScrollAnimationWrapper>
            </div>
            {/* Right Section - Content */}
            <div className="lg:w-1/2 w-full lg:px-10 xl:px-16 lg:ml-0 xl:ml-6 mt-4 ">
              <ScrollAnimationWrapper>
                <div className="">
                  <h2 className="lg:text-4xl xl:text-5xl text-3xl font-bold  text-gray-900">
                    {currentResearch.id}
                  </h2>
                  <h3 className="lg:text-2xl text-xl font-semibold my-2 text-gray-900">
                    {currentResearch.title}
                  </h3>
                  <p className="lg:mt-10 mt-5 text-wrap	lg:mr-0 xl:mr-6 mr-0 text-lg text-gray-600">
                    {currentResearch.description}
                  </p>
                </div>
                {/* Navigation Buttons */}
                <div className="flex  mt-10 ">
                  <NavigationButton direction="prev" onClick={handlePrevious} />
                  <NavigationButton direction="next" onClick={handleNext} />
                </div>
              </ScrollAnimationWrapper>
            </div>

          </div>
        </div>
      </div >
      {/* ----------------------page 5----------------------- */}
      <div className="lg:text-left text-center lg:p-10 xl:p-16  p-2 " >
        <div className="text-center mb-8">
          <ScrollAnimationWrapper>
            <h1 className="lg:text-4xl xl:text-5xl text-3xl font-semibold text-gray-800">
              Industries we invest in
            </h1>
          </ScrollAnimationWrapper>
          {/* Grid Container */}
        </div>
        <ScrollAnimationWrapper>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 xl:gap-8 lg:mx-16 xl:mx-28 mx-4 md:my-4 gap-2">
            {/* Card 1 */}
            <div className="lg:p-6 xl:mr-6 mr-0 p-2 md:my-4 flex flex-col items-center lg:items-start">
              <CiMobile2 className=" mb-6 h-12 w-12   " />

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Mobile app
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                We back innovative mobile app developers creating seamless, user-centric experiences. From groundbreaking consumer apps to enterprise solutions, we invest in ideas that redefine how people interact with technology on the go.
              </p>
              <div className="mt-auto w-full flex justify-center lg:justify-start">
                <ReadMoreButton />
              </div>
            </div>
            <div className="lg:p-6 xl:mr-6 mr-0 p-2 md:my-4 flex flex-col items-center lg:items-start">
              <CgScreen className=" mb-6 h-12 w-12" />

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Hardware companies
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                We support forward-thinking hardware companies building the foundation for next-generation technologies. Our investments focus on devices and infrastructure that enable smarter, faster, and more efficient solutions.
              </p>
              <div className="mt-auto w-full flex justify-center lg:justify-start">
                <ReadMoreButton />
              </div>
            </div>
            <div className="lg:p-6 xl:mr-6 mr-0 p-2  md:my-4 flex flex-col items-center lg:items-start">
              <IoSettingsOutline className=" mb-6 h-12 w-12" />

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Software companies
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                We empower software innovators driving digital transformation. Whether it’s SaaS, AI, or enterprise platforms, we invest in scalable solutions that solve complex challenges and unlock new possibilities.
              </p>
              <div className="mt-auto w-full flex justify-center lg:justify-start">
                <ReadMoreButton />
              </div>
            </div>

          </div>
        </ScrollAnimationWrapper>
      </div >
      {/* -------------------------page 6 --------------------------*/}
      <div className="bg-[#f6f8ff] flex items-center justify-center lg:py-20 xl:py-28 pb-16" >
        <div className="relative rounded-3xl overflow-hidden lg:mx-20 xl:mx-52 mx-4 w-full max-w-screen-lg">
          <ScrollAnimationWrapper>
            {/* Adjust Spline size for sm and md screens */}
            <div className="w-full h-auto ">
              <Spline
                scene="https://prod.spline.design/RKv4Qedw-h9DMTxy/scene.splinecode"
                className="w-full h-full"
              />

            </div>
            {/* Overlay Content */}
            <div className="absolute inset-0 text-white  bg-black bg-opacity-30 flex flex-col items-center justify-center text-center lg:p-8 p-5">
              <h1 className=" flex  lg:mx-10 mx-4   text-xl md:text-3xl lg:text-4xl lg:font-bold font-semibold lg:mb-4 mb-2">
                We invest in the companies of the future, today
              </h1>
              <p className=" lg:text-lg text-center text-wrap md:text-base text-sm lg:mb-6 mb-2 lg:mx-10 mx-4">
                Investing in cutting-edge technologies and protocols that drive the decentralized economy.
              </p>

              <div className="flex   lg:flex-row flex-col items-center lg:mx-10 mx-4 justify-center  lg:gap-8 gap-4">

                <Button text="Pitch Your Startup" />
                <div className="flex gap-4 ">
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
          </ScrollAnimationWrapper>
        </div>
      </div >
      {/* ------------------------page 7 --------------------------*/}

      <div className="bg-white text-gray-900 " >
        <ScrollAnimationWrapper>
          <div className="px-4 lg:py-16 lg:mx-16 xl:mx-48 mx-4 py-8">
            {/* Heading Section */}
            <div className="flex justify-between gap-6 lg:gap-1 text-left mb-12 ">
              <h1 className="lg:text-4xl xl:text-5xl text-3xl lg:w-1/2 xl:w-1/3 w-full xl:content-end  content-center font-bold text-gray-900">
                Our partners
              </h1>
              <p className="text-gray-500 lg:w-1/2 xl:w-2/5 w-full lg:text-xl text-base mt-4">
                we believe that collaboration is the cornerstone of success. Our partners are visionaries, industry leaders, and innovators who share our passion for shaping the future of Web3. Together, we create a thriving ecosystem that fosters growth, innovation, and impact.
              </p>
            </div>
            {/* Partner Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
              {limitedInvestors.map((investor) => (
                <PartnerCard
                  key={investor.id}
                  id={investor.id}
                  image={investor.image}
                  name={investor.name}
                  title={investor.title}
                />
              ))}
            </div>
            {/* Footer Buttons */}
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 ">
              <Button text="Pitch Your Startup" />
              <SecondaryButton text=" Browse all team members " />
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div >
      {/* </motion.div > */}
    </>
  );
};

export default HomePage;
