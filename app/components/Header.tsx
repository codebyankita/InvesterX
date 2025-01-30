'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';
// import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Button from './Button';
import { TbMenu } from "react-icons/tb";
import { RiCloseLargeFill } from "react-icons/ri";
import { usePathname } from 'next/navigation';
const Header = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isMobileDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // // Toggle dropdown on click
  // const handleDropdownToggle = () => {
  //   setIsDropdownOpen(prev => !prev);
  // };
  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const pathname = usePathname();  // Get the current pathname
  const noFooterPages = ['/sign-in', '/sign-up'];

  if (noFooterPages.includes(pathname)) {
    return null;  // Return null if on pages where the footer should not be shown
  }
  // Function to handle link clicks inside the dropdown
  const handleLinkClick = () => {
    // setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white md:bg-[#f6f8ff] shadow-md">
      <div className="lg:container mx-auto flex px-4  justify-between items-center py-4 sm:py-2">



        {/* Logo and Desktop Navigation */}
        <nav className=" flex space-x-5">
          <div className="flex items-center justify-start  lg:gap-9 md:gap-30 gap-20">
            {/* Logo */}
            <Logo />
            {/* Links for Large Screens */}
            <div className="hidden lg:flex space-x-5 ml-4">
              <Link href="/" className="hover:text-custom-blue" onClick={handleLinkClick}>
                Home
              </Link>
              <Link href="/about" className="hover:text-custom-blue" onClick={handleLinkClick}>
                About
              </Link>
              <Link href="/investors" className="hover:text-custom-blue" onClick={handleLinkClick}>
                Investors
              </Link>
              <Link href="/portfolio" className="hover:text-custom-blue" onClick={handleLinkClick}>
                Portfolio
              </Link>
              {/* <Link href="/blog" className="hover:text-custom-blue">
                Blog
              </Link> */}

              {/* Pages Dropdown for Desktop */}
              <div
                className="relative"
                ref={dropdownRef}
              // Open on hover
              // onMouseLeave={handleHoverLeave} // Close on hover leave
              >
                {/* <button
                  onClick={handleDropdownToggle} // Toggle dropdown on click
                  className="flex items-center justify-center space-x-2 hover:text-custom-blue"
                >
                  Pages
                  {isDropdownOpen ? (
                    <RiArrowDropUpLine className="h-7 w-7" />
                  ) : (
                    <RiArrowDropDownLine className="h-7 w-7" />
                  )}
                </button> */}

                {/* {isDropdownOpen && (
                  <div className="fixed left-1/4 right-2/4 top-28 justify-center items-center bg-opacity-50 z-50">
                    <div
                      className="bg-white w-[900px] rounded-2xl border p-10 overflow-y-auto max-h-[calc(100vh-4rem)]"
                      onClick={(e) => e.stopPropagation()} // Prevent dropdown closure on interaction
                    >
                      <div className="flex flex-row gap-8">
                        {/* Main Pages */}
                {/* <div>
                          <h3 className="text-lg font-bold mb-3">Main Pages</h3>
                          <ul className="grid grid-cols-3 gap-2 text-sm">
                            <li><Link href="/pages/home-sales" className="hover:text-custom-blue" onClick={handleLinkClick}>Home (sales)</Link></li>
                            <li><Link href="/pages/home-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Home V1</Link></li>
                            <li><Link href="/pages/home-v2" className="hover:text-custom-blue" onClick={handleLinkClick}>Home V2</Link></li>
                            <li><Link href="/pages/home-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Home V3</Link></li>
                            <li><Link href="/pages/about" className="hover:text-custom-blue" onClick={handleLinkClick}>About</Link></li>
                            <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio V1</Link></li>
                            <li><Link href="/pages/portfolio-v2" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio V2</Link></li>
                            <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio V3</Link></li>
                            <li><Link href="/pages/home-sales" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio single</Link></li>
                            <li><Link href="/pages/home-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog V1</Link></li>
                            <li><Link href="/pages/home-v2" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog V2</Link></li>
                            <li><Link href="/pages/home-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog V3</Link></li>
                            <li><Link href="/pages/about" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog post</Link></li>
                            <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Contact</Link></li>
                            <li><Link href="/investors" className="hover:text-custom-blue" onClick={handleLinkClick}>Investors</Link></li>
                            <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Investor single</Link></li>
                            <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Shop</Link></li>
                            <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Shop single</Link></li>
                            <li><Link href="/pages/portfolio-v2" className="text-custom-blue" onClick={handleLinkClick}>More Webflow Template</Link></li>
                          </ul>
                        </div> */}

                {/* Utility Pages */}
                {/* <div className='grid grid-cols-2'>


                          <div>
                            <h3 className="text-lg font-bold mb-3">Utility Pages</h3>
                            <ul className="space-y-2 text-sm">
                              <li><Link href="/pages/coming-soon" className="hover:text-custom-blue" onClick={handleLinkClick}>Coming Soon</Link></li>
                              <li><Link href="/sign-in" className="hover:text-custom-blue" onClick={handleLinkClick}>Sign In</Link></li>
                              <li><Link href="/sign-up" className="hover:text-custom-blue" onClick={handleLinkClick}>Sign Up</Link></li>
                              <li><Link href="/pages/reset-password" className="hover:text-custom-blue" onClick={handleLinkClick}>Reset Password</Link></li>
                              <li><Link href="/pages/update-password" className="hover:text-custom-blue" onClick={handleLinkClick}>Update Password</Link></li>
                            </ul>
                          </div> */}

                {/* Template Pages */}
                {/* <div>
                            <h3 className="text-lg font-bold mb-3">Template Pages</h3>
                            <ul className="space-y-2 text-sm">
                              <li><Link href="/pages/start-here" className="hover:text-custom-blue" onClick={handleLinkClick}>Start Here</Link></li>
                              <li><Link href="/pages/style-guide" className="hover:text-custom-blue" onClick={handleLinkClick}>Style Guide</Link></li>
                              <li><Link href="/pages/404-not-found" className="hover:text-custom-blue" onClick={handleLinkClick}>404 Not Found</Link></li>
                              <li><Link href="/pages/password-protected" className="hover:text-custom-blue" onClick={handleLinkClick}>Password Protected</Link></li>
                              <li><Link href="/pages/licenses" className="hover:text-custom-blue" onClick={handleLinkClick}>Licenses</Link></li>
                              <li><Link href="/pages/changelog" className="hover:text-custom-blue" onClick={handleLinkClick}>Changelog</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}  */}
              </div>
            </div>
            {/* Cart for Large Screens */}
            {/* <Link href="/cart" className=" flex  justify-items-end lg:gap-4  hover:text-custom-blue" onClick={handleLinkClick}>
              Cart(0)
            </Link> */}
          </div>
        </nav>

        {/* Button for Desktop */}
        <div className="hidden lg:block ">

          <Button text="About Your Pitch Deck" href="/contact-us" />
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden mx-4  flex items-center">
          <button onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? (
              <RiCloseLargeFill className="h-7 w-7 transition-transform duration-300 ease-in-out transform" />
            ) : (
              <TbMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-white shadow-lg z-40 py-4 transition-all duration-200 ease-in-out">
          <div className="flex flex-col pl-2 mx-6 text-left space-y-4">
            <Link href="/" className="text-lg hover:text-custom-blue">Home</Link>
            <Link href="/about" className="text-lg hover:text-custom-blue">About</Link>
            <Link href="/investors" className="text-lg hover:text-custom-blue">Investors</Link>
            <Link href="/portfolio" className="text-lg hover:text-custom-blue">Portfoilo</Link>
            {/* <Li
            {/* <Link href="/blog" className="text-lg hover:text-custom-blue">Blog</Link> */}

            {/* Mobile Pages Dropdown */}
            <div className="relative">
              {/* <button
                // onClick={handleDropdownToggle}
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}

                className="flex items-center justify-center space-x-2 text-lg hover:text-custom-blue"
              >
                Pages
                {isMobileDropdownOpen ? <RiArrowDropUpLine className="h-6 w-6" /> : <RiArrowDropDownLine className="h-6 w-6" />}
              </button> */}

              {/* {isMobileDropdownOpen && (
                <div className="bg-white   p-6 w-full mt-2 shadow-lg border rounded-xl z-50"> */}
              {/* Main Pages */}
              {/* <div>
                    <h3 className="text-lg font-bold mb-3">Main Pages</h3>
                    <ul className="grid grid-cols-3 gap-2 text-sm">
                      <li><Link href="/pages/home-sales" className="hover:text-custom-blue" onClick={handleLinkClick}>Home (sales)</Link></li>
                      <li><Link href="/pages/home-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Home V1</Link></li>
                      <li><Link href="/pages/home-v2" className="hover:text-custom-blue" onClick={handleLinkClick}>Home V2</Link></li>
                      <li><Link href="/pages/home-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Home V3</Link></li>
                      <li><Link href="/pages/about" className="hover:text-custom-blue" onClick={handleLinkClick}>About</Link></li>
                      <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio V1</Link></li>
                      <li><Link href="/pages/portfolio-v2" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio V2</Link></li>
                      <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio V3</Link></li>
                      <li><Link href="/pages/home-sales" className="hover:text-custom-blue" onClick={handleLinkClick}>Portfolio single</Link></li>
                      <li><Link href="/pages/home-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog V1</Link></li>
                      <li><Link href="/pages/home-v2" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog V2</Link></li>
                      <li><Link href="/pages/home-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog V3</Link></li>
                      <li><Link href="/pages/about" className="hover:text-custom-blue" onClick={handleLinkClick}>Blog post</Link></li>
                      <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Contact</Link></li>
                      <li><Link href="/investors" className="hover:text-custom-blue" onClick={handleLinkClick}>Investors</Link></li>
                      <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Investor single</Link></li>
                      <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue" onClick={handleLinkClick}>Shop</Link></li>
                      <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue" onClick={handleLinkClick}>Shop single</Link></li>
                      <li><Link href="/pages/portfolio-v2" className="text-custom-blue" onClick={handleLinkClick}>More Webflow Template</Link></li>
                    </ul>
                  </div> */}

              {/* Utility Pages */}
              {/* <div>
                    <h3 className="text-lg font-bold my-3">Utility Pages</h3>
                    <ul className="grid grid-cols-3 gap-2 text-sm">
                      <li><Link href="/pages/coming-soon" className="hover:text-custom-blue" onClick={handleLinkClick}>Coming Soon</Link></li>
                      <li><Link href="/sign-in" className="hover:text-custom-blue" onClick={handleLinkClick}>Sign In</Link></li>
                      <li><Link href="/sign-up" className="hover:text-custom-blue" onClick={handleLinkClick}>Sign Up</Link></li>
                      <li><Link href="/pages/reset-password" className="hover:text-custom-blue" onClick={handleLinkClick}>Reset Password</Link></li>
                      <li><Link href="/pages/update-password" className="hover:text-custom-blue" onClick={handleLinkClick}>Update Password</Link></li>
                    </ul>
                  </div> */}

              {/* Template Pages */}
              {/* <div>
                    <h3 className="text-lg font-bold my-3">Template Pages</h3>
                    <ul className="grid grid-cols-3 gap-2 text-sm">
                      <li><Link href="/pages/start-here" className="hover:text-custom-blue" onClick={handleLinkClick}>Start Here</Link></li>
                      <li><Link href="/pages/style-guide" className="hover:text-custom-blue" onClick={handleLinkClick}>Style Guide</Link></li>
                      <li><Link href="/pages/404-not-found" className="hover:text-custom-blue" onClick={handleLinkClick}>404 Not Found</Link></li>
                      <li><Link href="/pages/password-protected" className="hover:text-custom-blue" onClick={handleLinkClick}>Password Protected</Link></li>
                      <li><Link href="/pages/licenses" className="hover:text-custom-blue" onClick={handleLinkClick}>Licenses</Link></li>
                      <li><Link href="/pages/changelog" className="hover:text-custom-blue" onClick={handleLinkClick}>Changelog</Link></li>
                    </ul>
                  </div> */}
              {/* </div>
              )} */}
            </div>

            {/* Pitch Your Startup Button in Mobile Menu */}
            <div>
              <Button text="About Your Pitch Deck" href="/contact-us" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;

