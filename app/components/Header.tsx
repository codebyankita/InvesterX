
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";
// import { TbMenu } from "react-icons/tb";
// import { RiCloseLargeFill } from "react-icons/ri";
// import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";

// const menuVariants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } }),
// };

// const Header = () => {
//   const dropdownRef = useRef<HTMLDivElement | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const noFooterPages = ["/sign-in", "/sign-up"];

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         event.target instanceof Node &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (pathname === "/contact-us") {
//       setIsMobileMenuOpen(false);
//     }
//   }, [pathname]);

//   if (noFooterPages.includes(pathname)) return null;

//   return (
//     <header className="sticky top-0 z-50 bg-white ">
//       <div className="lg:container mx-auto flex px-4 justify-between items-center py-4 sm:py-2">
//         {/* Left Side - Logo */}
//         <div className="flex items-center">
//           <Link href="/" passHref>
//             <div className="cursor-pointer">
//               <Logo />
//             </div>
//           </Link>
//         </div>

//         {/* Right Side - Navigation Links & Button */}
//         <div className="hidden lg:flex items-center space-x-6 ml-auto">
//           {["Home", "About", "Investors", "Portfolio"].map((text) => (
//             <Link
//               key={text}
//               href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
//               className="hover:text-custom-blue"
//             >
//               {text}
//             </Link>
//           ))}
//           {/* Pitch Us Button */}
//           <Button text="Pitch Us" href="/contact-us" />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden mx-4 flex items-center">
//           <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
//             {isMobileMenuOpen ? (
//               <RiCloseLargeFill className="h-7 w-7 transition-transform duration-300" />
//             ) : (
//               <TbMenu className="h-7 w-7" />
//             )}
//           </button>
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: 50 }}
//           className="lg:hidden absolute left-0 right-0 bg-white shadow-lg z-50 py-4"
//           ref={dropdownRef}
//         >
//           <div className="flex flex-col pl-2 mx-6 text-left space-y-4">
//             {["Home", "About", "Investors", "Portfolio"].map((text, i) => (
//               <motion.div key={text} custom={i} variants={menuVariants} initial="hidden" animate="visible">
//                 <Link
//                   href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
//                   className="text-lg hover:text-custom-blue"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {text}
//                 </Link>
//               </motion.div>
//             ))}
//             <motion.div custom={4} variants={menuVariants} initial="hidden" animate="visible">
//               <Button text="Pitch Us" href="/contact-us" />
//             </motion.div>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Header;

//app/components/Header.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { TbMenu } from "react-icons/tb";
import { RiCloseLargeFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 } }),
};

const Header = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const noFooterPages = ["/sign-in", "/sign-up"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/contact-us") {
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  if (noFooterPages.includes(pathname)) return null;

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="lg:container mx-auto flex px-4 justify-between items-center py-4 sm:py-2">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Logo />
            </div>
          </Link>
        </div>

        {/* Right Side - Navigation Links & Button */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          {["Home", "About", "Investors", "Portfolio"].map((text) => {
            const linkPath = text === "Home" ? "/" : `/${text.toLowerCase()}`;
            const isActive = pathname === linkPath;

            return (
              <Link
                key={text}
                href={linkPath}
                className={`hover:text-custom-blue ${isActive ? "text-custom-blue font-semibold" : "text-gray-700"
                  }`}
              >
                {text}
              </Link>
            );
          })}
          {/* Pitch Us Button */}
          <Button text="Pitch Us" href="/contact-us" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden mx-4 flex items-center">
          <button onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? (
              <RiCloseLargeFill className="h-7 w-7 transition-transform duration-300" />
            ) : (
              <TbMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="lg:hidden absolute left-0 right-0 bg-white shadow-lg z-50 py-4"
          ref={dropdownRef}
        >
          <div className="flex flex-col pl-2 mx-6 text-left space-y-4">
            {["Home", "About", "Investors", "Portfolio"].map((text, i) => {
              const linkPath = text === "Home" ? "/" : `/${text.toLowerCase()}`;
              const isActive = pathname === linkPath;

              return (
                <motion.div key={text} custom={i} variants={menuVariants} initial="hidden" animate="visible">
                  <Link
                    href={linkPath}
                    className={`text-lg hover:text-custom-blue ${isActive ? "text-custom-blue font-semibold" : "text-gray-700"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {text}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div custom={4} variants={menuVariants} initial="hidden" animate="visible">
              <Button text="Pitch Us" href="/contact-us" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
