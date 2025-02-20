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
// // app/components/Landingpage.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import AnimatedLogo from "./Animatedlogo";
// import HomePage from "../page";
// import Header from "./Header";

// export default function Home() {
//     const [showHeader, setShowHeader] = useState(false);
//     const [showContent, setShowContent] = useState(false);
//     const [logoFinished, setLogoFinished] = useState(false); // Track logo animation

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY;
//             if (scrollPosition > window.innerHeight * 0.2 && logoFinished) { // Check if logo finished
//                 setShowHeader(true);
//                 setShowContent(true);
//             } else {
//               setShowHeader(false);
//               setShowContent(false);
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [logoFinished]); // Add logoFinished to dependency array

//     const handleLogoComplete = () => {
//         setLogoFinished(true); // Set state when logo animation finishes
//         // Optionally, you can trigger a scroll event here to immediately show the header
//         // if the user is already scrolled past the threshold.
//         if (window.scrollY > window.innerHeight * 0.2) {
//             setShowHeader(true);
//             setShowContent(true);
//         }
//     };

//     return (
//         <div className="relative min-h-screen">
//             {/* Animated Logo */}
//             <AnimatedLogo onComplete={handleLogoComplete} /> {/* Pass callback */}

//             {/* Header */}
//             {showHeader && <Header />} {/* Conditionally render the header */}

//             {/* Main Content */}
//             <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//             >
//                 <HomePage />
//             </motion.div>
//         </div>
//     );
// }