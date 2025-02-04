"use client";
import React, { use } from "react";
import Image from "next/image";
import { investors } from "@/app/components/data/investors-data";
import { MdOutlineMail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

type Investor = {
  id: string;
  name: string;
  title: string;
  description: string;
  email: string;
  website: string;
  articles: string[];
  image: string;
};

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function InvestorPage({ params }: PageProps) {
  const resolvedParams = use(params); // Resolve the Promise
  const { id } = resolvedParams;

  const investor = investors.find((inv) => inv.id === id) as Investor | undefined;

  if (!investor) {
    return <div className="text-center text-red-600">Investor not found</div>;
  }

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto p-6">
        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-stretch">
          {/* Investor Profile */}
          <div className="bg-white p-6 rounded-3xl flex flex-col lg:grid lg:grid-cols-2">
            <div className="flex justify-center items-center mb-6">
              <Image
                src={investor.image}
                alt={`Portrait of ${investor.name}`}
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <h2 className="text-blue-600 my-2 text-sm font-semibold">{investor.title}</h2>
              <h1 className="text-5xl font-bold my-2 text-black">{investor.name}</h1>
              <p className="text-gray-600 my-2">{investor.description}</p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white p-6 rounded-3xl flex flex-col">
            <h2 className="text-gray-900 text-lg font-semibold">More Information</h2>
            <p className="text-gray-600 my-2 flex-1">{investor.description}</p>
            <div className="mt-4">
              <div className="flex items-center mt-4">
                <MdOutlineMail className="mr-2" />
                <span className="text-black">Send me a message</span>
              </div>
              <a href={`mailto:${investor.email}`} className="text-black text-lg font-bold ml-6">
                {investor.email}
              </a>
              <div className="flex items-center mt-4">
                <CiGlobe className="mr-2" />
                <span className="text-black">Visit my Website</span>
              </div>
              <a href={investor.website} className="text-black text-lg font-bold ml-6">
                {investor.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
