"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const offers = [
  {
    id: 1,
    smallTitle: "Exclusive Experience",
    offerTitle: "50% Off on Mountain Adventure",
    discount: "50% OFF",
    shortText:
      "Book now and enjoy a thrilling mountain adventure at half the price! This offer is limited.",
    image: "/offers/offer-1.jpg",
  },
  {
    id: 2,
    smallTitle: "Luxury Getaway",
    offerTitle: "30% Off on Beach Resort Stay",
    discount: "30% OFF",
    shortText:
      "Relax on the beach with this amazing offer for a luxurious resort stay. Book now!",
    image: "/offers/offer-2.jpg",
  },
  {
    id: 3,
    smallTitle: "Desert Safari",
    offerTitle: "25% Off on Desert Adventure",
    discount: "25% OFF",
    shortText:
      "Experience the magic of the desert with this exclusive offer. Limited slots available!",
    image: "/offers/offer-3.jpg",
  },
  {
    id: 4,
    smallTitle: "City Lights",
    offerTitle: "20% Off on New York City Tour",
    discount: "20% OFF",
    shortText:
      "Explore the iconic city of New York with a special discount on all tours. Book your spot!",
    image: "/offers/offer-4.jpg",
  },
];

const OurExperienceTopOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState<"next" | "prev">("next");

  const handleNext = () => {
    if (currentIndex < offers.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveButton("prev");
    }
  };

  return (
    <section className="container mx-auto py-10 px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Our Experience Top Offers</h2>
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className={`text-gray-600 rounded-full p-2 transition-all ${
              activeButton === "prev"
                ? "bg-[#003349] text-white"
                : "hover:bg-[#003349] hover:text-white"
            }`}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className={`text-gray-600 rounded-full p-2 transition-all ${
              activeButton === "next"
                ? "bg-[#003349] text-white"
                : "hover:bg-[#003349] hover:text-white"
            }`}
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Offers Cards */}
      <div className="flex gap-6 overflow-hidden">
        {offers.slice(currentIndex, currentIndex + 2).map((offer) => (
          <div
            key={offer.id}
            className="w-full md:w-[calc(50%-1rem)] bg-white shadow-md rounded-lg flex-shrink-0 flex"
          >
            {/* Image Section - 60% with Padding */}
            <div className="w-3/5 p-4">
              <Image
                src={offer.image}
                alt={offer.offerTitle}
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Content Section - 40% with Padding */}
            <div className="w-2/5 p-4 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-semibold text-gray-800">
                  {offer.smallTitle}
                </h4>
                <h3 className="text-xl font-bold text-gray-900 mt-2">
                  {offer.offerTitle}
                </h3>
                <p className="text-gray-800 mt-2">{offer.shortText}</p>
              </div>
              <button className="bg-[#003349] text-white text-sm py-2 px-4 rounded-md mt-4 hover:bg-[#01293b] transition-all">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurExperienceTopOffers;
