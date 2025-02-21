
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
