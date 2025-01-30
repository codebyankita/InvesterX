"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import startuplogo from "@/public/portfoilo/startup.svg";
import startup from "@/public/portfoilo/startupimg.jpeg";


// Sample data (in a real app, fetch from an API or database)
const portfolioData = [
    { id: "1", image: startuplogo, title: "Company", category: "Social Network", year: "2025" },
    { id: "2", image: startuplogo, title: "Venture", category: "Social Network", year: "2025" },
    { id: "3", image: startuplogo, title: "Cryptomatic", category: "Cloud Software", year: "2025" },
    { id: "4", image: startuplogo, title: "Business", category: "Cloud Software", year: "2025" },
    { id: "5", image: startuplogo, title: "Corporate", category: "Streaming", year: "2025" },
    { id: "6", image: startuplogo, title: "Enterprise", category: "Cloud Software", year: "2025" },
    { id: "7", image: startuplogo, title: "Organization", category: "Streaming", year: "2025" },
    { id: "8", image: startuplogo, title: "Startup", category: "Cloud Software", year: "2025" },
];

export default function PortfolioDetailPage() {
    const { id } = useParams();
    const portfolioItem = portfolioData.find((item) => item.id === id);

    if (!portfolioItem) {
        return <div className="text-center mt-10">Portfolio item not found!</div>;
    }

    return (
        <div className="bg-[#f6f8ff] min-h-screen flex items-center justify-center p-6">
            <div className="lg:max-w-6xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white lg:p-16 p-10 rounded-3xl">
                        <div className="flex items-center mb-4">
                            <Image
                                className="rounded-full m-4 overflow-visible p-4   bg-blue-500"
                                src={portfolioItem.image}
                                alt={portfolioItem.title}
                                width={80}
                                height={80}
                            />
                            <h2 className="text-2xl font-semibold">{portfolioItem.title}</h2>
                        </div>
                        <p className="text-gray-600">
                            Empowering the next generation of innovation, our {portfolioItem.title} investments focus on transformative ideas that push the boundaries of technology. We partner with visionary founders to shape the future of Web3, cloud software, and beyond.
                        </p>
                    </div>
                    <div className="bg-white lg:p-16 p-10 rounded-3xl">
                        <h2 className="text-xl font-semibold mb-4">Company details</h2>
                        <p className="text-gray-600 mb-4">
                            At Angelica Capital, we invest in groundbreaking startups that redefine industries through innovation and technology. This company is at the forefront of Cloud Software, leveraging cutting-edge solutions to drive efficiency and scalability in the digital age.
                        </p>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <h3 className="text-gray-500">Company</h3>
                                <p className="font-semibold">{portfolioItem.title}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500">Date</h3>
                                <p className="font-semibold">{portfolioItem.year}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500">Category</h3>
                                <p className="font-semibold">{portfolioItem.category}</p>
                            </div>
                        </div>
                        <Button text="Visit website" />
                    </div>
                </div>
                <div className="lg:mx-24 md:mx-10 mx-2">
                    <div className="mt-12 lg:mx-10 mx-6 ">
                        <h2 className="text-3xl font-semibold mb-4">About the company</h2>
                        <p className="text-gray-600 mb-4">
                            Driven by innovation and fueled by ambition, this startup is reshaping the digital landscape. With a strong foundation in cutting-edge cloud software, it is set to revolutionize how businesses operate in the decentralized era. Focused on efficiency, scalability, and security, this venture is paving the way for a more connected and intelligent future.
                        </p>
                        <ul className="list-disc list-inside text-gray-600  ">
                            <li>
                                Designed to support enterprises with seamless cloud solutions.
                            </li>
                            <li>Built with the future of Web3 in mind, ensuring trust and transparency.</li>
                            <li>Spearheaded by a team of experts committed to pushing technological boundaries.

                            </li>
                            <li>
                                Easily adaptable cloud-based solutions for businesses of all sizes.
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <div className="lg:m-6 m-2">
                            <Image src={startup} alt="Our Mission" className="rounded-3xl " />
                        </div>
                        <div className="  py-2 md:px-4  px-2 flex items-center">
                            <Button text="Read funding announcement" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
