"use client";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { customerData, TCustomer } from "../../utils/customers.utils";
import AvatarGroup from "../shared/AvatarGroup";
const CustomersSay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCustomer, setActiveCustomer] = useState<TCustomer>(
    customerData[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoPlay = () => {
    setIsPlaying(true);
    const video = document.getElementById("customerVideo") as HTMLIFrameElement;
    if (video) {
      video.src += "?autoplay=1";
    }
  };

  const handleAvatarClick = (customer: TCustomer) => {
    setActiveCustomer(customer);
    setIsPlaying(false);
    setCurrentIndex(customerData.findIndex((c) => c.id === customer.id));
  };

  const handleDotClick = (index: number) => {
    setActiveCustomer(customerData[index]);
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <div className="container mx-auto py-10 px-4 mt-[190px]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side: Title, Text, Customer Info */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center relative">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            What Our Customers Say About Us😍
          </h2>
          <p className="text-lg text-gray-600 mb-8">{activeCustomer.review}</p>

          {/* Customer Info */}
          <div className="space-y-4">
            <div>
              <p className="text-xl font-semibold text-gray-900">
                {activeCustomer.name}
              </p>
              <p className="text-sm text-gray-800 font-semibold">
                {activeCustomer.position}
              </p>
            </div>
            {/* Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(activeCustomer.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
              <p className="text-gray-700">({activeCustomer.rating}/5)</p>
            </div>
          </div>

          {/* Play Button (for mobile) */}
          <div className="lg:hidden flex justify-center items-center mt-4">
            <div
              className="bg-white h-12 w-12 rounded-full p-4 shadow-lg cursor-pointer"
              onClick={handleVideoPlay}
            >
              <FaPlay className="text-green-500 w-8 h-8" />
            </div>
          </div>
        </div>

        {/* Right Side: Video Section */}
        <div className="lg:w-1/2 w-full relative flex items-center justify-center">
          <div className="relative w-full h-full bg-black">
            <iframe
              id="customerVideo"
              className="w-full h-[300px] lg:h-[400px] object-cover"
              src={activeCustomer.videoLink}
              title="Customer Testimonial Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            {!isPlaying && (
              <div
                className="absolute inset-0 hidden lg:flex -ml-7 items-center cursor-pointer"
                onClick={handleVideoPlay}
              >
                <div className="bg-white h-12 w-12 flex items-center justify-center rounded-full shadow-xl transform transition-transform duration-300 hover:scale-110">
                  <FaPlay className="text-[#002B3E] w-6 h-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Customer Profiles Section */}
      <div className="flex justify-center mt-8">
        <div className="avatar-group flex -space-x-6 rtl:space-x-reverse">
          {customerData.map((customer) => (
            <div
              key={customer.id}
              className="avatar cursor-pointer"
              onClick={() => handleAvatarClick(customer)}
            >
              <AvatarGroup></AvatarGroup>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Dots */}
      <div className="flex mx-auto md:mr-[20%] justify-center md:justify-end">
        {customerData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-[#002B3E]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomersSay;
