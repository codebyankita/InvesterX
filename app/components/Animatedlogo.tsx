// //app/components/Animatedlogo.tsx
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import gsap from "gsap";
// import { IoIosArrowDown } from "react-icons/io";
// import Bird from "@/public/birdlogo.jpg";


// const AnimatedLogo = () => {
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [isScrolled, setIsScrolled] = useState(false);

//     // Enhanced scroll animations with smoother transitions
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"]
//     });

//     // Scale transformation with easing
//     const scale = useTransform(
//         scrollYProgress,
//         [0, 0.3, 0.5],
//         [1, 3, 5],
//         { clamp: false }
//     );

//     // Smooth opacity transition
//     const opacity = useTransform(
//         scrollYProgress,
//         [0, 0.7, 1],
//         [1, 0.5, 0],
//         { clamp: false }
//     );

//     useEffect(() => {
//         // Improved arrow bounce animation
//         gsap.to(".scroll-arrow", {
//             y: 10,
//             repeat: -1,
//             yoyo: true,
//             ease: "power1.inOut",
//             duration: 1,
//             delay: 0.5
//         });

//         const handleScroll = () => {
//             if (window.scrollY > window.innerHeight * 0.3) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <div ref={containerRef} className="relative w-full min-h-[120vh] overflow-hidden">
//             {/* Main Image with Parallax Effect */}
//             <motion.div
//                 style={{
//                     scale,
//                     opacity,
//                     transformOrigin: "center center",
//                     willChange: "transform, opacity"
//                 }}
//                 className="fixed inset-0 flex items-center justify-center z-50"
//             >
//                 <Image
//                     src={Bird}
//                     alt="Bird Logo"
//                     width={400}
//                     height={400}
//                     className=" transition-all duration-500"
//                     priority
//                 />
//             </motion.div>


//             {/* Enhanced Scroll Indicator */}
//             {!isScrolled && (
//                 <motion.div
//                     initial={{ translateY: 0 }}
//                     animate={{ translateY: [0, 10, 0] }}
//                     transition={{
//                         repeat: Infinity,
//                         duration: 1,
//                         ease: "easeInOut"
//                     }}
//                     className="fixed justify-center bottom-10  left-48 right-48 flex flex-col items-center"
//                 >
//                     <IoIosArrowDown className="animate-bounce text-gray-600" size={20} />

//                     Scroll Down

//                 </motion.div>
//             )}
//         </div>
//     );
// };

// export default AnimatedLogo;


"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import Bird from "@/public/birdlogo.jpg";

// Define the prop types
interface AnimatedLogoProps {
    onComplete?: () => void; // Optional callback
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ onComplete }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 3, 5], { clamp: false });
    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0], { clamp: false });

    useEffect(() => {
        gsap.to(".scroll-arrow", {
            y: 10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 1,
            delay: 0.5
        });

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.3) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Call onComplete when the animation finishes
    useEffect(() => {
        if (onComplete) {
            setTimeout(onComplete, 2000); // Simulating animation completion after 2 seconds
        }
    }, [onComplete]);

    return (
        <div ref={containerRef} className="relative w-full min-h-[120vh] overflow-hidden">
            <motion.div
                style={{
                    scale,
                    opacity,
                    transformOrigin: "center center",
                    willChange: "transform, opacity"
                }}
                className="fixed inset-0 flex items-center justify-center z-50"
            >
                <Image
                    src={Bird}
                    alt="Bird Logo"
                    width={400}
                    height={400}
                    className="transition-all duration-500"
                    priority
                />
            </motion.div>

            {!isScrolled && (
                <motion.div
                    initial={{ translateY: 0 }}
                    animate={{ translateY: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "easeInOut"
                    }}
                    className="fixed justify-center bottom-10 left-48 right-48 flex flex-col items-center"
                >
                    <IoIosArrowDown className="animate-bounce text-gray-600" size={20} />
                    Scroll Down
                </motion.div>
            )}
        </div>
    );
};

export default AnimatedLogo;
