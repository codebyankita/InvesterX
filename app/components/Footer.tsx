import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Button from './Button';
import Logo from './Logo';



const Footer = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-7xl">
        <div className=" flex mb-8">
          <h1 className="text-4xl flex  w-3/5  font-semibold text-gray-900">
            We invest in the companies of the future, today
          </h1>
          <div className="flex items-center justify-end w-2/5 gap-5">
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
            <Button text="Pitch Your Startup" href="/your-link-here" />
          </div>
        </div>
        {/* pages part */}
        <div className="flex flex-row gap-8 ">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Main pages
            </h2>
            <ul className="text-gray-700 grid grid-cols-3 gap-2 ">
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
                <a href="#" className="text-blue-600">
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
          <div>
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
          </div>
          <div>
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
        <hr  className="mt-7"/>
        <div className="text-center flex justify-between text-gray-700 pt-8">
          <div className="flex justify-center items-center  ">
           <Logo />
          </div>
          <p>
            Copyright © Investor X | Designed by{" "}
            <a href="#" className="text-blue-600">
              BRIX Templates
            </a>{" "}
            - Powered by{" "}
            <a href="#" className="text-blue-600">
              Webflow
            </a>
          </p>
        </div>
      </div>
      <footer className="w-full mt-20">
 {/* main footer */}
        {/* <div className="bg-blue-600 text-white py-4 fixed bottom-0 w-full">
          <div className="flex justify-center items-center">
            <span>
              Like Investor X Webflow Template? Get it today on the Webflow
              Marketplace
            </span>
            <a
              href="#"
              className="ml-4 bg-white text-blue-600 px-4 py-2 rounded-full"
            >
              Buy now
            </a>
          </div>
        </div>  */}
      </footer>
    </div>
  );
};

export default Footer;
