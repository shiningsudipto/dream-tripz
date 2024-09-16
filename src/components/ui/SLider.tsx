"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { TDestinationSlider } from "@/types";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { TTravelPackage } from "../home/TopPick";
import { IoMdTime } from "react-icons/io";
import { PiUserCircle } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { FaDollarSign } from "react-icons/fa";

type TSlider = {
  prefix?: string;
  slidesPerView?: number;
  sliderType: "destination" | "topPick";
  items: TDestinationSlider[] | TTravelPackage[];
};

const Slider = ({ prefix, items, sliderType, slidesPerView }: TSlider) => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={slidesPerView}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: slidesPerView,
          spaceBetween: 30,
        },
      }}
      spaceBetween={15}
      modules={[Navigation]}
      className={`${prefix}-swiper-container swiper-container`}
    >
      {sliderType === "destination" &&
        (items as TDestinationSlider[])?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="relative">
                <Image
                  src={item.img}
                  height={500}
                  width={500}
                  alt="destination"
                  className="h-[250px] object-cover rounded-xl"
                />
                <div className="bg-black/10 rounded-xl w-full h-full absolute top-0"></div>
                <div className="absolute top-2 right-3 text-white flex items-center gap-3">
                  <p className="flex items-center bg-white/60 text-primary rounded-xl px-2 font-medium">
                    <FaStar className="text-secondary" />
                    {item.rating}
                  </p>
                  <p>({item.totalReview}K Reviews)</p>
                </div>
                <div className="absolute bottom-0 p-4 text-white w-full">
                  <h3 className="font-medium text-lg">{item.place}</h3>
                  <div className="flex justify-between w-full">
                    <div className="flex items-center">
                      <p>
                        <IoLocationSharp className="text-secondary" />
                      </p>
                      <h4 className="">{item.address.slice(0, 20)}...</h4>
                    </div>
                    <p className="font-semibold text-xl text-end">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      {sliderType === "topPick" &&
        (items as TTravelPackage[])?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="p-4 bg-white shadow-xl rounded-xl border my-10">
                <Image
                  src={item.image}
                  alt={item.location}
                  height={400}
                  width={400}
                  className="w-full h-[250px] object-cover rounded-xl"
                />
                <h2 className="text-xl font-bold text-primary mt-5">
                  {item.title}
                </h2>
                <div className="flex items-center justify-between my-3 font-medium">
                  <p className="flex items-center gap-1">
                    <IoMdTime className="text-secondary" />
                    {item.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <PiUserCircle className="text-secondary" />
                    People: {item.people}
                  </p>
                  <p className="flex items-center gap-2">
                    <GrLocation className="text-secondary" />
                    {item.location}
                  </p>
                </div>
                <p>{item.description.slice(0, 90)}...</p>
                <div className="flex justify-between mt-5">
                  <div className="flex gap-2">
                    <p className="text-xl font-bold text-primary flex items-center">
                      <FaDollarSign /> {item.price}
                    </p>
                    <p className="text-sm flex items-center mt-3">
                      <FaDollarSign className="size-[12px]" />
                      {item.originalPrice}
                    </p>
                  </div>
                  <button className="py-2 px-6 bg-primary text-white rounded-full font-medium hover:bg-primary-500">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
