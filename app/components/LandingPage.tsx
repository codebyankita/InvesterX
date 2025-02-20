// //app/components/Landingpage.tsx
// "use client";

// import { useEffect, useState } from "react";

// import AnimatedLogo from "./Animatedlogo";

// import { motion } from "framer-motion";
// import HomePage from "../page";

// export default function Home() {
//     const [showContent, setShowContent] = useState(false);
//     const [showNavbarFooter, setShowNavbarFooter] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             if (scrollPosition > window.innerHeight * 0.8 && !showContent) {
//                 setShowContent(true);
//             }
//             if (scrollPosition > window.innerHeight * 0.9 && !showNavbarFooter) {
//                 setShowNavbarFooter(true);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [showContent, showNavbarFooter]);

//     return (
//         <div className="min-h-screen">
//             {/* Animated Logo */}

//             <AnimatedLogo />

//             {/* Home Page Content Revealed Inside Bird Mask */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={showContent ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 className="relative overflow-hidden"
//                 style={{
//                     WebkitMaskImage: `url('/birdlogo.jpg')`,
//                     maskImage: `url('/birdlogo.jpg')`,
//                     WebkitMaskSize: "cover",
//                     maskSize: "cover",
//                 }}
//             ></motion.div>

//             {/* Main Content */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//             >
//                 <HomePage />
//             </motion.div>
//         </div>
//     );
// }
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedLogo from "./Animatedlogo";
import HomePage from "../page";
// import Header from "./Header"; // Import Navbar Component

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
