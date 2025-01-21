'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Button from './Button';
// import Dropdown from './Dropdown';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

 // Track scroll direction
 useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scroll down
      setShowHeader(false);
    } else {
      // Scroll up
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [lastScrollY]);

// Open dropdown on hover
const handleMouseEnter = () => setIsDropdownOpen(true);
const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <header
    className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
      showHeader ? 'translate-y-0' : '-translate-y-full'
    }`}
  >
      <div className="container mx-auto flex justify-between items-center py-4">
        <nav className="md:flex space-x-5">
          <div className="flex items-center gap-9">
            {/* Logo */}
            <Logo />
            <Link href="/" className="hover:text-custom-blue">
              Home
            </Link>
            <Link href="/about" className="hover:text-custom-blue">
              About
            </Link>
            <Link href="/blog" className="hover:text-custom-blue">
              Blog
            </Link>
  {/* Pages Dropdown */}
  <div
             className="relative"
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
           >
              <button
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
                <div
                  className="fixed  left-1/4 right-2/4   top-28 justify-center items-center  bg-opacity-50 z-50"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div
                    className="bg-white w-[900px] rounded-2xl border p-10 overflow-y-auto max-h-[80%]"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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
                          <li><Link href="/pages/portfolio-v2" className="hover:text-custom-blue">Investors</Link></li>
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
            <Link href="/cart" className="flex items-center gap-4 hover:text-custom-blue ">
              Cart(0)
            </Link>
          </div>
        </nav>
        <Button text="Pitch Your Startup" href="/your-link-here" />
      </div>
    </header>
  );
};

export default Header;
