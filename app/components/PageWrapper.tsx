// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";

// export default function PageWrapper({ children }: { children: React.ReactNode }) {
//     useEffect(() => {
//         gsap.to("main, header", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
//     }, []);

//     return <>{children}</>;
// }
"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Animate Navbar and Footer
        gsap.fromTo(
            "header",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
        );

        gsap.fromTo(
            "footer",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
        );

        // Animate Main Content
        gsap.fromTo(
            "main",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.6 }
        );
    }, []);

    return <>{children}</>;
}
