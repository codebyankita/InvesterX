// "use client";
// import React, { useState } from "react";
// // import Link from 'next/link';
// import Image from "next/image";
// import Aboutfirm from "@/public/about/aboutfirm.webp";
// import ScrollingLogos from "../components/ScrollingLogos";
// import Button from "@/app/components/Button";
// import SecondaryButton from "@/app/components/SecondButton";
// import mission from "@/public/about/ourmission.webp";
// import vision from "@/public/about/ourvision.webp";
// import innovation from "@/public/about/innovation.webp";
// import Accountability from "@/public/about/accountibility.webp";
// import Commitment from "@/public/about/commitment.webp";
// import Openness from "@/public/about/openness.webp";
// import Execution from "@/public/about/execution.webp";
// import Leadership from "@/public/about/leadership.webp";
// import PartnerCard from "../components/PartnerCard";
// import vietnam from "@/public/about/office.webp";
// import Ny from "@/public/about/office.webp";
// import { investors } from "@/app/components/data/investors-data";
// // import NavigationButton from "@/app/components/NavigationButton";
// import email from "@/public/about/email.webp";
// import location from "@/public/about/location.webp";
// import phone from "@/public/about/phone.webp";
// import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
// import NavigationButton from "../components/NavigationButton";

// const offices = [
//   {
//     id: "silicon-valley",
//     name: "SILICON VALLEY",
//     // description:
//     //   "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proi.",
//     email: "newyork@invstor.com",
//     location: "744 San Antonio Road, Palo Alto, CA 94303 ",
//     phone: "(414) 793 - 0681",
//     image: Ny, // Update with actual image path
//   },
//   {
//     id: "vietnam",
//     name: "VIETNAM",
//     // description:
//     //   "Lorem ipsum dolor sit amet consectetur. Mi vitae diam dolor id in massa commodo vivamus in. Magna convallis non auctor aliquet pellentesque. Vitae massa eu proi.",
//     email: "miami@invstor.com",
//     location: "Dai Phu Gia Urban Area, Nhon Binh Ward, Quy Nhon City, Binh Dinh Province",
//     phone: "(414) 793 - 0681",
//     image: vietnam, // Update with actual image path
//   },
// ];
// export default function about() {
//   // Slice the first 4 investors for Home or About page
//   const limitedInvestors = investors.slice(0, 4);
//   const [currentOfficeIndex, setCurrentOfficeIndex] = useState(0);
//   // Assuming you want to display only the New York office:
//   // const currentOffice = offices.find((office) => office.id === "vietnam");

//   const handlePrevious = () => {
//     setCurrentOfficeIndex((prevIndex) =>
//       prevIndex === 0 ? offices.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentOfficeIndex((prevIndex) =>
//       prevIndex === offices.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const currentOffice = offices[currentOfficeIndex];

//   const mantraItems = [
//     {
//       icon: innovation,
//       title: "Innovation",
//       description:
//         "We embrace bold ideas and foster groundbreaking solutions that challenge the status quo. At Angelica Capital, innovation is the heart of everything we do, driving us to redefine possibilities in the Web3 space.",
//     },
//     {
//       icon: Accountability,
//       title: "Accountability",
//       description:
//         "We uphold transparency and responsibility in every decision we make. Trust is the foundation of our partnerships, and we are committed to delivering on our promises with integrity.",
//     },
//     {
//       icon: Commitment,
//       title: "Commitment",
//       description:
//         "Our dedication to excellence fuels our actions. We are deeply committed to empowering visionary founders and investing in transformative technologies that create meaningful impact.",
//     },
//     {
//       icon: Openness,
//       title: "Openness",
//       description:
//         "We champion inclusivity and collaboration, fostering an environment where diverse perspectives thrive. Openness drives our approach to partnerships and fuels creativity in the decentralized future.",
//     },
//     {
//       icon: Execution,
//       title: "Execution",
//       description:
//         "Great ideas mean nothing without action. At Angelica Capital, we prioritize precise execution, turning visionary concepts into tangible outcomes that drive innovation forward.",
//     },
//     {
//       icon: Leadership,
//       title: "Leadership",
//       description:
//         "Leadership is about inspiring progress and setting the standard for excellence. We aim to lead by example, guiding the Web3 community toward a brighter, decentralized future.",
//     },
//   ];
//   return (
//     <div className="bg-[#f6f8ff]">
//       {/* page1 */}
//       <div className="grid lg:grid-cols-2 grid-cols-1 items-center  justify-center py-8  ">
//         {/* right section */}
//         <div className="lg:order-2 order-none w-full lg:w-auto lg:text-left text-center  px-8  ">
//           <ScrollAnimationWrapper>
//             <h1 className="lg:text-4xl xl:text-6xl text-4xl font-semibold text-gray-900 mb-4">
//               About{" "}
//             </h1>
//             <h1 className="lg:text-4xl xl:text-6xl text-4xl font-semibold text-gray-900 mb-4">
//               our Company
//             </h1>
//             <p className="text-gray-600 mb-6 xl:mr-36 mr-0">
//               At Angelica Capital, we are dedicated to empowering visionary
//               founders and trailblazing companies in the Web3 ecosystem. As a
//               venture capital firm, we specialize in fostering innovation across
//               blockchain, decentralized technologies, and next-generation
//               protocols. Our mission is to drive transformative growth, enabling
//               a decentralized future where technology serves humanity.
//             </p>
//             <div className="flex lg:space-x-4 space-x-0 mb-6 lg:mr-16 mr-0">
//               <div className="flex flex-col justify-center  lg:justify-start w-full md:flex-row lg:justify-self-start lg:flex-row space-y-5 md:space-y-0 md:space-x-4 lg:space-x-6">
//                 <Button text="Join our team" />
//                 <SecondaryButton text="Learn more" />
//               </div>
//             </div>

//             {/* Use the ScrollingLogos component */}

//             <ScrollingLogos />
//           </ScrollAnimationWrapper>
//         </div>
//         {/* left section */}
//         <div className="lg:order-1 order-none flex justify-center lg:content-center items-center px-8">
//           <ScrollAnimationWrapper>
//             <Image
//               src={Aboutfirm}
//               alt="Abstract blue and white wavy background"
//               className="rounded-2xl"
//             />
//           </ScrollAnimationWrapper>
//         </div>
//       </div>

//       {/* page2  */}
//       <div className=" mx-auto rounded-3xl overflow-hidden bg-white p-8 lg:px-20 xl:px-28 px-10">
//         {/* Mission Section */}
//         <ScrollAnimationWrapper>
//           <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
//             <div className="flex flex-col justify-center">
//               <h2 className="text-4xl font-bold text-gray-900 mt-2">
//                 Our Mission
//               </h2>
//               <p className="text-gray-600 mt-4 ">
//                 At Angelica, our mission is to revolutionize the landscape of
//                 Web3 technologies by championing innovative startups and
//                 transformative projects.
//               </p>
//               <p className="text-gray-600 mt-4 ">
//                 We believe in fostering creativity and bold ideas, providing not
//                 just capital, but also strategic insights, specialized
//                 knowledge, and a dynamic network.
//               </p>
//               <p className="text-gray-600 mt-4 ">
//                 Together, we empower visionary entrepreneurs to push the
//                 boundaries of possibility, creating a decentralized,
//                 transparent, and inclusive digital future that redefines
//                 innovation for all.
//               </p>
//               {/* </ScrollAnimationWrapper> */}
//             </div>
//             <div className="flex justify-center items-center">
//               {/* <ScrollAnimationWrapper> */}
//               <Image
//                 src={mission}
//                 alt="Our Mission"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//           </div>
//         </ScrollAnimationWrapper>

//         {/* Vision Section */}
//         <ScrollAnimationWrapper>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
//             <div className="flex justify-center items-center order-2 lg:order-1">
//               <Image
//                 src={vision}
//                 alt="Our Vision"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//             <div className="flex flex-col justify-center order-1 lg:order-2">
//               <h2 className="text-4xl font-bold text-gray-900 mt-2">
//                 Our Vision
//               </h2>
//               <p className="text-gray-600 mt-4 ">
//                 At Angelica, our vision is to empower a new era of financial
//                 freedom through decentralized finance (DeFi). We believe in a
//                 world where financial systems are transparent, accessible, and
//                 inclusive for everyone. By leveraging the transformative power
//                 of blockchain technology, we aim to dismantle traditional
//                 barriers and create opportunities for all.
//               </p>
//               <p className="text-gray-600 mt-4 ">
//                 Our commitment to innovation drives us to support projects that
//                 prioritize user sovereignty, allowing individuals to take
//                 control of their financial destinies. We envision a thriving
//                 ecosystem where smart contracts and decentralized applications
//                 redefine how value is exchanged, stored, and managed.
//               </p>
//               <p className="text-gray-600 mt-4 ">
//                 Together with our partners, we aspire to cultivate a community
//                 of forward-thinking entrepreneurs and developers who are
//                 passionate about reshaping the financial landscape. At Angelica,
//                 we are not just investors; we are catalysts for change, working
//                 tirelessly to build a future where financial services are fair,
//                 efficient, and truly decentralized.
//               </p>
//             </div>
//           </div>
//         </ScrollAnimationWrapper>
//       </div>
//       {/* page4 */}
//       <div className="py-12 bg-[#f6f8ff]">
//         <div className=" w-full lg:px-10 mx-auto px-4 ">
//           {/* Header Section */}
//           <div className=" text-center mb-12">
//             <ScrollAnimationWrapper>
//               <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
//                 THE STORY BEHIND: THE HUNCH
//               </h2>
//               <p className="text-gray-600">
//                 In 2025, Angelica Capital was founded with a simple yet powerful
//                 idea: to enable a decentralized future through strategic
//                 investments in Web3 technologies. We started as a small team of
//                 visionaries with a passion for empowering innovators to create
//                 lasting change.
//               </p>
//             </ScrollAnimationWrapper>
//           </div>
//         </div>
//         {/* Timeline Cards */}
//         <ScrollAnimationWrapper>
//           <div className="grid grid-cols-1 lg:grid-cols-3 px-8 gap-6">
//             {/* Card 2025 */}
//             <div className="bg-white rounded-3xl p-10  shadow-md">
//               <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
//                 2025
//               </h3>
//               <p className="text-gray-600 text-base lg:text-lg">
//                 Our board members hail from vibrant corners of the globe,
//                 including Vietnam, India, and Japan…and we are growing more.
//                 While we may differ in skin color, culture, and heritage, we are
//                 united by a shared mindset.
//               </p>
//             </div>

//             {/* Card 2025 */}
//             <div className="bg-white rounded-3xl p-10  shadow-md">
//               <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
//                 2025
//               </h3>
//               <p className="text-gray-600">
//                 We are here as proof that diversity is a powerful catalyst for
//                 change. Nothing can stop us from driving a strong transformation
//                 of the world. Our varied experiences and insights empower us to
//                 tackle challenges head-on, turning obstacles into opportunities
//                 for innovation.
//               </p>
//             </div>

//             {/* Card 2025 */}
//             <div className="bg-white rounded-3xl p-10  shadow-md">
//               <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
//                 2025
//               </h3>
//               <p className="text-gray-600">
//                 Together, we embrace our differences, knowing that they enhance
//                 our collective strength. As we unite our voices and visions, we
//                 are committed to inspiring others and fostering a future where
//                 transformation knows no bounds. With resilience and
//                 determination, we stand ready to make a lasting impact, proving
//                 that together, we can shape a brighter tomorrow for all.
//               </p>
//             </div>
//           </div>
//         </ScrollAnimationWrapper>
//       </div>
//       {/* page5 */}
//       <div className=" py-16 lg:px-10 px-6">
//         <ScrollAnimationWrapper>
//           {/* Section Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800">Our Mantra</h1>
//           </div>

//           {/* Mantra Items */}
//           <div className="grid grid-cols-1 md:grid-cols-2 text-left lg:grid-cols-3 gap-8">
//             {mantraItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col  text-left  p-6   transition-shadow duration-300"
//               >
//                 <Image src={item.icon} alt={item.title} className="mb-6 " />
//                 <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
//                   {item.title}
//                 </h2>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </ScrollAnimationWrapper>
//       </div>
//       {/* Page 7 */}
//       <div className="bg-white text-gray-900 rounded-3xl overflow-hidden">
//         <div className="px-4 lg:py-8 xl:py-16 lg:mx-20 xl:mx-48 mx-4 py-8">
//           {/* Heading Section */}
//           <ScrollAnimationWrapper>
//             <div className="flex flex-col justify-center my-8 ">
//               <h2 className="text-4xl font-bold text-gray-900 mt-2">
//                 Our Commitment to the Ecosystem
//               </h2>
//               <p className="text-gray-600 mt-4 ">
//                 At Angelica, we take our role in the ecosystem seriously. We
//                 understand that our actions today shape the world of tomorrow.
//                 With unwavering confidence, we embrace our mission to connect
//                 Vietnam to global opportunities, showcasing its potential on the
//                 international stage.
//               </p>
//               <p className="text-gray-600 mt-4 ">
//                 Our diverse board leverages its collective expertise to foster
//                 collaboration and innovation. We believe in empowering local
//                 talent and startups, providing them with the resources and
//                 support needed to thrive in a competitive landscape. By
//                 nurturing a robust ecosystem, we aim to elevate Vietnam’s
//                 presence in the global arena, ensuring that its rich culture and
//                 dynamic ideas resonate worldwide.
//               </p>
//               <p className="text-gray-600 mt-4 ">
//                 Together, we are dedicated to building bridges that link Vietnam
//                 to the broader global community, creating pathways for growth,
//                 collaboration, and transformation. We are passionate about
//                 unlocking new possibilities and driving meaningful change,
//                 confident in our ability to make a significant impact on the
//                 world stage.
//               </p>
//             </div>
//             {/* <div className="flex justify-between gap-6 lg:gap-1 text-left mb-12">
//               <h1 className="lg:text-4xl xl:text-5xl text-3xl lg:w-1/2 xl:w-1/3 w-full xl:content-end  content-center font-bold text-gray-900">
//                 Our Commitment to the Ecosystem
//               </h1>
//               <div className="text-gray-500 lg:w-1/2 xl:w-2/5 w-full lg:text-xl text-base mt-4">
//                 <p>
//                   At Angelica, we take our role in the ecosystem seriously. We
//                   understand that our actions today shape the world of tomorrow.
//                   With unwavering confidence, we embrace our mission to connect
//                   Vietnam to global opportunities, showcasing its potential on
//                   the international stage.
//                 </p>
//                 <br />
//                 <p>
//                   Our diverse board leverages its collective expertise to foster
//                   collaboration and innovation. We believe in empowering local
//                   talent and startups, providing them with the resources and
//                   support needed to thrive in a competitive landscape. By
//                   nurturing a robust ecosystem, we aim to elevate Vietnam’s
//                   presence in the global arena, ensuring that its rich culture
//                   and dynamic ideas resonate worldwide.
//                 </p>
//                 <br />
//                 <p>
//                   Together, we are dedicated to building bridges that link
//                   Vietnam to the broader global community, creating pathways for
//                   growth, collaboration, and transformation. We are passionate
//                   about unlocking new possibilities and driving meaningful
//                   change, confident in our ability to make a significant impact
//                   on the world stage.
//                 </p>
//                 <br />
//               </div>
//             </div> */}
//           </ScrollAnimationWrapper>
//           {/* Partner Cards */}
//           <ScrollAnimationWrapper>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {limitedInvestors.map((investor) => (
//                 <PartnerCard
//                   key={investor.id}
//                   id={investor.id}
//                   image={investor.image}
//                   name={investor.name}
//                   title={investor.title}
//                 />
//               ))}
//             </div>
//           </ScrollAnimationWrapper>

//           {/* Footer Buttons */}
//           <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
//             <Button text="Pitch Your Startup" />
//             <SecondaryButton text="Browse all team members" />
//           </div>
//         </div>
//       </div>
//       {/* page 7 */}
//       {/* Visit Our Offices */}
//       <div className="flex flex-col items-center justify-center min-h-screen p-4 lg:px-16 xl:px-20 px-4">
//         {/* Heading and Navigation */}
//         <div className="flex justify-between w-full lg:px-16 xl:px-30 mb-6">
//           <h1 className="text-5xl font-semibold">Visit our offices</h1>
//           <div className=" hidden md:flex">
//             <NavigationButton direction="prev" onClick={handlePrevious} />
//             <NavigationButton direction="next" onClick={handleNext} />
//           </div>
//         </div>
//         {/* <div className="flex flex-col items-center justify-center min-h-screen p-4 lg:px-16 xl:px-20 px-4">
//         {/* Heading and Navigation */}

//         {/* <div className="flex flex-row justify-between w-full lg:px-16 xl:px-30 mb-6">
//           <ScrollAnimationWrapper>
//             <h1 className="text-5xl font-semibold">Visit our offices</h1>
//             <div className=" hidden md:flex">
//               <NavigationButton direction="prev" onClick={handlePrevious} />
//               <NavigationButton direction="next" onClick={handleNext} />
//             </div>
//           </ScrollAnimationWrapper>
//         </div> */}

//         <ScrollAnimationWrapper>
//           <div className=" p-6 flex lg:flex-row flex-col-reverse   items-center md:items-start lg:gap-3 xl:gap-6 lg:px-4 xl:px-10">

//             {/* Office Image */}
//             <Image
//               src={Ny}
//               alt={`Image of ${currentOffice?.name}`}
//               className="rounded-3xl w-full lg:w-1/2 mb-6 md:mb-0"
//             />
//             {/* Office Details */}
//             <div className="flex flex-col ">
//               <h2 className="md:text-4xl text-3xl font-semibold lg:mx-4 xl:mx-8 mx-0">
//                 {currentOffice?.name}
//               </h2>
//               <p className="text-gray-600 lg:pr-8 xl:pr-16 lg:ml-4 xl:ml-8 mb-4">
//                 {/* {currentOffice?.description} */}
//               </p>
//               {/* Contact Details */}
//               <div className="grid grid-cols-1 md:grid-cols-2  ">
//                 <div className="flex flex-col  lg:ml-4 xl:ml-8 ml-2">
//                   <div className="flex lg:items-start items-center">
//                     <Image src={email} alt="Email" className=" mr-2 lg:mt-1" />
//                     <span className="text-black  text-2xl">Email</span>
//                   </div>
//                   <span className="mx-8 my-1 text-wrap text-gray-800">
//                     {currentOffice?.email}
//                   </span>
//                 </div>
//                 <div className="flex flex-col ">
//                   <div className="flex">
//                     <Image
//                       src={location}
//                       alt="Location"
//                       className=" mr-2 lg:mt-1"
//                     />
//                     <span className="text-black text-2xl">Location</span>
//                   </div>
//                   <span className="mx-8 my-1 text-gray-800">
//                     {currentOffice?.location}
//                   </span>
//                 </div>
//                 <div className="flex flex-col  lg:ml-4 xl:ml-8 ml-2">
//                   <div className="flex lg:items-start items-center">
//                     <Image src={phone} alt="Phone" className=" mr-2 lg:mt-1" />
//                     <span className="text-black text-2xl">Phone</span>
//                   </div>
//                   <span className="mx-8 my-1 text-gray-800">
//                     {currentOffice?.phone}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </ScrollAnimationWrapper>
//         {/* Navigation Buttons for Small Screens */}
//         <div className="mt-2 sm:hidden flex ">
//           <NavigationButton direction="prev" onClick={handlePrevious} />
//           <NavigationButton direction="next" onClick={handleNext} />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Aboutfirm from "@/public/about/aboutfirm.webp";
import ScrollingLogos from "../components/ScrollingLogos";
import Button from "@/app/components/Button";
import SecondaryButton from "@/app/components/SecondButton";
import mission from "@/public/about/ourmission.webp";
import vision from "@/public/about/ourvision.webp";
import innovation from "@/public/about/innovation.webp";
import Accountability from "@/public/about/accountibility.webp";
import Commitment from "@/public/about/commitment.webp";
import Openness from "@/public/about/openness.webp";
import Execution from "@/public/about/execution.webp";
import Leadership from "@/public/about/leadership.webp";
import PartnerCard from "../components/PartnerCard";
import vietnam from "@/public/about/office.webp";
import ca from "@/public/about/caoffice.webp";

import { investors } from "@/app/components/data/investors-data";
import email from "@/public/about/email.webp";
import location from "@/public/about/location.webp";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";
import NavigationButton from "../components/NavigationButton";

const offices = [
  {
    id: "silicon-valley",
    name: "SILICON VALLEY",
    email: "Pitch@angelica.capital",
    location: "744 San Antonio Road, Palo Alto, CA 94303 ",
    // phone: "(414) 793 - 0681",
    image: ca,
  },
  {
    id: "vietnam",
    name: "VIETNAM",
    email: "Pitch@angelica.capital",
    location:
      "Dai Phu Gia Urban Area, Nhon Binh Ward, Quy Nhon City, Binh Dinh Province",
    // phone: "(414) 793 - 0681",
    image: vietnam,
  },
];

// Renamed to About (uppercase) to comply with React component naming rules
export default function About() {
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
        "We embrace bold ideas and foster groundbreaking solutions that challenge the status quo. At Angelica Capital, innovation is the heart of everything we do, driving us to redefine possibilities in the Web3 space.",
    },
    {
      icon: Accountability,
      title: "Accountability",
      description:
        "We uphold transparency and responsibility in every decision we make. Trust is the foundation of our partnerships, and we are committed to delivering on our promises with integrity.",
    },
    {
      icon: Commitment,
      title: "Commitment",
      description:
        "Our dedication to excellence fuels our actions. We are deeply committed to empowering visionary founders and investing in transformative technologies that create meaningful impact.",
    },
    {
      icon: Openness,
      title: "Openness",
      description:
        "We champion inclusivity and collaboration, fostering an environment where diverse perspectives thrive. Openness drives our approach to partnerships and fuels creativity in the decentralized future.",
    },
    {
      icon: Execution,
      title: "Execution",
      description:
        "Great ideas mean nothing without action. At Angelica Capital, we prioritize precise execution, turning visionary concepts into tangible outcomes that drive innovation forward.",
    },
    {
      icon: Leadership,
      title: "Leadership",
      description:
        "Leadership is about inspiring progress and setting the standard for excellence. We aim to lead by example, guiding the Web3 community toward a brighter, decentralized future.",
    },
  ];

  return (
    <div className="bg-[#f6f8ff]">
      {/* page1 */}
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center py-8">
        {/* right section */}
        <div className="lg:order-2 order-none w-full lg:w-auto lg:text-left text-center px-8">
          <ScrollAnimationWrapper>
            <h1 className="lg:text-4xl xl:text-6xl text-4xl font-semibold text-gray-900 mb-4">
              About{" "}
            </h1>
            <h1 className="lg:text-4xl xl:text-6xl text-4xl font-semibold text-gray-900 mb-4">
              our Company
            </h1>
            <p className="text-gray-600 mb-6 xl:mr-36 mr-0">
              At Angelica Capital, we are dedicated to empowering visionary
              founders and trailblazing companies in the Web3 ecosystem. As a
              venture capital firm, we specialize in fostering innovation across
              blockchain, decentralized technologies, and next-generation
              protocols. Our mission is to drive transformative growth, enabling
              a decentralized future where technology serves humanity.
            </p>
            <div className="flex lg:space-x-4 space-x-0 mb-6 lg:mr-16 mr-0">
              <div className="flex flex-col justify-center lg:justify-start w-full md:flex-row lg:justify-self-start lg:flex-row space-y-5 md:space-y-0 md:space-x-4 lg:space-x-6">
                <Button text="Join our team" />
                <SecondaryButton text="Learn more" />
              </div>
            </div>
            <ScrollingLogos />
          </ScrollAnimationWrapper>
        </div>
        {/* left section */}
        <div className="lg:order-1 order-none flex justify-center lg:content-center items-center px-8">
          <ScrollAnimationWrapper>
            <Image
              src={Aboutfirm}
              alt="Abstract blue and white wavy background"
              className="rounded-2xl"
            />
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* page2 */}
      <div className="mx-auto rounded-3xl overflow-hidden bg-white p-8 lg:px-20 xl:px-28 px-10">
        {/* Mission Section */}
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-4">
                At Angelica, our mission is to revolutionize the landscape of
                Web3 technologies by championing innovative startups and
                transformative projects.
              </p>
              <p className="text-gray-600 mt-4">
                We believe in fostering creativity and bold ideas, providing not
                just capital, but also strategic insights, specialized
                knowledge, and a dynamic network.
              </p>
              <p className="text-gray-600 mt-4">
                Together, we empower visionary entrepreneurs to push the
                boundaries of possibility, creating a decentralized,
                transparent, and inclusive digital future that redefines
                innovation for all.
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
        </ScrollAnimationWrapper>

        {/* Vision Section */}
        <ScrollAnimationWrapper>
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
              <p className="text-gray-600 mt-4">
                At Angelica, our vision is to empower a new era of financial
                freedom through decentralized finance (DeFi). We believe in a
                world where financial systems are transparent, accessible, and
                inclusive for everyone. By leveraging the transformative power
                of blockchain technology, we aim to dismantle traditional
                barriers and create opportunities for all.
              </p>
              <p className="text-gray-600 mt-4">
                Our commitment to innovation drives us to support projects that
                prioritize user sovereignty, allowing individuals to take
                control of their financial destinies. We envision a thriving
                ecosystem where smart contracts and decentralized applications
                redefine how value is exchanged, stored, and managed.
              </p>
              <p className="text-gray-600 mt-4">
                Together with our partners, we aspire to cultivate a community
                of forward-thinking entrepreneurs and developers who are
                passionate about reshaping the financial landscape. At Angelica,
                we are not just investors; we are catalysts for change, working
                tirelessly to build a future where financial services are fair,
                efficient, and truly decentralized.
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* page4 */}
      <div className="py-12 bg-[#f6f8ff]">
        <div className="w-full lg:px-10 mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                THE STORY BEHIND: THE HUNCH
              </h2>
              <p className="text-gray-600">
                In 2025, Angelica Capital was founded with a simple yet powerful
                idea: to enable a decentralized future through strategic
                investments in Web3 technologies. We started as a small team of
                visionaries with a passion for empowering innovators to create
                lasting change.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
        {/* Timeline Cards */}
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-3 px-8 gap-6">
            <div className="bg-white rounded-3xl p-10 shadow-md">
              <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
                2025
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
                Our board members hail from vibrant corners of the globe,
                including Vietnam, India, and Japan…and we are growing more.
                While we may differ in skin color, culture, and heritage, we are
                united by a shared mindset.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-md">
              <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
                2025
              </h3>
              <p className="text-gray-600">
                We are here as proof that diversity is a powerful catalyst for
                change. Nothing can stop us from driving a strong transformation
                of the world. Our varied experiences and insights empower us to
                tackle challenges head-on, turning obstacles into opportunities
                for innovation.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-md">
              <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">
                2025
              </h3>
              <p className="text-gray-600">
                Together, we embrace our differences, knowing that they enhance
                our collective strength. As we unite our voices and visions, we
                are committed to inspiring others and fostering a future where
                transformation knows no bounds. With resilience and
                determination, we stand ready to make a lasting impact, proving
                that together, we can shape a brighter tomorrow for all.
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* page5 */}
      <div className="py-16 lg:px-10 px-6">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">Our Mantra</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-left lg:grid-cols-3 gap-8">
            {mantraItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col text-left p-6 transition-shadow duration-300"
              >
                <Image src={item.icon} alt={item.title} className="mb-6" />
                <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Page 7 */}
      <div className="bg-white text-gray-900 rounded-3xl overflow-hidden">
        <div className="px-4 lg:py-8 xl:py-16 lg:mx-20 xl:mx-48 mx-4 py-8">
          <ScrollAnimationWrapper>
            <div className="flex flex-col justify-center my-8">
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Our Commitment to the Ecosystem
              </h2>
              <p className="text-gray-600 mt-4">
                At Angelica, we take our role in the ecosystem seriously. We
                understand that our actions today shape the world of tomorrow.
                With unwavering confidence, we embrace our mission to connect
                Vietnam to global opportunities, showcasing its potential on the
                international stage.
              </p>
              <p className="text-gray-600 mt-4">
                Our diverse board leverages its collective expertise to foster
                collaboration and innovation. We believe in empowering local
                talent and startups, providing them with the resources and
                support needed to thrive in a competitive landscape. By
                nurturing a robust ecosystem, we aim to elevate Vietnam’s
                presence in the global arena, ensuring that its rich culture and
                dynamic ideas resonate worldwide.
              </p>
              <p className="text-gray-600 mt-4">
                Together, we are dedicated to building bridges that link Vietnam
                to the broader global community, creating pathways for growth,
                collaboration, and transformation. We are passionate about
                unlocking new possibilities and driving meaningful change,
                confident in our ability to make a significant impact on the
                world stage.
              </p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
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
          </ScrollAnimationWrapper>
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button text="Pitch Your Startup" href="/contact-us" />
            <SecondaryButton text="Browse all team members" />
          </div>
        </div>
      </div>

      {/* Visit Our Offices */}
      <div className="flex flex-col  p-4 lg:px-16 xl:px-20 px-4">
        <div className="flex justify-between w-full lg:px-16 xl:px-30 mb-6">
          <h1 className="text-5xl font-semibold">Visit our offices</h1>
          <div className="hidden md:flex">
            <NavigationButton direction="prev" onClick={handlePrevious} />
            <NavigationButton direction="next" onClick={handleNext} />
          </div>
        </div>
        <ScrollAnimationWrapper>
          <div className="p-6 flex lg:flex-row flex-col-reverse items-center md:items-start  ">
            <div className="w-full lg:w-1/2 mb-6 ">
              <Image
                src={currentOffice.image}
                alt={`Image of ${currentOffice?.name}`}
                className="rounded-3xl "
                width={600}
                height={400}
              />
            </div>
            <div className="flex flex-col lg:w-1/2 md:w-full ">
              <h2 className="lg:text-4xl text-3xl font-semibold my-4 xl:mx-8 mx-0">
                {currentOffice?.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="flex items-center  gap-3 ">
                  <Image src={email} alt="Email" width={25}
                    height={25} className="items-center justify-center" />
                  <a
                    href={`mailto:${currentOffice?.email}`}
                    className="text-wrap text-gray-800 hover:text-blue-500 transition-colors"
                  >
                    {currentOffice?.email}
                  </a>
                </div>
                <div className="flex items-center  gap-3 ">
                  <Image src={location} alt="Location" width={20}
                    height={20} className="items-center justify-center" />
                  <span className="text-gray-800 text-wrap">{currentOffice?.location}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
        <div className="mt-2 sm:hidden flex">
          <NavigationButton direction="prev" onClick={handlePrevious} />
          <NavigationButton direction="next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}