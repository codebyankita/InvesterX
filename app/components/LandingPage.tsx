// //app/components/Landingpage.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedLogo from "./Animatedlogo";
import HomePage from "../page";
// import Header from "./Header"; // 

export default function Home() {
    const [showContent, setShowContent] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > window.innerHeight * 0.5) {
                setShowContent(true);
            }

        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen">
            {/* Animated Logo */}
            <AnimatedLogo />



            {/* Main Content Appears from Bottom */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <HomePage />
            </motion.div>
        </div>
    );
}
