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

type TSlider = {
  prefix?: string;
  items: TDestinationSlider[];
};

const Slider = ({ prefix, items }: TSlider) => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={4}
      spaceBetween={15}
      modules={[Navigation]}
      className={`${prefix}-swiper-container swiper-container`}
    >
      {items?.map((item, index) => {
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
    </Swiper>
  );
};

export default Slider;
