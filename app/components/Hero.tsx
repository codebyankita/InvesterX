"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bird from "@/public/birdlogo.jpg"; // Import your logo

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const logoRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const logo = logoRef.current;
        const content = contentRef.current;

        if (!logo || !content) return;

        gsap.fromTo(
            logo,
            { scale: 1, opacity: 1 },
            {
                scale: 4, // Logo enlarges
                opacity: 0.1, // Fades out slightly
                scrollTrigger: {
                    trigger: content, // Triggers on scroll to content
                    start: "top bottom",
                    end: "top top",
                    scrub: true, // Smooth transition
                },
            }
        );

        gsap.fromTo(
            content,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: content,
                    start: "top bottom",
                    end: "top center",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden">
            {/* Logo in the Center */}
            <div ref={logoRef} className="absolute flex items-center justify-center">
                <Image src={Bird} alt="Logo" width={200} height={200} priority className="z-10" />
            </div>

            {/* Scroll Down Arrow */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 flex flex-col items-center"
            >
                <p className="text-lg mb-2">Scroll Down</p>
                <div className="w-6 h-6 border-b-2 border-r-2 border-white rotate-45"></div>
            </motion.div>

            {/* Website Content Appears Here */}
            <div ref={contentRef} className="relative z-20 mt-[100vh] p-10">
                <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
                <p className="text-lg mt-4">
                    Here is the content that appears inside the logo after scrolling down.
                </p>
            </div>
        </div>
    );
};

export default Hero;
