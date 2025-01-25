'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Button from './Button';
import { TbMenu } from "react-icons/tb";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);





  // Toggle dropdown on click
  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
  };
  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(prev => !prev);
  };



  return (
    <header className="sticky top-0 z-50 bg-white md:bg-[#f6f8ff] shadow-md">
      <div className="lg:container mx-auto flex lg:justify-between justify-around items-center py-4 sm:py-2">



        {/* Logo and Desktop Navigation */}
        <nav className=" flex space-x-5">
          <div className="flex items-center justify-start  lg:gap-9 md:gap-36 gap-20">
            {/* Logo */}
            <Logo />
            {/* Links for Large Screens */}
            <div className="hidden lg:flex space-x-5">
              <Link href="/" className="hover:text-custom-blue">
                Home
              </Link>
              <Link href="/about" className="hover:text-custom-blue">
                About
              </Link>
              <Link href="/blog" className="hover:text-custom-blue">
                Blog
              </Link>

              {/* Pages Dropdown for Desktop */}
              <div
                className="relative"
                ref={dropdownRef}
              // Open on hover
              // onMouseLeave={handleHoverLeave} // Close on hover leave
              >
                <button
                  onClick={handleDropdownToggle} // Toggle dropdown on click
                  className="flex items-center justify-center space-x-2 hover:text-custom-blue"
                >
                  Pages
                  {isDropdownOpen ? (
                    <RiArrowDropUpLine className="h-7 w-7" />
                  ) : (
                    <RiArrowDropDownLine className="h-7 w-7" />
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="fixed left-1/4 right-2/4 top-28 justify-center items-center bg-opacity-50 z-50">
                    <div
                      className="bg-white w-[900px] rounded-2xl border p-10 overflow-y-auto max-h-[80%]"
                      onClick={(e) => e.stopPropagation()} // Prevent dropdown closure on interaction
                    >
                      <div className="flex flex-row gap-8">
                        {/* Main Pages */}
                        <div>
                          <h3 className="text-lg font-bold mb-3">Main Pages</h3>
                          <ul className="grid grid-cols-3 gap-2 text-sm">
                            <li><Link href="/pages/home-sales" className="hover:text-custom-blue">Home (sales)</Link></li>
                            <li><Link href="/pages/home-v1" className="hover:text-custom-blue">Home V1</Link></li>
                            <li><Link href="/pages/home-v2" className="hover:text-custom-blue">Home V2</Link></li>
                            <li><Link href="/pages/home-v3" className="hover:text-custom-blue">Home V3</Link></li>
                            <li><Link href="/pages/about" className="hover:text-custom-blue">About</Link></li>
                            <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue">Portfolio V1</Link></li>
                            <li><Link href="/pages/portfolio-v2" className="hover:text-custom-blue">Portfolio V2</Link></li>
                            <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue">Portfolio V3</Link></li>
                            <li><Link href="/pages/home-sales" className="hover:text-custom-blue">Portfolio single</Link></li>
                            <li><Link href="/pages/home-v1" className="hover:text-custom-blue">Blog V1</Link></li>
                            <li><Link href="/pages/home-v2" className="hover:text-custom-blue">Blog V2</Link></li>
                            <li><Link href="/pages/home-v3" className="hover:text-custom-blue">Blog V3</Link></li>
                            <li><Link href="/pages/about" className="hover:text-custom-blue">Blog post</Link></li>
                            <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue">Contact</Link></li>
                            <li><Link href="/investors" className="hover:text-custom-blue">Investors</Link></li>
                            <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue">Investor single</Link></li>
                            <li><Link href="/pages/portfolio-v1" className="hover:text-custom-blue">Shop</Link></li>
                            <li><Link href="/pages/portfolio-v3" className="hover:text-custom-blue">Shop single</Link></li>
                            <li><Link href="/pages/portfolio-v2" className="text-custom-blue">More Webflow Template</Link></li>
                          </ul>
                        </div>

                        {/* Utility Pages */}
                        <div>
                          <h3 className="text-lg font-bold mb-3">Utility Pages</h3>
                          <ul className="space-y-2 text-sm">
                            <li><Link href="/pages/coming-soon" className="hover:text-custom-blue">Coming Soon</Link></li>
                            <li><Link href="/pages/sign-in" className="hover:text-custom-blue">Sign In</Link></li>
                            <li><Link href="/pages/sign-up" className="hover:text-custom-blue">Sign Up</Link></li>
                            <li><Link href="/pages/reset-password" className="hover:text-custom-blue">Reset Password</Link></li>
                            <li><Link href="/pages/update-password" className="hover:text-custom-blue">Update Password</Link></li>
                          </ul>
                        </div>

                        {/* Template Pages */}
                        <div>
                          <h3 className="text-lg font-bold mb-3">Template Pages</h3>
                          <ul className="space-y-2 text-sm">
                            <li><Link href="/pages/start-here" className="hover:text-custom-blue">Start Here</Link></li>
                            <li><Link href="/pages/style-guide" className="hover:text-custom-blue">Style Guide</Link></li>
                            <li><Link href="/pages/404-not-found" className="hover:text-custom-blue">404 Not Found</Link></li>
                            <li><Link href="/pages/password-protected" className="hover:text-custom-blue">Password Protected</Link></li>
                            <li><Link href="/pages/licenses" className="hover:text-custom-blue">Licenses</Link></li>
                            <li><Link href="/pages/changelog" className="hover:text-custom-blue">Changelog</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Cart for Large Screens */}
            <Link href="/cart" className=" flex  justify-items-end lg:gap-4  hover:text-custom-blue">
              Cart(0)
            </Link>
          </div>
        </nav>

        {/* Button for Desktop */}
        <div className="hidden md:block ">

          <Button text="Pitch Your Startup" href="/your-link-here" />
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden mx-4 md:mx-2 flex items-center">
          <button onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? (
              <RiCloseLargeFill className="h-7 w-7" />
            ) : (
              <TbMenu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-white shadow-lg z-40 py-6">
          <div className="flex flex-col mx-6 text-left space-y-6">
            <Link href="/" className="text-lg hover:text-custom-blue">Home</Link>
            <Link href="/about" className="text-lg hover:text-custom-blue">About</Link>
            <Link href="/blog" className="text-lg hover:text-custom-blue">Blog</Link>

            {/* Mobile Pages Dropdown */}
            <div className="relative">
              <button
                onClick={handleDropdownToggle}
                className="flex items-center justify-center space-x-2 text-lg hover:text-custom-blue"
              >
                Pages
                {isDropdownOpen ? <RiArrowDropUpLine className="h-6 w-6" /> : <RiArrowDropDownLine className="h-6 w-6" />}
              </button>

              {isDropdownOpen && (
                <div className="bg-white p-6 w-full mt-2 shadow-lg border rounded-xl z-50">
                  <ul className="space-y-2">
                    {/* Links for Mobile Pages */}
                    <li><Link href="/pages/home-sales" className="hover:text-custom-blue">Main Pages</Link></li>
                    <li><Link href="/pages/about" className="hover:text-custom-blue">Utility Pages</Link></li>
                    <li><Link href="/pages/contact" className="hover:text-custom-blue">Template Pages</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Pitch Your Startup Button in Mobile Menu */}
            <div>
              <Button text="Pitch Your Startup" href="/your-link-here" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
