"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimationWrapper({ children }: { children: React.ReactNode }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
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
