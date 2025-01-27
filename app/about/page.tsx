"use client";
import React, { useState } from "react";
// import Link from 'next/link';
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
import { investors } from "@/app/components/data/investors-data";
import NavigationButton from "@/app/components/NavigationButton";
import email from "@/public/about/email.svg";
import location from "@/public/about/location.svg";
import phone from "@/public/about/phone.svg";

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
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className="bg-[#f6f8ff]">
      {/* page1 */}
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center  justify-center py-8  ">
        {/* right section */}
        <div className="lg:order-2 order-none w-full lg:w-auto lg:text-left text-center  px-8  ">
          <h1 className="lg:text-6xl text-4xl font-semibold text-gray-900 mb-4">
            About{" "}
          </h1>
          <h1 className="lg:text-6xl text-4xl font-semibold text-gray-900 mb-4">
            our Company
          </h1>
          <p className="text-gray-600 mb-6 lg:mr-36 mr-0">
            Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit.
            In a nunc id lectus facilisi justo eu egestas amet tellus felis leo vestibulum ut neque mus.
            Tempus arcu metus.
          </p>
          <div className="flex lg:space-x-4 space-x-0 mb-6 lg:mr-16 mr-0">
            <div className="flex flex-col justify-center  lg:justify-start w-full md:flex-row lg:justify-self-start lg:flex-row space-y-5 md:space-y-0 md:space-x-4 lg:space-x-6">
              <Button text="Join our team" href="/your-link-here" />
              <SecondaryButton text="Learn more" />
            </div>

          </div>

          {/* Use the ScrollingLogos component */}
          <ScrollingLogos />
        </div>
        {/* left section */}
        <div className="lg:order-1 order-none flex justify-center items-center px-8">
          <Image
            src={Aboutfirm}
            alt="Abstract blue and white wavy background"
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* page2  */}
      <div className=" mx-auto rounded-3xl overflow-hidden bg-white p-8 lg:px-28 px-10">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4 ">
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
              className="rounded-2xl shadow-lg"

            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div className="flex justify-center items-center order-2 lg:order-1">
            <Image
              src={vision}
              alt="Our Vision"
              className="rounded-2xl shadow-lg"

            />
          </div>
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Our Vision
            </h2>
            <p className="text-gray-600 mt-4 ">
              Lorem ipsum dolor sit amet consectetur. Nibh ut consequat gravida
              nam leo in sed lectus massa. Nulla egestas fringilla aliquet at.
              Tortor sit tortor enim eu porta proin. Quis tincidunt mi aliquam
              hendrerit velit. A eros in quis enim dolor venenatis.
            </p>
          </div>
        </div>
      </div>
      {/* page4 */}
      <div className="py-12 bg-[#f6f8ff]">
        <div className="lg:w-2/5 lg:mx-0  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="lg:text-left text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">The story behind</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Nibh ut consequat gravida nam leo in sed
              lectus massa. Nulla egestas fringilla aliquet at. Tortor sit tortor.
            </p>
          </div>

        </div>
        {/* Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 px-8 gap-6">
          {/* Card 2025 */}
          <div className="bg-white rounded-3xl p-10 py-24 shadow-md">
            <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">2025</h3>
            <p className="text-gray-600 text-base lg:text-lg">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a
              nunc id lectus facilisi justo eu egestas amet tellus felis leo.
            </p>
          </div>

          {/* Card 2025 */}
          <div className="bg-white rounded-3xl p-10 py-24 shadow-md">

            <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">2025</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a
              nunc id lectus facilisi justo eu egestas amet tellus felis leo.
            </p>
          </div>

          {/* Card 2021 */}
          <div className="bg-white rounded-3xl p-10 py-24 shadow-md">

            <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">2021</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor amet consectetur diam nulla nullam mauris turpis dis mi sit. In a
              nunc id lectus facilisi justo eu egestas amet tellus felis leo.
            </p>
          </div>
        </div>
      </div>
      {/* page5 */}
      <div className=" py-16 lg:px-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Mantra</h1>
        </div>

        {/* Mantra Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 text-left lg:grid-cols-3 gap-8">
          {mantraItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  text-left  p-6   transition-shadow duration-300"
            >
              <Image
                src={item.icon}
                alt={item.title}
                className="mb-6 "
              />
              <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Page 7 */}
      <div className="bg-white text-gray-900">
        <div className="px-4 lg:py-16 lg:mx-48 mx-4 py-8">
          {/* Heading Section */}
          <div className="flex justify-between gap-6 lg:gap-1 text-left mb-12">
            <h1 className="lg:text-5xl text-3xl lg:w-1/3 w-full font-bold text-gray-900">
              Our partners
            </h1>
            <p className="text-gray-500 lg:w-2/5 w-full lg:text-xl text-base mt-4">
              Lorem ipsum dolor sit amet consectetur diam nulla nullam mauris turpis
              dis mi sit. In a nunc id lectus facilisi justo eu egestas amet tellus
              felis leo vestibulum ut neque mus.
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
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button text="Pitch Your Startup" href="/your-link-here" />
            <SecondaryButton text="Browse all team members" />
          </div>
        </div>
      </div>
      {/* page 7 */}
      {/* Visit Our Offices */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 lg:px-20 px-4">
        {/* Heading and Navigation */}
        <div className="flex justify-between w-full lg:px-30 mb-6">
          <h1 className="text-5xl font-semibold">Visit our offices</h1>
          <div className=" hidden md:flex">
            <NavigationButton direction="prev" onClick={handlePrevious} />
            <NavigationButton direction="next" onClick={handleNext} />
          </div>
        </div>
        <div className=" p-6 flex lg:flex-row flex-col-reverse   items-center md:items-start lg:gap-6 lg:px-12">
          {/* Office Image */}
          <Image
            src={currentOffice.image}
            alt={`Image of ${currentOffice.name}`}
            className="rounded-3xl w-full lg:w-1/2 mb-6 md:mb-0"
          />
          {/* Office Details */}
          <div className="flex flex-col ">
            <h2 className="md:text-4xl text-3xl font-semibold lg:mx-8 mx-0">{currentOffice.name}</h2>
            <p className="text-gray-600 lg:pr-16 lg:ml-8 mb-4">{currentOffice.description}</p>
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2  ">
              <div className="flex flex-col  lg:ml-8 ml-2">
                <div className="flex lg:items-start items-center">

                  <Image src={email} alt="Email" className=" mr-2 lg:mt-1" />
                  <span className="text-black  text-2xl">Email</span>
                </div>
                <span className="mx-8 my-1 text-wrap text-gray-800">{currentOffice.email}</span>
              </div>
              <div className="flex flex-col ">
                <div className="flex">
                  <Image src={location} alt="Location" className=" mr-2 lg:mt-1" />
                  <span className="text-black text-2xl">Location</span>
                </div>
                <span className="mx-8 my-1 text-gray-800">{currentOffice.location}</span>
              </div>
              <div className="flex flex-col  lg:ml-8 ml-2">
                <div className="flex lg:items-start items-center">
                  <Image src={phone} alt="Phone" className=" mr-2 lg:mt-1" />
                  <span className="text-black text-2xl">Phone</span>
                </div>
                <span className="mx-8 my-1 text-gray-800">{currentOffice.phone}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Buttons for Small Screens */}
        <div className="mt-2 sm:hidden flex ">
          <NavigationButton direction="prev" onClick={handlePrevious} />
          <NavigationButton direction="next" onClick={handleNext} />
        </div>
      </div>

    </div>
  );
}
