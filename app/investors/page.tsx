//app/investors/page.tsx
import React from 'react'
import { investors } from "@/app/components/data/investors-data";
import PartnerCard from "../components/PartnerCard";
import Button from "@/app/components/Button";
import SecondaryButton from "@/app/components/SecondButton";
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
export default function page() {
  return (
    <div>
      <div className="bg-[#f6f8ff] text-gray-900 ">
        <div className="px-4 lg:py-8 xl:py-16 lg:mx-24 xl:mx-48 mx-4 py-8">
          {/* Heading Section */}
          <ScrollAnimationWrapper>

            <div className="flex lg:flex-row flex-col justify-between gap-6 lg:gap-1 text-left mb-12 ">
              <h1 className="lg:text-5xl text-3xl lg:w-1/3 w-full lg:content-end  content-center font-bold text-gray-900">
                Our partners

              </h1>
              <div className="flex md:flex-row flex-col w-full text-gray-500  gap-4 lg:text-xl text-base mt-4">
                <Button text="Pitch Your Startup" href="/contact-us" />
                <SecondaryButton text="  All " />

                <SecondaryButton text="   Browse all team members " />
              </div>

            </div>
          </ScrollAnimationWrapper>

          {/* Partner Cards */}
          <ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8">
              {investors.map((investor) => (
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


        </div>
      </div>
    </div>
  )
}
