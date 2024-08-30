"use client";

import { categories, menuLinks } from "@/constants/menuLinks.const";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="md:fixed mt-20 bottom-0 left-0 right-0   text-gray-800 ">
      <div className="container pb-[50px] pt-[10px]  px-[114px] bg-gradient-to-l from-[#ffffff] via-[#ddfffe] to-[#ffffff]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo Section */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <Image
              src="/dream-tripz-logo.png"
              alt="Dream Tripz Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="mb-4 text-center md:text-left">
              Explore the world with us. We provide top-quality travel services
              to make your trips unforgettable.
            </p>
            <div className="md:w-full items-center  md:flex justify-between ">
              <div className="text-lg font-semibold items-center mb-4 md:mb-0 text-center">
                <h1>Follow Us</h1>
              </div>
              <div className="flex space-x-2 ">
                <Link
                  href="#"
                  className="text-xl text-gray-800 hover:text-gray-600  "
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="#"
                  className="text-xl text-gray-800 hover:text-gray-600 "
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  className="text-xl text-gray-800 hover:text-gray-600 "
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="#"
                  className="text-xl text-gray-800 hover:text-gray-600 "
                >
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-gray-800 text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="text-center md:text-left">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-gray-800 text-lg font-semibold mb-4">
              Categories
            </h3>
            <ul className="text-center md:text-left">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.path}
                    className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-gray-800 text-lg font-semibold mb-4">
              Get in Touch
            </h3>
            <p>Question or feedback?</p>
            <p>We'd lave to here from you</p>
            <div className="flex items-center">
              <input
                type="email"
                className="p-2 mt-4 text-gray-700 border border-gray-300 rounded-full"
                placeholder="Email"
              />
              <IoMailSharp className="size-7 -ml-10 text-[#003349] mt-4 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="py-2 md:px-[114px] w-full border-t  border-gray-300 flex flex-col md:flex-row justify-between items-center bg-[#003349] text-white">
        {/* Left Side: Copyright */}
        <p className="text-white text-sm mb-4 md:mb-0 text-center md:text-left">
          &copy; 2024 Dream Tripz. All rights reserved.
        </p>

        {/* Center: Built with ❤️ */}
        <p className="text-center text-white text-sm mb-4 md:mb-0">
          Built with <span className="text-gray-300">❤️</span> by Dream Tripz
          Team
        </p>

        {/* Right Side: Privacy and Terms */}
        <div className="text-white text-sm text-center md:text-right">
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors duration-200"
          >
            Terms of Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
