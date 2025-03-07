// app/components/ResearchSlider.tsx
import React, { useState } from "react";
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper";
import Image from "next/image";
import NavigationButton from "@/app/components/NavigationButton";
import { researchData } from "@/data/researchData";

const ResearchSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? researchData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === researchData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentResearch = researchData[currentIndex];

    return (
        <div className="flex lg:flex-row flex-col my-12">
            {/* Left Section - Image */}
            <div className="lg:w-1/2">
                <ScrollAnimationWrapper>
                    <Image
                        src={currentResearch.image}
                        alt={currentResearch.title}
                        className="rounded-2xl"
                        width={900}
                        height={600}
                    />
                </ScrollAnimationWrapper>
            </div>
            {/* Right Section - Content */}
            <div className="lg:w-1/2 w-full lg:px-10 xl:px-16 lg:ml-0 xl:ml-6 mt-4">
                <ScrollAnimationWrapper>
                    <div>
                        <h2 className="lg:text-4xl xl:text-5xl text-3xl font-bold text-gray-900">
                            {currentResearch.id}
                        </h2>
                        <h3 className="lg:text-2xl text-xl font-semibold my-2 text-gray-900">
                            {currentResearch.title}
                        </h3>
                        <p className="lg:mt-10 mt-5 text-wrap lg:mr-0 xl:mr-6 mr-0 text-lg text-gray-600">
                            {currentResearch.description}
                        </p>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex mt-10">
                        <NavigationButton direction="prev" onClick={handlePrevious} />
                        <NavigationButton direction="next" onClick={handleNext} />
                    </div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default ResearchSlider;