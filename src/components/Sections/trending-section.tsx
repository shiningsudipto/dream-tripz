"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//  data for the cards
const cards = [
  {
    id: 1,
    image: "/Blogs/blog-img-1.jpg",
    title: "Card Title 1",
    shortText: "Short description 1",
    rating: "4.5",
  },
  {
    id: 2,
    image: "/Blogs/blog-img-2.jpg",
    title: "Card Title 2",
    shortText: "Short description 2",
    rating: "4.2",
  },
  {
    id: 3,
    image: "/Blogs/blog-img-3.jpg",
    title: "Card Title 3",
    shortText: "Short description 3",
    rating: "4.8",
  },
  {
    id: 4,
    image: "/Blogs/blog-img-4.jfif",
    title: "Card Title 4",
    shortText: "Short description 4",
    rating: "4.6",
  },
  {
    id: 5,
    image: "/Blogs/blog-img-1.jpg",
    title: "Card Title 5",
    shortText: "Short description 5",
    rating: "4.3",
  },
];

const TrendingCategory = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 cards
  const [isNextVisible, setIsNextVisible] = useState(true); // To toggle between Next and Prev buttons

  const handleShowMore = () => {
    setVisibleCount(5); // Show the 5th card
    setIsNextVisible(false); // Toggle button to "Prev"
  };

  const handleShowLess = () => {
    setVisibleCount(4); // Go back to showing 4 cards
    setIsNextVisible(true); // Toggle button to "Next"
  };

  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Trending Categories
      </h2>

      <div className="relative flex items-center gap-6 overflow-hidden pb-4">
        {/* Display cards */}
        <div className="flex gap-6">
          {cards.slice(0, visibleCount).map((card, index) => (
            <div
              key={card.id}
              className="w-[250px] h-[180px] bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            >
              {/* Image and rating */}
              <div className="relative w-full h-[65px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={45}
                  height={45}
                  className="w-10 h-10 absolute top-0 left-1/2 transform -translate-x-1/2"
                />
                <div className="absolute top-2 right-2 text-red-600 p-1 rounded-full shadow-md text-xs">
                  {card.rating} ★
                </div>
              </div>

              {/* Title and short text */}
              <div className="flex flex-col justify-center items-center mt-16 px-2">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 pb-2">{card.shortText}</p>
              </div>
            </div>
          ))}

          {/* Next Button (appears with the 4th card) */}
          {isNextVisible && visibleCount === 4 && (
            <button
              onClick={handleShowMore}
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#003349] text-white p-3 rounded-full shadow-md hover:bg-[#01293b] transition-all"
              style={{ right: "40px" }}
            >
              <FaChevronRight size={20} />
            </button>
          )}

          {/* Prev Button (same position as the Next button) */}
          {!isNextVisible && visibleCount === 5 && (
            <button
              onClick={handleShowLess}
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#003349] text-white p-3 rounded-full shadow-md hover:bg-[#01293b] transition-all"
              style={{ right: "40px" }}
            >
              <FaChevronLeft size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingCategory;
