"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b fixed bottom-0 from-[#b3f0e4d0] via-[#FFFFFF] to-[#b3f0e4d0] text-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-4">
        {/* Company Logo Section */}
        <div>
          <Image
            src="/dream-tripz-logo.png"
            alt="Dream Tripz Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="mb-4">
            Explore the world with us. We provide top-quality travel services to
            make your trips unforgettable.
          </p>

          <div className="flex justify-between items-center">
            <h3 className="text-gray-800 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-xl text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="text-xl text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-800 text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Tour Package
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h3 className="text-gray-800 text-lg font-semibold mb-4">
            Categories
          </h3>
          <ul>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="h-40 w-full text-center p-4 rounded-md ">
          <h3 className="text-gray-800 text-lg font-semibold mb-4">
            Get in Touch
          </h3>

          <div>
            <input
              type="email"
              className="p-2 text-gray-700 border border-gray-300 rounded-full"
              placeholder="Email"
            />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="py-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center bg-black text-white">
        {/* Left Side: Copyright */}
        <p className="text-white text-sm mb-4 md:mb-0">
          &copy; 2024 Dream Tripz. All rights reserved.
        </p>

        {/* Center: Built with ❤️ */}
        <p className="text-center text-white text-sm mb-4 md:mb-0">
          Built with <span className="text-gray-300">❤️</span> by Dream Tripz
          Team
        </p>

        {/* Right Side: Privacy and Terms */}
        <div className="text-white text-sm">
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
