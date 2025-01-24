"use client";
import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import Aboutfirm from "@/public/about/aboutfirm.jpg";
import ScrollingLogos from "../components/ScrollingLogos";
import Button from "@/app/components/Button";
import SecondaryButton from "@/app/components/SecondButton";
import mission from "@/public/about/ourmission.jpg";
import vision from "@/public/about/ourvision.jpg";
import innovation from "@/public/about/innovation.svg";
import Accountability from "@/public/about/accountibility.svg";
import Commitment from "@/public/about/commitment.svg";
import Openness from "@/public/about/openness.svg";
import Execution from "@/public/about/execution.svg";
import Leadership from "@/public/about/leadership.svg";
import PartnerCard from "../components/PartnerCard";
import miami from "@/public/about/miamioffice.jpg";
import Ny from "@/public/about/office.jpg";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { investors } from "@/app/components/data/investors";
const offices = [
  {
    id: "newyork",
    name: "New York, NY",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proi.",
    email: "newyork@invstor.com",
    location: "21 Essex St, New York, NY 10002",
    phone: "(414) 793 - 0681",
    image: Ny, // Update with actual image path
  },
  {
    id: "miami",
    name: "Miami, FL",
    description:
      "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proi.",
    email: "miami@invstor.com",
    location: "21 Essex St, New York, NY 10002",
    phone: "(414) 793 - 0681",
    image: miami, // Update with actual image path
  },
];
export default function about() {
   // Slice the first 4 investors for Home or About page
   const limitedInvestors = investors.slice(0, 4);
  const [currentOfficeIndex, setCurrentOfficeIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentOfficeIndex((prevIndex) =>
      prevIndex === 0 ? offices.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentOfficeIndex((prevIndex) =>
      prevIndex === offices.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentOffice = offices[currentOfficeIndex];

  const mantraItems = [
    {
      icon: innovation,
      title: "Innovation",
      description:
        "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu.",
    },
    {
      icon: Accountability,
      title: "Accountability",
      description:
        "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu.",
    },
    {
      icon: Commitment,
      title: "Commitment",
      description:
        "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu.",
    },
    {
      icon: Openness,
      title: "Openness",
      description:
        "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu.",
    },
    {
      icon: Execution,
      title: "Execution",
      description:
        "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu.",
    },
    {
      icon: Leadership,
      title: "Leadership",
      description:
        "Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a nunc id lectus facilisi justo eu.",
    },
  ];
  return (
    <div>
      {/* page1 */}
      <div className="grid lg:grid-cols-2 grid-cols-1  items-center h-svh  justify-center py-4 bg-[#f6f8ff]">
        <div className="w-full mx-8 ">
          <Image
            src={Aboutfirm}
            alt="Abstract blue and white wavy background"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full mr-16 ml-6 px-10 text-left">
          <h1 className="lg:text-6xl text-4xl font-semibold text-gray-900 mb-4">
            About{" "}
          </h1>
          <h1 className="lg:text-6xl text-4xl font-semibold text-gray-900 mb-4">
            our Company
          </h1>
          <p className="text-gray-600 mb-6 mr-36">
            Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
            dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
            tellus felis leo vestibulum ut neque mus. Tempus arcu metus.
          </p>
          <div className="flex space-x-4 mb-6">
            <div className="flex flex-col md:justify-center md:flex-row lg:justify-self-start lg:flex-row space-y-5 md:space-y-0 md:space-x-4 lg:space-x-6">
              <Button text="Join our team" href="/your-link-here" />
              <SecondaryButton text="Learn more" />
            </div>
          </div>

          {/* Use the ScrollingLogos component */}
          <ScrollingLogos />
        </div>
      </div>
      {/* page2  */}
      <div className="max-w-7xl mx-auto p-6 bg-white">
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <span className="text-blue-500 text-lg font-semibold">02/</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur. Nibh ut consequat gravida
              nam leo in sed lectus massa. Nulla egestas fringilla aliquet at.
              Tortor sit tortor enim eu porta proin. Quis tincidunt mi aliquam
              hendrerit velit. A eros in quis enim dolor venenatis.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={mission}
              alt="Our Mission"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex justify-center items-center order-2 md:order-1">
            <Image
              src={vision}
              alt="Our Vision"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <span className="text-blue-500 text-lg font-semibold">03/</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Our Vision
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur. Nibh ut consequat gravida
              nam leo in sed lectus massa. Nulla egestas fringilla aliquet at.
              Tortor sit tortor enim eu porta proin. Quis tincidunt mi aliquam
              hendrerit velit. A eros in quis enim dolor venenatis.
            </p>
          </div>
        </div>
      </div>
      {/* page4 */}
      <div className="p-8 bg-[#F5F7FF] min-h-screen">
        {/* Section Header */}
        <div className="text-[#4A4A68] text-sm mb-2">04/</div>
        <h1 className="text-4xl font-bold text-[#1A1A3F] mb-4">
          The Story Behind
        </h1>
        <p className="text-[#4A4A68] mb-8">
          Lorem ipsum dolor sit amet consectetur. Nibh ut consequat gravida nam
          leo in sed lectus massa. Nulla egestas fringilla aliquet at. Tortor
          sit tortor.
        </p>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#1A1A3F] mb-4">2025</h2>
            <p className="text-[#4A4A68]">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#1A1A3F] mb-4">2023</h2>
            <p className="text-[#4A4A68]">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-[#1A1A3F] mb-4">2021</h2>
            <p className="text-[#4A4A68]">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo.
            </p>
          </div>
        </div>
      </div>
      {/* page5 */}
      <div className="bg-gray-100 py-16 px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 text-lg">05/</p>
          <h1 className="text-4xl font-bold text-gray-800">Our Mantra</h1>
        </div>

        {/* Mantra Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mantraItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={50}
                height={50}
                className="mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* page 7 */}

      <div className="bg-white text-gray-900 ">
        <div className="px-4 lg:py-16 lg:mx-48 mx-4 py-8">
          {/* Heading Section */}
          <div className="flex justify-between gap-6 lg:gap-1 text-left mb-12 ">
            <h1 className="lg:text-5xl text-3xl lg:w-1/3 w-full lg:content-end  content-center font-bold text-gray-900">
              Our partners
            </h1>
            <p className="text-gray-500 lg:w-2/5 w-full lg:text-xl text-base mt-4">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet
              tellus felis leo vestibulum ut neque mus.
            </p>
          </div>
          {/* Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <Button text="Pitch Your Startup" href="/your-link-here" />
            <SecondaryButton text="   Browse all team members " />
          </div>
        </div>
      </div>
      {/* page7 */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="flex ">
          <h1 className="text-4xl font-semibold ">Visit our offices</h1>
          {/* Navigation Buttons */}
          <div className="flex   ">
            <button
              className="flex items-center justify-center px-6 py-3 text-black hover:text-white border border-gray-300 hover:bg-blue-600 rounded-l-full bg-white"
              onClick={handlePrevious}
            >
              <IoMdArrowBack className="text-xl " />
            </button>
            <button
              className="flex items-center justify-center px-6 py-3 text-black hover:text-white border border-gray-300 hover:bg-blue-600 rounded-r-full bg-white"
              onClick={handleNext}
            >
              <IoMdArrowForward className="text-xl " />
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start">
          <Image
            src={currentOffice.image}
            alt={`Image of ${currentOffice.name}`}
            className="rounded-lg w-full md:w-1/2 mb-6 md:mb-0 md:mr-6"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">
              {currentOffice.name}
            </h2>

            <p className="text-gray-600 mb-4">{currentOffice.description}</p>
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope text-blue-600 mr-2"></i>
              <span className="text-gray-800">Email:</span>
              <span className="ml-2 text-gray-600">{currentOffice.email}</span>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
              <span className="text-gray-800">Location:</span>
              <span className="ml-2 text-gray-600">
                {currentOffice.location}
              </span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-blue-600 mr-2"></i>
              <span className="text-gray-800">Phone number:</span>
              <span className="ml-2 text-gray-600">{currentOffice.phone}</span>
            </div>
          </div>
        </div>
        {/* <div className="flex mt-6">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 p-2 rounded-full mr-2 hover:bg-gray-300"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div> */}
      </div>
    </div>
  );
}
