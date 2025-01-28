import React from "react";
import PortfolioCard from "@/app/components/PortfoliopageCard"; // Importing the PortfolioCard
import SecondaryButton from "../components/SecondButton";
import company from "@/public/portfoilo/company.svg";
import cryptomatic from "@/public/portfoilo/cryptomatic.svg";
import business from "@/public/portfoilo/business.svg";
import corporate from "@/public/portfoilo/corporate.svg";
import enterprice from "@/public/portfoilo/enterprice.svg";
import oranization from "@/public/portfoilo/organization.svg";
import startup from "@/public/portfoilo/startup.svg";
import venture from "@/public/portfoilo/venture.svg";




export default function PortfolioPage() {
    const portfolioData = [
        { id: "1", image: company, title: "Company", category: "Social Network", year: "2025" },
        { id: "2", image: venture, title: "Venture", category: "Social Network", year: "2023" },
        { id: "3", image: cryptomatic, title: "Cryptomatic", category: "Cloud Software", year: "2020" },
        { id: "4", image: business, title: "Business", category: "Cloud Software", year: "2021" },
        { id: "5", image: corporate, title: "Corporate", category: "Streaming", year: "2022" },
        { id: "6", image: enterprice, title: "Enterprise", category: "Cloud Software", year: "2020" },
        { id: "7", image: oranization, title: "Organization", category: "Streaming", year: "2022" },
        { id: "8", image: startup, title: "Startup", category: "Cloud Software", year: "2024" },
    ];

    return (
        <div className="bg-[#f6f8ff]">


            <div className="container mx-auto p-6 ">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">Our Portfolio</h1>
                    <p className="text-gray-600 mt-4">
                        Explore the latest additions to our portfolio. These projects showcase our diverse
                        expertise in various industries.
                    </p>
                </div>
                <div className="flex justify-center items-center w-full md:flex-row flex-col md:space-x-0 space-y-4 md:space-y-0 my-8 gap-3">
                    <SecondaryButton text="All" />
                    <SecondaryButton text="Social Network " />
                    <SecondaryButton text="Cloud Software" />
                    <SecondaryButton text="Streaming" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioData.map((item) => (
                        <PortfolioCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            category={item.category}
                            year={item.year}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
