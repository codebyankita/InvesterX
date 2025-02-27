// "use client"; // This ensures the component runs only on the client side.

// import { useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Bird from "@/public/birdlogo.jpg"; // Importing the logo image
// import { IoIosArrowDown } from "react-icons/io";

// const SplashScreen = ({ onComplete }: { onComplete?: () => void }) => {
//     // State to manage the visibility of the splash screen
//     const [showSplash, setShowSplash] = useState(true);

//     // Hook to track the user's scroll progress (0 at top, 1 at bottom)
//     const { scrollYProgress } = useScroll();

//     /**
//      * Framer Motion Transformations:
//      * - `scale`: Increases the logo size from 1x to 3x as the user scrolls down.
//      * - `opacity`: Reduces opacity from 1 to 0 as the user scrolls.
//      * - `translateY`: Moves the logo slightly upward as it scales.
//      */
//     const scale = useTransform(scrollYProgress, [0, 0.7], [1, 8], { clamp: false });
//     const opacity = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 0.6, 0], { clamp: false });
//     const translateY = useTransform(scrollYProgress, [0, 0.7], [0, -150], { clamp: false });

//     /**
//      * Effect to check if the user has scrolled more than 200px.
//      * - If true, the splash screen disappears (`setShowSplash(false)`).
//      * - Calls `onComplete()` if provided.
//      */
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 300) {
//                 setShowSplash(false);
//                 onComplete?.(); // Trigger the optional callback
//             }
//         };

//         // Attach the scroll event listener
//         window.addEventListener("scroll", handleScroll);

//         // Cleanup function to remove the event listener
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [onComplete]);

//     // If `showSplash` is false, return `null` (hides the splash screen)
//     if (!showSplash) return null;

//     return (
//         <motion.div
//             className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
//             initial={{ opacity: 1 }} // Initial state (fully visible)
//             animate={{ opacity: 1 }} // No change during animation
//             exit={{ opacity: 0, transition: { duration: 1.5 } }} // Fade out animation on exit
//         >
//             {/* Animated Logo */}
//             <motion.div
//                 style={{ scale, opacity, y: translateY }} // Applying the transformations
//                 className="w-48 h-48 flex items-center justify-center"
//             >
//                 <Image src={Bird} alt="Company Logo" width={200} height={200} priority />
//             </motion.div>

//             {/* Scroll down hint */}
//             <motion.p className="absolute bottom-10 text-gray-700 text-lg">
//                 Scroll down to explore
//             </motion.p>
//             <motion.p className="absolute bottom-20">
//                 <IoIosArrowDown className="animate-bounce text-gray-600" size={20} />
//             </motion.p>
//         </motion.div>
//     );
// };

// export default SplashScreen;

"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Bird from "@/public/birdlogo.jpg";
import { IoIosArrowDown } from "react-icons/io";

const SplashScreen = ({ onComplete }: { onComplete?: () => void }) => {
    const [showSplash, setShowSplash] = useState(true);
    const { scrollYProgress } = useScroll();

    // Transformations for the bird
    const scale = useTransform(scrollYProgress, [0, 0.5,], [1, 15], { clamp: true }); // Grows bigger, up to 10x
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0], { clamp: true }); // Fades out after growing
    const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100], { clamp: true }); // Moves up slightly

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Trigger fade-out earlier
                setShowSplash(false);
                onComplete?.();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [onComplete]);

    if (!showSplash) return null;

    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }} // Smooth fade out
        >
            <motion.div
                style={{ scale, opacity, y: translateY }}
                className="w-48 h-48 flex items-center justify-center"
            >
                <Image src={Bird} alt="Company Logo" width={200} height={200} priority />
            </motion.div>

            <motion.p className="absolute bottom-10 text-gray-700 text-lg">
                Scroll down to explore
            </motion.p>
            <motion.p className="absolute bottom-20">
                <IoIosArrowDown className="animate-bounce text-gray-600" size={20} />
            </motion.p>
        </motion.div>
    );
};

export default SplashScreen;