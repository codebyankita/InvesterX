'use client'
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Button from "./Button";
import Logo from "./Logo";
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();  // Get the current pathname
  const noFooterPages = ['/sign-in', '/sign-up'];

  if (noFooterPages.includes(pathname)) {
    return null;  // Return null if on pages where the footer should not be shown
  }

  return (
    <div className="flex flex-col items-center bg-[#f6f8ff] pt-20">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full lg:max-w-7xl">
        <div className="flex lg:flex-row flex-col mb-8 lg:justify-between">
          <h1 className="lg:text-4xl text-3xl flex my-4 lg:my-0 lg:w-2/5 w-full lg:text-left text-center font-semibold text-gray-900">
            We invest in the companies of the future, today
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center  lg:w-2/5 w-full lg:gap-5 gap-2">
            <div className="flex gap-2 md:gap-4 justify-center">
              <div className="group flex items-center justify-center p-2 transform transition-all duration-300 hover:scale-110 hover:text-custom-blue hover:translate-y-[-5px]">
                <FaFacebookF />
              </div>
              <div className="group flex items-center justify-center p-2 transform transition-all duration-300 hover:scale-110 hover:text-custom-blue hover:translate-y-[-5px]">
                <FaTwitter />
              </div>
              <div className="group flex items-center justify-center p-2 transform transition-all duration-300 hover:scale-110 hover:text-custom-blue hover:translate-y-[-5px]">
                <AiFillInstagram />
              </div>
              <div className="group flex items-center justify-center p-2 transform transition-all duration-300 hover:scale-110 hover:text-custom-blue hover:translate-y-[-5px]">
                <FaLinkedinIn />
              </div>
            </div>
            <Button text="Pitch Your Startup" />
          </div>
        </div>

        {/* pages part */}
        {/* <div className="grid lg:grid-cols-6   md:grid-cols-4 grid-cols-1 gap-8">
          <div className="md:col-span-3 lg:col-span-3 col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Main pages
            </h2>
            <ul className="text-gray-700 grid md:grid-rows-7  grid-rows-10 grid-flow-col space-y-2 ">
              <li>Home (sales)</li>
              <li>Home V1</li>
              <li>Home V2</li>
              <li>Home V3</li>
              <li>About</li>
              <li>Portfolio V1</li>
              <li>Portfolio V2</li>
              <li>Portfolio V3</li>
              <li>Portfolio single</li>
              <li>Blog V1</li>
              <li>Blog V2</li>
              <li>Blog V3</li>
              <li>Blog post</li>
              <li>Contact</li>
              <li>Investors</li>
              <li>Investor single</li>
              <li>Shop</li>
              <li>Shop single</li>

              <li>
                <a href="#" className="text-blue-600 flex flex-wrap">
                  More Webflow Template
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Utility pages
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>Coming soon</li>
              <li>Sign in</li>
              <li>Sign up</li>
              <li>Reset password</li>
              <li>Update Password</li>
            </ul>
          </div>

          <div className="">

            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Template pages
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>Start here</li>
              <li>Style guide</li>
              <li>404 not found</li>
              <li>Password protected</li>
              <li>Licenses</li>
              <li>Changelog</li>
            </ul>
          </div> */}
        <div className="">
          <div className="">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Contact us
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li className=" transform group-hover:translate-x-3 transition-all duration-400">
                <i className="fas fa-envelope"></i> Send us a message{" "}
                <a href="mailto:contact@invstor.com" className="text-blue-600">
                  contact@invstor.com
                </a>
              </li>
              <li className=" transform group-hover:translate-x-3 transition-all duration-400">
                <i className="fas fa-phone"></i> Give us a call{" "}
                <a href="tel:+14147930681" className="text-blue-600">
                  (414) 793 - 0681
                </a>
              </li>
            </ul>
          </div>

        </div>
        <hr className="mt-6" />
        <div className="text-center flex lg:flex-row flex-col justify-between text-gray-700 py-5  ">
          <div className="flex justify-center items-center   ">
            <Logo />
          </div>
          <p>
            Copyright © Angelica Capital
            {/* <a href="#" className="text-blue-600">
              BRIX Templates
            </a>{" "}
            - Powered by{" "}
            <a href="#" className="text-blue-600">
              Webflow
            </a> */}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
