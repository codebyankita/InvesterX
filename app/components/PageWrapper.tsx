"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.to("main, header", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }, []);

    return <>{children}</>;
}
