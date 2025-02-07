
//app/portfolio/page.tsx
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
import Link from "next/link";
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";




export default function PortfolioPage() {
    const portfolioData = [
        { id: "company", image: company, title: "Company", category: "Social Network", year: "2025" },
        { id: "venture", image: venture, title: "Venture", category: "Social Network", year: "2025" },
        { id: "cryptomatic", image: cryptomatic, title: "Cryptomatic", category: "Cloud Software", year: "2025" },
        { id: "business", image: business, title: "Business", category: "Cloud Software", year: "2025" },
        { id: "corporate", image: corporate, title: "Corporate", category: "Streaming", year: "2025" },
        { id: "enterprice", image: enterprice, title: "Enterprise", category: "Cloud Software", year: "2025" },
        { id: "oranization", image: oranization, title: "Organization", category: "Streaming", year: "2025" },
        { id: "startup", image: startup, title: "Startup", category: "Cloud Software", year: "2025" },
    ];

    return (
        <div className="bg-[#f6f8ff]">


            <div className="container mx-auto p-6 ">
                <ScrollAnimationWrapper>

                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">Our Portfolio</h1>
                        <p className="text-gray-600 mt-4">
                            Explore the latest additions to our portfolio. These projects showcase our diverse
                            expertise in various industries.
                        </p>
                    </div>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper>

                    <div className="flex justify-center items-center w-full md:flex-row flex-col md:space-x-0 space-y-4 md:space-y-0 my-8 gap-3">
                        <SecondaryButton text="All" />
                        <SecondaryButton text="Social Network " />
                        <SecondaryButton text="Cloud Software" />
                        <SecondaryButton text="Streaming" />
                    </div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {portfolioData.map((item) => (
                            <Link key={item.id} href={`/portfolio/${item.id}`}>
                                <PortfolioCard
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    category={item.category}
                                    year={item.year}
                                />
                            </Link>

                        ))}
                    </div>
                </ScrollAnimationWrapper>

            </div>
        </div>
    );
}
