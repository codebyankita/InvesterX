// // "use client";

// // import { useEffect } from "react";
// // import { motion, useAnimation } from "framer-motion";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
// //     const controls = useAnimation();
// //     const { ref, inView } = useInView({ threshold: 0.2 });

// //     useEffect(() => {
// //         if (inView) {
// //             controls.start({ opacity: 1, y: 0 });
// //         }
// //     }, [inView, controls]);

// //     return (
// //         <motion.div
// //             ref={ref}
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={controls}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //         >
// //             {children}
// //         </motion.div>
// //     );
// // }
// "use client";

// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// export default function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
//     const controls = useAnimation();
//     const { ref, inView } = useInView({
//         triggerOnce: false, // Keeps animation persistent
//         threshold: 0.1, // Adjust for better visibility
//     });

//     useEffect(() => {
//         if (inView) {
//             controls.start({ opacity: 1, y: 0 });
//         } else {
//             controls.start({ opacity: 1, y: 0 }); // Keep it visible
//         }
//     }, [inView, controls]);

//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//         >
//             {children}
//         </motion.div>
//     );
// }
// // "use client";

// // import { useEffect } from "react";
// // import { motion, useAnimation } from "framer-motion";
// // import { useInView } from "react-intersection-observer";

// // export default function ScrollAnimationWrapper({
// //     children,
// // }: {
// //     children: React.ReactNode;
// // }) {
// //     const controls = useAnimation();
// //     const { ref, inView } = useInView({
// //         triggerOnce: true,
// //         threshold: 0.2,
// //         rootMargin: "-50px", // Ensures animation triggers slightly before entering viewport
// //     });

// //     useEffect(() => {
// //         if (inView) {
// //             controls.start({
// //                 opacity: 1,
// //                 y: 0,
// //                 transition: {
// //                     duration: 0.6,
// //                     ease: "easeOut",
// //                 },
// //             });
// //         }
// //     }, [inView, controls]);

// //     return (
// //         <motion.div
// //             ref={ref}
// //             initial={{
// //                 opacity: 0,
// //                 y: 50,
// //                 // transition: {
// //                 //   duration: 0.6,
// //                 //   ease: "easeOut",
// //                 // },
// //             }}
// //             animate={controls}
// //             style={{
// //                 willChange: "opacity, transform", // Improves performance
// //                 backfaceVisibility: "hidden", // Prevents flickering
// //             }}
// //         >
// //             {children}
// //         </motion.div>
// //     );
// // }
"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
        // Do not reset opacity when out of view
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ opacity: 1 }} // Ensure opacity stays visible
        >
            {children}
        </motion.div>
    );
}
