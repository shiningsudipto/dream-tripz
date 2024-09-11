"use client";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { FaPlay } from "react-icons/fa";

const customerData = [
  {
    id: 1,
    name: "Michael Williams",
    position: "Founder, Startup B",
    rating: 5,
    profileImage: "/user/user-1.png",
    videoLink: "https://www.youtube.com/embed/5myfOaVzKw0",
    review: "Fantastic team and excellent work ethics.",
  },
  {
    id: 2,
    name: "Sarah Lee",
    position: "COO, Enterprise C",
    rating: 4,
    profileImage: "/user/user-2.png",
    videoLink: "https://www.youtube.com/embed/WnMnpUxJTfA",
    review: "Reliable services and timely delivery.",
  },
  {
    id: 3,
    name: "Chris Evans",
    position: "Director, Company D",
    rating: 4,
    profileImage: "/user/user-4.png",
    videoLink: "https://www.youtube.com/embed/BB1Ro_eplMc",
    review: "Very happy with the outcomes.",
  },
  {
    id: 4,
    name: "Sophia Williams",
    position: "Marketing Manager, Company E",
    rating: 5,
    profileImage: "/user/user-5.png",
    videoLink: "https://www.youtube.com/embed/jBrzJwsYSB8",
    review: "Excellent service with great support.",
  },
];

const CustomersSay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCustomer, setActiveCustomer] = useState(customerData[0]);

  const handleVideoPlay = () => {
    setIsPlaying(true);
    const video = document.getElementById("customerVideo") as HTMLIFrameElement;
    if (video) {
      video.src += "?autoplay=1";
    }
  };

  const handleAvatarClick = (
    customer: SetStateAction<{
      id: number;
      name: string;
      position: string;
      rating: number;
      profileImage: string;
      videoLink: string;
      review: string;
    }>
  ) => {
    setActiveCustomer(customer);
    setIsPlaying(false);
  };

  return (
    <div className="container mx-auto py-10 px-4 mt-[190px]">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side: Title, Text, Customer Info */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center relative">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mb-8">{activeCustomer.review}</p>

          <div className="space-y-4">
            {/* Customer Info */}
            <div>
              <p className="text-xl font-semibold text-gray-900">
                {activeCustomer.name}
              </p>
              <p className="text-sm text-gray-500">{activeCustomer.position}</p>
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

          {/* Play Button in the middle between the sections */}
          <div className="lg:hidden flex justify-center items-center mt-4">
            <div
              className="bg-white rounded-full p-4 shadow-lg cursor-pointer"
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
              <div className="w-12">
                <Image
                  src={customer.profileImage}
                  alt={customer.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
