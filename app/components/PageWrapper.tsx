"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.from("main", { opacity: 0, y: 50, duration: 1 });
        gsap.from("header", { opacity: 0, y: -30, duration: 1 });
        // gsap.from("footer", { opacity: 0, y: 30, duration: 1 });
    }, []);

    return <>{children}</>;
}
