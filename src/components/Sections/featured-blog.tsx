"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaComments,
  FaMapMarkerAlt,
} from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Exploring the Beauty",
    location: "Mountain Range",
    comments: 12,
    content:
      "Discover the breathtaking views and adventures that await in the serene mountain ranges. There's so much to explore from trails to peaks, making it a perfect escape for nature lovers.",
    profileImg: "/user/user-1.png",
    author: "John Doe",
    date: "August 20, 2024",
    image: "/Blogs/blog-img-1.jpg",
  },
  {
    id: 2,
    title: "A Journey Through the Desert",
    location: "Sahara Desert",
    comments: 8,
    content:
      "Explore the endless sands and unique cultures of the vast Sahara Desert. Adventure and awe await in every dune and sunset, providing an unforgettable experience.",
    profileImg: "/user/user-2.png",
    author: "Jane Smith",
    date: "September 5, 2024",
    image: "/Blogs/blog-img-2.jpg",
  },
  {
    id: 3,
    title: "Cityscapes: The Urban Jungle",
    location: "New York City",
    comments: 25,
    content:
      "Dive into the bustling streets and towering skyscrapers of New York City. From vibrant neighborhoods to iconic landmarks, the city never sleeps and there's always something to see.",
    profileImg: "/user/user-4.png",
    author: "Mike Johnson",
    date: "July 15, 2024",
    image: "/Blogs/blog-img-3.jpg",
  },
  {
    id: 4,
    title: "Tropical Paradise: A Beach Getaway",
    location: "Maldives",
    comments: 18,
    content:
      "Relax and unwind on the pristine beaches of the Maldives. Crystal-clear waters, soft sand, and endless sunshine make this a must-visit destination for those seeking tranquility.",
    profileImg: "/user/user-5.png",
    author: "Anna Lee",
    date: "August 30, 2024",
    image: "/Blogs/blog-img-4.jfif",
  },
];

const FeaturedBlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeButton, setActiveButton] = useState<"next" | "prev">("next");
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const handleNext = () => {
    if (currentIndex < blogs.length - 1) {
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

  const toggleReadMore = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: number) => expandedIds.includes(id);

  return (
    <section className="container mx-auto py-10 px-4  mt-[190px]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Featured Blog Posts</h2>
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

      {/* Blog Cards */}
      <div className="flex gap-6 overflow-hidden transition-all duration-300 ease-in-out">
        {blogs.slice(currentIndex, currentIndex + 3).map((blog) => (
          <div
            key={blog.id}
            className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] bg-white shadow-md rounded-lg p-4 my-2 flex-shrink-0"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <div className="flex items-center text-red-600">
                <FaMapMarkerAlt className="mr-1" />
                {blog.location}
              </div>
              <div className="flex items-center text-gray-700">
                <FaComments className="mr-1" />
                Comments {blog.comments}
              </div>
            </div>
            <h3 className="mt-4 font-semibold text-lg">{blog.title}</h3>

            {/* Content with Read More/Read Less functionality */}
            <p className="text-gray-600 mt-2 text-sm">
              {isExpanded(blog.id) ? (
                <>
                  {blog.content}
                  <span
                    className="text-gray-600 cursor-pointer ml-2"
                    onClick={() => toggleReadMore(blog.id)}
                  >
                    Read less
                  </span>
                </>
              ) : (
                <>
                  {blog.content.slice(0, 100)}{" "}
                  <span
                    className="text-gray-600 cursor-pointer"
                    onClick={() => toggleReadMore(blog.id)}
                  >
                    Read more...
                  </span>
                </>
              )}
            </p>

            <div className="flex items-center mt-4">
              <Image
                src={blog.profileImg}
                alt={blog.author}
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="ml-3 text-sm text-gray-900">
                <p className="font-semibold">{blog.author}</p>
                <p className="">{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogSection;
