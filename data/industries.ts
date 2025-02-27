// // /data/industries.ts
// import React from "react"; // Ensure React is imported
// import { GrTechnology } from "react-icons/gr";
// import { MdOutlineHealthAndSafety, MdOutlineAgriculture } from "react-icons/md";
// import { LiaIndustrySolid } from "react-icons/lia";
// import { GiMining } from "react-icons/gi";

// // Define iconMap with component references, not JSX elements
// const iconMap: Record<string, React.ElementType> = {
//   GrTechnology: GrTechnology,
//   MdOutlineHealthAndSafety: MdOutlineHealthAndSafety,
//   LiaIndustrySolid: LiaIndustrySolid,
//   MdOutlineAgriculture: MdOutlineAgriculture,
//   GiMining: GiMining,
// };

// export const industries = [
//   {
//     id: "technology",
//     icon: iconMap["GrTechnology"],
//     title: "Technology",
//     shortDescription:
//       "The technology industry spans various companies involved in the research, development, and distribution of tech-based products and services, including software, hardware, AI, and emerging fields like blockchain and quantum computing.",
//     fullDescription: [
//       "The technology industry spans various companies involved in the research, development, and distribution of tech-based products and services, including software, hardware, AI, and emerging fields like blockchain and quantum computing.",
//       "Recently, the sector has seen rapid growth, particularly in cloud computing, AI, and cybersecurity, accelerated by the Covid-19 pandemic, which made technology crucial for remote work, e-commerce, digital health, and online education.",
//       "Investors should be aware of increasing regulatory scrutiny over data privacy and antitrust issues, as well as challenges like supply chain disruptions and geopolitical tensions. However, the surge in artificial intelligence adoption outweighs these concerns. Al is set to drive significant growth and innovation, making the tech sector a promising opportunity for investors despite potential market volatility.",
//     ],
//   },
//   {
//     id: "healthcare",
//     icon: iconMap["MdOutlineHealthAndSafety"],
//     title: "Healthcare",
//     shortDescription:
//       "The healthcare sector is a leading investment choice for 2024 due to its crucial societal role, continuous innovation, and strong growth potential, particularly in biotechnology, personalized medicine, and digital health.",
//     fullDescription: [
//       " The healthcare sector is a leading investment choice for 2024 due to its crucial societal role, continuous innovation, and strong growth potential, particularly in biotechnology, personalized medicine, and digital health.",
//       " The industry's robust response to global health challenges, especially during the Covid-19 pandemic, highlighted its capacity for rapid innovation, as seen in the swift development of vaccines and the rise of telemedicine.",
//       "Recent advancements in gene therapy and precision medicine are enhancing patient outcomes, while AI and machine learning are improving healthcare efficiency. Additionally, growing focus on mental health and an aging population are driving demand for new services, presenting significant growth opportunities in the sector.",
//     ],
//   },
//   {
//     id: "industrials",
//     icon: iconMap["LiaIndustrySolid"],
//     title: "Industrials",
//     shortDescription:
//       "The Buzz on the Industrial Sector, The industrial sector is all about companies that make and distribute goods for construction, manufacturing, and infrastructure-think machinery, transportation, and aerospace.",
//     fullDescription: [
//       "The Buzz on the Industrial Sector",
//       " The industrial sector is all about companies that make and distribute goods for construction, manufacturing, and infrastructure-think machinery, transportation, and aerospace.",
//       "Lately, it's buzzing with automation and smart tech. Industry 4.0 is here, bringing IoT, robotics, and Al to the forefront, transforming how we manufacture and manage supply chains.",
//       " Investors, take note! This sector dances to the beat of economic cycles, so keep an eye on global trade policies. Plus, sustainability is the name of the game, with a push for green practices and renewable energy.",
//       "Despite some bumps from economic uncertainties an supply chain hiccups, the industrial sector is a powerhouse ofinnovation, ready for exciting growth ahead!",
//     ],
//   },
//   {
//     id: "agriculture",
//     icon: iconMap["MdOutlineAgriculture"],
//     title: "Agriculture",
//     shortDescription:
//       "Why Agriculture Is a Top Pick, Agriculture is the hot investment choice for 2024, and it's not just about growing veggies! With high-tech farming like precision agriculture, crops are getting smarter and yields are skyrocketing.",
//     fullDescription: [
//       "Why Agriculture Is a Top Pick",
//       "Agriculture is the hot investment choice for 2024, and it's not just about growing veggies! With high-tech farming like precision agriculture, crops are getting smarter and yields are skyrocketing.",
//       "Sustainability is all the rage farmers are going green to tackle climate change, proving they can save the planet one carrot at a time.",
//       " We've got biotech and GMOs shaking up the fields, plus a tasty trend toward organic and plant-based goodies that are making consumers drool. ",
//       " And let's face it: food is essential! The agriculture sector is a rock-solid investment, thriving even when the economy does the cha-cha. With a growing global population, there's always a demand for delicious produce. Let's get growing!",
//     ],
//   },
//   {
//     id: "mining",
//     icon: iconMap["GiMining"],
//     title: "Mining",
//     shortDescription:
//       "Mining: Digging for Gold (and More!) , Welcome to the mining sector, where we dig up the Earth's  treasures! From construction to tech, mining is the backbone of raw material production.",
//     fullDescription: [
//       "Lately, the spotlight's on minerals like lithium and rare earth elements-key players in the electric vehicle and renewable energy game. Talk about going green!",
//       " But it's not all gold and glitter; environmental concerns are shaping the industry. Companies are now embracing sustainable mining practices and investing in eco-friendly tech to keep Mother Earth happy.",
//       " Keep an eye on global trends and geopolitics, though!Commodity prices and trade policies can swing this sector like   a pendulum. In mining, it's all about finding the balance between profit and planet!",
//     ],
//   },
// ];
// /data/industries.ts
import React from "react";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineHealthAndSafety, MdOutlineAgriculture } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiMining } from "react-icons/gi";

export interface Industry {
  id: string;
  icon: React.ElementType; // Consistent with IndustryCard.tsx
  title: string;
  shortDescription: string;
  fullDescription: string[];
}

export const industries: Industry[] = [
  {
    id: "technology",
    icon: GrTechnology,
    title: "Technology",
    shortDescription:
      "The technology industry spans various companies involved in the research, development, and distribution of tech-based products and services, including software, hardware, AI, and emerging fields like blockchain and quantum computing.",
    fullDescription: [
      "The technology industry spans various companies involved in the research, development, and distribution of tech-based products and services, including software, hardware, AI, and emerging fields like blockchain and quantum computing.",
      "Recently, the sector has seen rapid growth, particularly in cloud computing, AI, and cybersecurity, accelerated by the Covid-19 pandemic, which made technology crucial for remote work, e-commerce, digital health, and online education.",
      "Investors should be aware of increasing regulatory scrutiny over data privacy and antitrust issues, as well as challenges like supply chain disruptions and geopolitical tensions. However, the surge in artificial intelligence adoption outweighs these concerns. AI is set to drive significant growth and innovation, making the tech sector a promising opportunity for investors despite potential market volatility.",
    ],
  },
  {
    id: "healthcare",
    icon: MdOutlineHealthAndSafety,
    title: "Healthcare",
    shortDescription:
      "The healthcare sector is a leading investment choice for 2024 due to its crucial societal role, continuous innovation, and strong growth potential, particularly in biotechnology, personalized medicine, and digital health.",
    fullDescription: [
      "The healthcare sector is a leading investment choice for 2024 due to its crucial societal role, continuous innovation, and strong growth potential, particularly in biotechnology, personalized medicine, and digital health.",
      "The industry's robust response to global health challenges, especially during the Covid-19 pandemic, highlighted its capacity for rapid innovation, as seen in the swift development of vaccines and the rise of telemedicine.",
      "Recent advancements in gene therapy and precision medicine are enhancing patient outcomes, while AI and machine learning are improving healthcare efficiency. Additionally, growing focus on mental health and an aging population are driving demand for new services, presenting significant growth opportunities in the sector.",
    ],
  },
  {
    id: "industrials",
    icon: LiaIndustrySolid,
    title: "Industrials",
    shortDescription:
      "The industrial sector is all about companies that make and distribute goods for construction, manufacturing, and infrastructure—think machinery, transportation, and aerospace.",
    fullDescription: [
      "The Buzz on the Industrial Sector",
      "The industrial sector is all about companies that make and distribute goods for construction, manufacturing, and infrastructure—think machinery, transportation, and aerospace.",
      "Lately, it's buzzing with automation and smart tech. Industry 4.0 is here, bringing IoT, robotics, and AI to the forefront, transforming how we manufacture and manage supply chains.",
      "Investors, take note! This sector dances to the beat of economic cycles, so keep an eye on global trade policies. Plus, sustainability is the name of the game, with a push for green practices and renewable energy.",
      "Despite some bumps from economic uncertainties and supply chain hiccups, the industrial sector is a powerhouse of innovation, ready for exciting growth ahead!",
    ],
  },
  {
    id: "agriculture",
    icon: MdOutlineAgriculture,
    title: "Agriculture",
    shortDescription:
      "Agriculture is the hot investment choice for 2024, with high-tech farming like precision agriculture boosting yields.",
    fullDescription: [
      "Why Agriculture Is a Top Pick",
      "Agriculture is the hot investment choice for 2024, and it's not just about growing veggies! With high-tech farming like precision agriculture, crops are getting smarter and yields are skyrocketing.",
      "Sustainability is all the rage—farmers are going green to tackle climate change, proving they can save the planet one carrot at a time.",
      "We've got biotech and GMOs shaking up the fields, plus a tasty trend toward organic and plant-based goodies that are making consumers drool.",
      "And let's face it: food is essential! The agriculture sector is a rock-solid investment, thriving even when the economy does the cha-cha. With a growing global population, there's always a demand for delicious produce. Let's get growing!",
    ],
  },
  {
    id: "mining",
    icon: GiMining,
    title: "Mining",
    shortDescription:
      "Welcome to the mining sector, where we dig up the Earth's treasures for construction and tech.",
    fullDescription: [
      "Mining: Digging for Gold (and More!)",
      "Welcome to the mining sector, where we dig up the Earth's treasures! From construction to tech, mining is the backbone of raw material production.",
      "Lately, the spotlight's on minerals like lithium and rare earth elements—key players in the electric vehicle and renewable energy game. Talk about going green!",
      "But it's not all gold and glitter; environmental concerns are shaping the industry. Companies are now embracing sustainable mining practices and investing in eco-friendly tech to keep Mother Earth happy.",
      "Keep an eye on global trends and geopolitics, though! Commodity prices and trade policies can swing this sector like a pendulum. In mining, it's all about finding the balance between profit and planet!",
    ],
  },
];
