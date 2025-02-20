// "use client";
// import { useRef, useEffect } from "react";

// export default function WavyLine() {
//     const path = useRef<SVGPathElement>(null);
//     let progress = 0;
//     let x = 0.5;
//     let time = Math.PI / 2;
//     let reqId: number | null = null;

//     useEffect(() => {
//         setPath(progress);
//     }, []);

//     const setPath = (progress: number) => {
//         const width = window.innerWidth;
//         path.current?.setAttributeNS(
//             null,
//             "d",
//             `M0 10 Q${width * x} ${10 + progress}, ${width} 10`
//         );
//     };

//     const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

//     const manageMouseEnter = () => {
//         if (reqId) {
//             cancelAnimationFrame(reqId);
//             resetAnimation();
//         }
//     };

//     const manageMouseMove = (e: React.MouseEvent) => {
//         const { movementY, clientX } = e;
//         const pathBound = path.current?.getBoundingClientRect();

//         if (pathBound) {
//             x = (clientX - pathBound.left) / pathBound.width;
//             progress += movementY;
//             setPath(progress);
//         }
//     };

//     const manageMouseLeave = () => {
//         animateOut();
//     };

//     const animateOut = () => {
//         const newProgress = progress * Math.sin(time);
//         progress = lerp(progress, 0, 0.025);
//         time += 0.2;
//         setPath(newProgress);

//         if (Math.abs(progress) > 0.75) {
//             reqId = requestAnimationFrame(animateOut);
//         } else {
//             resetAnimation();
//         }
//     };

//     const resetAnimation = () => {
//         time = Math.PI / 2;
//         progress = 0;
//     };

//     return (
//         <div className="relative w-full h-[30px]">
//             <div
//                 onMouseEnter={manageMouseEnter}
//                 onMouseMove={manageMouseMove}
//                 onMouseLeave={manageMouseLeave}
//                 className="absolute w-full h-[30px] z-10"
//             ></div>
//             <svg className="absolute w-full h-[30px] top-0">
//                 <path
//                     ref={path}
//                     className="stroke-current text-gray-400 stroke-[1px] fill-none"
//                 ></path>
//             </svg>
//         </div>
//     );
// }
"use client";
import { useRef, useEffect } from "react";

export default function WavyLine() {
    const path = useRef<SVGPathElement>(null);
    let progress = 0;
    let controlX = 0.5; // Middle control point
    let time = Math.PI / 2;
    let reqId: number | null = null;

    useEffect(() => {
        setPath(progress);
    }, []);

    const setPath = (progress: number) => {
        const width = window.innerWidth;

        path.current?.setAttributeNS(
            null,
            "d",
            `M0 10 Q${width * controlX} ${10 + progress}, ${width} 10`
        );
    };

    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

    const manageMouseEnter = () => {
        if (reqId) {
            cancelAnimationFrame(reqId);
            resetAnimation();
        }
    };

    const manageMouseMove = (e: React.MouseEvent) => {
        const { movementY, clientX } = e;
        const pathBound = path.current?.getBoundingClientRect();

        if (pathBound) {
            const relativeX = (clientX - pathBound.left) / pathBound.width;

            // Adjust control point based on mouse position
            controlX = 0.5 + (relativeX - 0.5) * 0.2;

            progress += movementY * 0.6;
            setPath(progress);
        }
    };

    const manageMouseLeave = () => {
        animateOut();
    };

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        progress = lerp(progress, 0, 0.025);
        time += 0.2;
        setPath(newProgress);

        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        } else {
            resetAnimation();
        }
    };

    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    };

    return (
        <div className="relative w-full h-[30px]">
            <div
                onMouseEnter={manageMouseEnter}
                onMouseMove={manageMouseMove}
                onMouseLeave={manageMouseLeave}
                className="absolute w-full h-[30px] z-10"
            ></div>
            <svg className="absolute w-full h-[30px] top-0">
                <path
                    ref={path}
                    className="stroke-current text-gray-400 stroke-[1px] fill-none"
                ></path>
            </svg>
        </div>
    );
}
