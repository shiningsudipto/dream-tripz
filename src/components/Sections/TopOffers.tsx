"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Offers data
const offers = [
  {
    id: 3,
    smallTitle: "Desert Safari",
    offerTitle:
      "25% Off Desert Safari – Adventure awaits. Limited spots available!",
    discount: "25% OFF",
    shortText: "Explore city, special rates.",
    image: "/offers/offer-3.jpg",
  },
  {
    id: 4,
    smallTitle: "City Lights",
    offerTitle:
      "30% Off Beach Resort – Luxurious stay at discounted price. Book now!",
    discount: "20% OFF",
    shortText: "Thrilling adventure, limited slots.",
    image: "/offers/offer-4.jpg",
  },
  {
    id: 1,
    smallTitle: "Exclusive Experience",
    offerTitle:
      "40% Off Mountain Adventure – Experience nature at reduced rates. Reserve today!",
    discount: "50% OFF",
    shortText: "Relaxation at great discount.",
    image: "/offers/offer-1.jpg",
  },
  {
    id: 2,
    smallTitle: "Luxury Getaway",
    offerTitle:
      "20% Off City Tours – Explore iconic landmarks at special rates.",
    discount: "30% OFF",
    shortText: "Exclusive desert adventure awaits.",
    image: "/offers/offer-2.jpg",
  },
];

const TopOffers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<"next" | "prev">("next");

  // Check window size for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Add listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener
    };
  }, []);

  // Handle Next Button
  const handleNext = () => {
    const itemsToShow = isMobile ? 1 : 2;
    if (currentIndex < offers.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
      setActiveButton("next");
    }
  };

  // Handle Previous Button
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setActiveButton("prev");
    }
  };

  return (
    <section className="container mx-auto mt-[190px] px-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold">
          Our Experience Top Offers
        </h2>
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
      <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
        {offers
          .slice(currentIndex, currentIndex + (isMobile ? 1 : 2))
          .map((offer) => (
            <div
              key={offer.id}
              className="w-full md:w-[calc(50%-1rem)] bg-white shadow-lg my-2 rounded-lg flex-shrink-0 flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 p-4">
                <Image
                  src={offer.image}
                  alt={offer.offerTitle}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 p-4 flex flex-col justify-between">
                <h4 className="text-sm font-semibold text-gray-800">
                  {offer.smallTitle}
                </h4>
                <h3 className="text-xl mt-5 font-bold text-gray-900">
                  {offer.offerTitle}
                </h3>
                <p className="text-gray-800 text-sm truncate mt-auto">
                  {offer.shortText}
                </p>
                <button className="bg-[#003349] w-7/12 mx-auto rounded-full text-white text-sm py-2 px-4 mt-4 hover:bg-[#01293b] transition-all">
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TopOffers;
