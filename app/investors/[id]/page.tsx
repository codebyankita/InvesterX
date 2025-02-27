// //app/investors/[id]/page.tsx
// "use client";
// import React, { use } from "react";
// import Image from "next/image";
// import { investors } from "@/app/components/data/investors-data";
// import { MdOutlineMail } from "react-icons/md";
// import { CiGlobe } from "react-icons/ci";

// type Investor = {
//   id: string;
//   name: string;
//   title: string;
//   description: string;
//   email: string;
//   website: string;
//   articles: string[];
//   image: string;
// };

// type PageProps = {
//   params: Promise<{ id: string }>;
// };

// export default function InvestorPage({ params }: PageProps) {
//   const resolvedParams = use(params); // Resolve the Promise
//   const { id } = resolvedParams;

//   const investor = investors.find((inv) => inv.id === id) as Investor | undefined;

//   if (!investor) {
//     return <div className="text-center text-red-600">Investor not found</div>;
//   }

//   return (
//     <div className="bg-blue-50 py-12">
//       <div className="container mx-auto p-6">
//         {/* Profile Section */}
//         <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-stretch">
//           {/* Investor Profile */}
//           <div className="bg-white p-6 rounded-3xl flex flex-col lg:grid lg:grid-cols-2">
//             <div className="flex justify-center items-center mb-6">
//               <Image
//                 src={investor.image}
//                 alt={`Portrait of ${investor.name}`}
//                 width={200}
//                 height={200}
//                 className="rounded-full"
//               />
//             </div>
//             <div className="text-left">
//               <h2 className="text-blue-600 my-2 text-sm font-semibold">{investor.title}</h2>
//               <h1 className="text-5xl font-bold my-2 text-black">{investor.name}</h1>
//               <p className="text-gray-600 my-2">{investor.description}</p>
//             </div>
//           </div>

//           {/* Additional Info */}
//           <div className="bg-white p-6 rounded-3xl flex flex-col">
//             <h2 className="text-gray-900 text-lg font-semibold">More Information</h2>
//             <p className="text-gray-600 my-2 flex-1">{investor.description}</p>
//             <div className="mt-4">
//               <div className="flex items-center mt-4">
//                 <MdOutlineMail className="mr-2" />
//                 <span className="text-black">Send me a message</span>
//               </div>
//               <a href={`mailto:${investor.email}`} className="text-black text-lg font-bold ml-6">
//                 {investor.email}
//               </a>
//               <div className="flex items-center mt-4">
//                 <CiGlobe className="mr-2" />
//                 <span className="text-black">Visit my Website</span>
//               </div>
//               <a href={investor.website} className="text-black text-lg font-bold ml-6">
//                 {investor.website}
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// // app/investors/[id]/page.tsx
// "use client";
// import React, { use } from "react";
// import Image from "next/image";
// import { investors } from "@/app/components/data/investors-data";
// import { motion, useScroll, useTransform } from "framer-motion";

// type Investor = {
//   id: string;
//   name: string;
//   title: string;
//   description: string[];
//   image: string;
// };

// type PageProps = {
//   params: Promise<{ id: string }>;
// };

// // Animation Variants
// const heroVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const textVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
// };

// export default function InvestorPage({ params }: PageProps) {
//   const resolvedParams = use(params);
//   const { id } = resolvedParams;

//   const investor = investors.find((inv) => inv.id === id) as Investor | undefined;

//   const { scrollY } = useScroll();
//   const yOffset = useTransform(scrollY, [0, 300], [0, -50]);

//   if (!investor) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl font-bold bg-white">
//         Investor Not Found
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
//       {/* Hero Section with Parallax */}
//       <motion.section
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100"
//         initial="hidden"
//         animate="visible"
//         variants={heroVariants}
//       >
//         <motion.div
//           className="absolute inset-0 z-0 opacity-10"
//           style={{ y: yOffset }}
//           transition={{ ease: "easeOut" }}
//         >
//           <Image
//             src={investor.image}
//             alt={`${investor.name} background`}
//             layout="fill"
//             objectFit="cover"
//             className="filter blur-lg"
//           />
//         </motion.div>
//         <div className="relative z-10 text-center px-4">
//           <motion.div
//             className="inline-block mb-6 md:mb-8"
//             whileHover={{ scale: 1.05, rotate: 2 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Image
//               src={investor.image}
//               alt={`Portrait of ${investor.name}`}
//               width={300}
//               height={300}
//               className="rounded-full border-8 border-blue-200 shadow-xl object-cover"
//             />
//           </motion.div>
//           <h1 className="text-4xl  md:text-6xl lg:text-7xl font-extrabold tracking-tight text-custom-blue break-words max-w-full ">
//             {investor.name}
//           </h1>
//           <p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 font-medium text-blue-600">{investor.title}</p>
//         </div>
//         {/* Animated Particles */}
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-blue-400 rounded-full"
//               initial={{ opacity: 0, x: Math.random() * 1000 - 500, y: Math.random() * 1000 - 500 }}
//               animate={{
//                 opacity: [0, 0.8, 0],
//                 y: [0, -100 - Math.random() * 150],
//                 transition: { duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 1.5 },
//               }}
//             />
//           ))}
//         </div>
//       </motion.section>

//       {/* Timeline/Highlights Section */}
//       <section className="py-20 bg-gradient-to-b from-white to-blue-50">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={textVariants}
//         >
//           Key Highlights
//         </motion.h2>
//         <div className="max-w-4xl mx-auto px-6">
//           {investor.description.slice(0, 3).map((highlight, index) => (
//             <motion.div
//               key={index}
//               className="flex items-center mb-12"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//             >
//               <div className="w-12 h-12 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
//                 {index + 1}
//               </div>
//               <div className="ml-6 p-6 bg-white rounded-lg flex-1 shadow-lg border-l-4 border-blue-400">
//                 <p className="text-gray-700 font-medium">{highlight.split(".")[0]}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-600"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={textVariants}
//         >
//           About {investor.name}
//         </motion.h2>
//         <div className="space-y-8">
//           {investor.description.map((paragraph, index) => (
//             <motion.div
//               key={index}
//               className="relative p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={cardVariants}
//               whileHover={{ y: -5, scale: 1.02 }}
//             >
//               <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
//               <p className="text-gray-700 leading-relaxed text-lg italic font-light">
//                 &quot;{paragraph}&quot;
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Call to Action */}
//       <motion.section
//         className="py-20 text-center bg-gradient-to-t from-blue-50 to-white"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={heroVariants}
//       >
//         <h3 className="text-3xl font-semibold text-blue-600 mb-6">
//           Connect with {investor.name}
//         </h3>
//         <motion.a
//           href="mailto:Pitch@angelica.capital"
//           className="inline-block bg-blue-600 text-white py-4 px-10 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all"
//           whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
//           whileTap={{ scale: 0.95 }}
//         >
//           Get in Touch
//         </motion.a>
//       </motion.section>
//     </div>
//   );
// }

// app/investors/[id]/page.tsx
"use client";
import React, { use } from "react";
import Image from "next/image";
import { investors } from "@/app/components/data/investors-data";
import { motion, useScroll, useTransform } from "framer-motion";

type Investor = {
  id: string;
  name: string;
  title: string;
  description: string[];
  image: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

// Animation Variants
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export default function InvestorPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const investor = investors.find((inv) => inv.id === id) as Investor | undefined;

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 300], [0, -50]);

  if (!investor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-2xl font-bold bg-white">
        Investor Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8ff] text-gray-900 overflow-hidden">
      {/* Hero Section with Parallax */}
      <motion.section
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.div
          className="absolute inset-0 z-0 opacity-10"
          style={{ y: yOffset }}
          transition={{ ease: "easeOut" }}
        >
          <Image
            src={investor.image}
            alt={`${investor.name} background`}
            layout="fill"
            objectFit="cover"
            className="filter blur-lg"
          />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            className="inline-block mb-6 md:mb-8"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={investor.image}
              alt={`Portrait of ${investor.name}`}
              width={300}
              height={300}
              className="rounded-full border-8 border-blue-200 shadow-xl object-cover"
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-black break-words max-w-full">
            {investor.name}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 font-medium text-blue-600">{investor.title}</p>
        </div>
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-600 rounded-full"
              initial={{ opacity: 0, x: Math.random() * 1000 - 500, y: Math.random() * 1000 - 500 }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [0, -100 - Math.random() * 150],
                transition: { duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 1.5 },
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Timeline/Highlights Section */}
      <section className="py-20 bg-white">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Key Highlights
        </motion.h2>
        <div className="max-w-4xl mx-auto px-6">
          {investor.description.slice(0, 3).map((highlight, index) => (
            <motion.div
              key={index}
              className="flex items-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="w-12 h-12 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                {index + 1}
              </div>
              <div className="ml-6 p-6 bg-[#f6f8ff] rounded-lg flex-1 shadow-lg border-l-4 border-black">
                <p className="text-gray-900 font-medium">{highlight.split(".")[0]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-[#f6f8ff]">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          About {investor.name}
        </motion.h2>
        <div className="space-y-8">
          {investor.description.map((paragraph, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute top-4 right-4 w-3 h-3 bg-black rounded-full animate-pulse" />
              <p className="text-gray-900 leading-relaxed text-lg italic font-light">
                &quot;{paragraph}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="py-20 text-center bg-gradient-to-t from-white to-[#f6f8ff]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={heroVariants}
      >
        <h3 className="text-3xl font-semibold text-black mb-6">
          Connect with {investor.name}
        </h3>
        <motion.a
          href="mailto:Pitch@angelica.capital"
          className="inline-block bg-blue-600 text-white py-4 px-10 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700  transition-all"
          whileHover={{
            scale: 1.1, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.section>
    </div>
  );
}