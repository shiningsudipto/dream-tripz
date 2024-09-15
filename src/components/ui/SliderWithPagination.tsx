"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Player from "./Player";
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import "./style.css";
import { FaPauseCircle } from "react-icons/fa";

const SliderWithPagination = ({ prefix, items }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    if (index === playingIndex) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`${prefix}-swiper-pagination-container swiper-pagination-container relative`}
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index} className="rounded-xl">
              <div className="relative">
                <Player url={item.video} isPlaying={playingIndex === index} />

                {/* Play button on the right side */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-[9999]">
                  <button
                    onClick={() => handlePlay(index)}
                    className="text-white"
                  >
                    {index != playingIndex ? (
                      <FaPlayCircle
                        size={60}
                        className="text-primary border-4 border-white rounded-full"
                      />
                    ) : (
                      <FaPauseCircle
                        size={60}
                        className="text-primary border-4 border-white rounded-full"
                      />
                    )}
                  </button>
                </div>
                <div className="mt-10"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderWithPagination;
