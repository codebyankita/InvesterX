//app/page.tsx

"use client";
import React from "react";
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper";
import Image from "next/image";
import Button from "@/app/components/Button";
import SecondaryButton from "@/app/components/SecondButton";
import PortfolioCard from "@/app/components/PortfolioCard";
import PartnerCard from "./components/PartnerCard";
import homeside from "@/public/home-1/sidehomeimage.webp";
import circle from "@/public/home-1/circleblue.webp";
import companylogo from "@/public/home-1/companylogo.webp";
import enterpricelogo from "@/public/home-1/enterpricelogo.webp";
import oragnzationlogo from "@/public/home-1/organizationlogo.webp";
import venturelogo from "@/public/home-1/venturelogo.webp";
import startuplogo from "@/public/home-1/startuplogo.webp";
import { FaFacebookF } from "react-icons/fa6";
import IndustryCard from "@/app/components/IndustryCard";
import { industries } from "../data/industries";
import { partners, summary } from "../data/partners";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Spline from "@splinetool/react-spline";
import ScrollingLogos from "./components/ScrollingLogos";
import { investors } from "@/data/investors-data";
import Link from "next/link";
import ResearchSlider from "@/app/components/ResearchSlider";


const HomePage = () => {
  // Slice the first 4 investors for Home or About page
  const limitedInvestors = investors.slice(0, 4);

  return (
    <>
      {/* -------------------------------- page1 --------------------- */}
      {/* Page 1 - Hero Section */}
      {/* Splash Screen */}
      {/* {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}


      {/* Main Content with Slide-Up Animation */}

      <div className="bg-[#f6f8ff]">
        {/* Page 1 - Hero Section */}

        <main className=" flex items-center justify-center relative z-30  pb-24 lg:flex-row md:flex-col  flex-col lg:justify-between lg:px-0 lg:p-0 p-8 md:p-10 ">
          <div className=" space-y-6 mb-28 w-full lg:px-10 xl:px-14 sm:w-full lg:w-2/4">
            {/* Left Content */}

            <h1 className="text-3xl mt-6 lg:text-left text-center justify-center sm:text-2xl lg:text-4xl xl:text-3xl font-bold text-gray-800">
              You might believe that venture capital is solely about money, but
              for us, it&apos;s fundamentally about people.
            </h1>
            <span className=" lg:text-left  text-center  sm:text-sm lg:text-base">
              <p className="text-gray-600 mt-4">
                While many see venture capital as just about money, we view it
                as a partnership centered on people. Our focus is on supporting
                entrepreneurs understanding their goals and challenges.
              </p>
              <p className="text-gray-600 mt-4">
                We believe that success comes from building strong relationships
                and fostering collaboration. By investing not only capital but
                also mentorship and resources, we empower diverse founders to
                turn their visions into reality. Ultimately, our commitment to
                people drives our mission to create a positive impact in the
                world.
              </p>
            </span>
            <div className="flex flex-col md:justify-center md:flex-row lg:justify-self-start lg:flex-row space-y-5 md:space-y-0 md:space-x-4 lg:space-x-6">
              <Button text="Pitch us" href="/contact-us" />
              <SecondaryButton text="Investment portfolio" link="/portfolio" />
            </div>
          </div>
          {/* Right Image */}

          <div className="w-full sm:w-full lg:w-2/4">
            <Image
              src={homeside}
              alt="Optimized image"
              className=" rounded-lg  shadow-md"
              placeholder="blur"
            // priority
            />
          </div>
          {/* </motion.div> */}
        </main>

        {/* Use the ScrollingLogos component */}
        <ScrollingLogos />
      </div>
      {/* ----------------------page2 --------------------*/}
      <div className="grid grid-cols-1  gap-4  md:grid-cols-2 lg:grid-cols-3  lg:mx-6 mx-4 px-6 py-4 lg:px-10 xl:px-18 lg:py-20 xl:py-28  bg-white rounded-3xl overflow-hidden">
        <ScrollAnimationWrapper>
          <div className=" text-left md:col mb-8 ">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 mb-10 ">
              About Our Invest Firm
            </h1>
            <div className="mb-10   items-start justify-start ">
              <Button text="Pitch us" href="/contact-us" />
            </div>

            <div className="space-y-4 lg:space-y-6 text-gray-600 text-base lg:text-lg">
              <p>
                At ANGELICA, we operate like an inclusive club where everyone
                can join and become an investor in innovation.
              </p>
              <p>
                Imagine the power of LIQUID—an investment approach that
                emphasizes unparalleled flexibility and adaptability. With
                LIQUID, we can pivot quickly in response to market changes,
                allowing us to seize opportunities that traditional investments
                might miss. We embrace a legal framework that supports diverse
                investment strategies, ensuring we can navigate any landscape.
              </p>
              <p>
                While we may not change the world single-handedly, we stand
                ready to support it, especially when challenges arise. At
                ANGELICA, we are the guiding lights in the darkest
                nights—investors who illuminate the path forward.
              </p>
              <p>
                Each member of our club comes with invaluable connections across
                various industries, creating a truly flat world where
                collaboration thrives. Together, we can navigate the
                complexities of the market and make a real impact.
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
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">
                +200
              </p>
              <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
            </div>

            <div className="flex flex-col  mb-4">
              <p className="text-gray-600 my-4">Team members</p>
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">
                +50
              </p>
              <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
            </div>

            <div className="flex flex-col  mb-4">
              <p className="text-gray-600 my-4">Capital investment</p>
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">
                +5B
              </p>
              <hr className="my-4 border-1 border-black lg:w-3/5  w-full lg:ml-auto" />
            </div>

            <div className="flex flex-col  mb-4">
              <p className="text-gray-600  my-4">Years of experience</p>
              <p className="text-blue-600 lg:text-4xl xl:text-5xl text-4xl font-bold">
                +15
              </p>
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
                link="/portfolio/company"
              />
              <PortfolioCard
                title="Startup"
                description="Cloud Software"
                year="2025"
                icon={startuplogo.src}
                link="/portfolio/startup"
              />
              <PortfolioCard
                title="Organization"
                description="Streaming"
                year="2025"
                icon={oragnzationlogo.src}
                link="/portfolio/oranization"
              />
              <div className="lg:col-span-2 col-span-1">
                <PortfolioCard
                  title="Venture"
                  description="E-commerce"
                  year="2025"
                  icon={venturelogo.src}
                  link="/portfolio/venture"
                />
              </div>
              <PortfolioCard
                title="Enterprise"
                description="AI Solutions"
                year="2026"
                icon={enterpricelogo.src}
                link="/portfolio/enterprice"
              />
            </div>
            <div className="flex justify-center  py-12">
              <SecondaryButton
                text="Browse investment portfolio"
                link="/portfolio"
              />
            </div>
          </div>
        </ScrollAnimationWrapper>
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
                <Button text="Pitch us" href="/contact-us" />
                {/* <SecondaryButton text=" Learn more" /> */}
              </div>
            </ScrollAnimationWrapper>
          </div>
          {/* Research Slider */}
          <ResearchSlider />
        </div>
      </div>
      {/* ----------------------page 5----------------------- */}
      <div className="lg:text-left text-center lg:p-10 xl:p-16 p-2">
        <div className="text-center mb-8">
          <ScrollAnimationWrapper>
            <h1 className="lg:text-4xl xl:text-5xl text-3xl font-semibold text-gray-800">
              Industries we invest in
            </h1>
          </ScrollAnimationWrapper>
        </div>
        <ScrollAnimationWrapper>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 xl:gap-8 lg:mx-16 xl:mx-28 mx-4 md:my-4 gap-2">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* -------------------------page 6 ------------------------*/}

      <div className="bg-[#f6f8ff] flex items-center justify-center lg:py-20 xl:py-28 pb-16">
        <div className="relative rounded-3xl overflow-hidden lg:mx-20 xl:mx-52 mx-4 w-full max-w-screen-lg">
          <ScrollAnimationWrapper>
            {/* Adjust Spline size for sm and md screens */}
            <div className="w-full h-full  md:h-[500px] lg:h-[600px]">
              <Spline
                scene="https://prod.spline.design/RKv4Qedw-h9DMTxy/scene.splinecode"
                className=" object-cover"
              />
            </div>
            {/* Overlay Content */}
            <div className="absolute inset-0 text-white  bg-black bg-opacity-30 flex flex-col items-center justify-center text-center lg:p-8 p-5">
              <h1 className=" flex  lg:mx-10 mx-4   text-xl md:text-3xl lg:text-4xl lg:font-bold font-semibold lg:mb-4 mb-2">
                We invest in the companies of the future.
              </h1>
              <p className=" lg:text-lg text-center text-wrap md:text-base text-sm lg:mb-6 mb-2 lg:mx-10 mx-4">
                From seed funding to venture capital and through to rapid
                growth, we collaborate with entrepreneurs and their companies at
                every stage and in all sectors.{" "}
              </p>

              <div className="flex   lg:flex-row flex-col items-center lg:mx-10 mx-4 justify-center  lg:gap-8 gap-4">
                <Button text="Pitch us" href="/contact-us" />
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
      </div>
      {/* ------------------------page 7 --------------------------*/}

      <div className="bg-white text-gray-900 py-8 lg:py-16">
        <ScrollAnimationWrapper>
          <div className="px-4 mx-4 lg:mx-16 xl:mx-48">
            {/* Centered Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 text-center mb-12">
              Our Partners
            </h1>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="p-4 bg-[#f6f8ff] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border hover:border-blue-500"
                >
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {partner.title}
                  </h2>
                  <p className="text-gray-600 text-base">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="text-center mb-12">
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                {summary}
              </p>
            </div>

            {/* Partner Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8">
              {limitedInvestors.map((investor) => (
                <Link key={investor.id} href={`/investors/${investor.id}`}>
                  <PartnerCard
                    key={investor.id}
                    id={investor.id}
                    image={investor.image}
                    name={investor.name}
                    title={investor.title}
                  />
                </Link>
              ))}
            </div>
            {/* Footer Buttons */}
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 ">
              <Button text="Pitch us" href="/contact-us" />
              <SecondaryButton
                text=" Browse all team members "
                link="/investors"
              />
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </>
  );
};

export default HomePage;
