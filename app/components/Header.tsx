// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";
// import { TbMenu } from "react-icons/tb";
// import { RiCloseLargeFill } from "react-icons/ri";
// import { usePathname } from "next/navigation";
// // import { motion } from "framer-motion";


// const Header = () => {
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         // setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Toggle mobile menu
//   const handleMobileMenuToggle = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   const pathname = usePathname(); // Get the current pathname
//   const noFooterPages = ["/sign-in", "/sign-up"];

//   if (noFooterPages.includes(pathname)) {
//     return null; // Return null if on pages where the footer should not be shown
//   }
//   // Function to handle link clicks inside the dropdown
//   const handleLinkClick = () => {
//     // setIsDropdownOpen(false);
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-white md:bg-[#f6f8ff] shadow-md">
//       <div className="lg:container mx-auto flex px-4  justify-between items-center py-4 sm:py-2">
//         {/* Logo and Desktop Navigation */}
//         <nav className=" flex space-x-5">
//           <div className="flex items-center justify-start  lg:gap-9 md:gap-30 gap-20">
//             {/* Clickable Logo */}
//             <Link href="/" passHref>
//               <div className="cursor-pointer">
//                 <Logo />
//               </div>
//             </Link>

//             {/* Links for Large Screens */}
//             <div className="hidden lg:flex space-x-5 ml-4">
//               <Link
//                 href="/"
//                 className="hover:text-custom-blue"
//                 onClick={handleLinkClick}
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="hover:text-custom-blue"
//                 onClick={handleLinkClick}
//               >
//                 About
//               </Link>
//               <Link
//                 href="/investors"
//                 className="hover:text-custom-blue"
//                 onClick={handleLinkClick}
//               >
//                 Investors
//               </Link>
//               <Link
//                 href="/portfolio"
//                 className="hover:text-custom-blue"
//                 onClick={handleLinkClick}
//               >
//                 Portfolio
//               </Link>

//               {/* Pages Dropdown for Desktop */}
//               <div className="relative" ref={dropdownRef}></div>
//             </div>
//           </div>
//         </nav>

//         {/* Button for Desktop */}
//         <div className="hidden lg:block ">
//           <Button text="About Your Pitch Deck" href="/contact-us" />
//         </div>
//         {/* Mobile Menu Button */}
//         <div className="lg:hidden mx-4  flex items-center">
//           <button onClick={handleMobileMenuToggle}>
//             {isMobileMenuOpen ? (
//               <RiCloseLargeFill className="h-7 w-7 transition-transform duration-300 ease-in-out transform" />
//             ) : (
//               <TbMenu className="h-7 w-7" />
//             )}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (

//         <div className="lg:hidden absolute left-0 right-0 bg-white shadow-lg z-40 py-4 transition-all duration-200 ease-in-out">
//           <div className="flex flex-col pl-2 mx-6 text-left space-y-4">
//             <Link href="/" className="text-lg hover:text-custom-blue">
//               Home
//             </Link>
//             <Link href="/about" className="text-lg hover:text-custom-blue">
//               About
//             </Link>
//             <Link href="/investors" className="text-lg hover:text-custom-blue">
//               Investors
//             </Link>
//             <Link href="/portfolio" className="text-lg hover:text-custom-blue">
//               Portfoilo
//             </Link>

//             {/* Mobile Pages Dropdown */}
//             <div className="relative"></div>

//             {/* Pitch Your Startup Button in Mobile Menu */}
//             <div>
//               <Button text="About Your Pitch Deck" href="/contact-us" />
//             </div>
//           </div>
//         </div>

//       )}
//     </header>
//   );
// };
// export default Header;

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
    <header className="sticky top-0 z-50 bg-white md:bg-[#f6f8ff] shadow-md">
      <div className="lg:container mx-auto flex px-4 justify-between items-center py-4 sm:py-2">
        <nav className="flex space-x-5">
          <div className="flex items-center justify-start lg:gap-9 md:gap-30 gap-20">
            <Link href="/" passHref>
              <div className="cursor-pointer">
                <Logo />
              </div>
            </Link>
            <div className="hidden lg:flex space-x-5 ml-4">
              {["Home", "About", "Investors", "Portfolio"].map((text) => (
                <Link
                  key={text}
                  href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  className="hover:text-custom-blue"
                >
                  {text}
                </Link>
              ))}
              <div className="relative" ref={dropdownRef}></div>
            </div>
          </div>
        </nav>
        <div className="hidden lg:block">
          <Button text="About Your Pitch Deck" href="/contact-us" />
        </div>
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
            {["Home", "About", "Investors", "Portfolio"].map((text, i) => (
              <motion.div key={text} custom={i} variants={menuVariants} initial="hidden" animate="visible">
                <Link
                  href={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  className="text-lg hover:text-custom-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {text}
                </Link>
              </motion.div>
            ))}
            <motion.div custom={4} variants={menuVariants} initial="hidden" animate="visible">
              <Button text="About Your Pitch Deck" href="/contact-us" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;



