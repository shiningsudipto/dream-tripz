"use client";
import { places } from "@/utils/places.utils";
import { prices } from "@/utils/prices.utils";
import { useState } from "react";
import { LuCalendarRange } from "react-icons/lu";
import { MdOutlineDirections, MdOutlineLock } from "react-icons/md";
import DatePicker from "../ui/DatePicker";
import Dropdown from "../ui/Dropdown";

const SearchSelectionFields = () => {
  const [isCheckInDateModalOpen, setCheckInDateModalOpen] =
    useState<boolean>(false);
  const [isCheckOutDateModalOpen, setCheckOutDateModalOpen] =
    useState<boolean>(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());

  return (
    <div className="shadow-lg md:h-[100px] w-full md:rounded-full rounded-lg p-5">
      <div className="md:flex md:justify-between grid grid-cols-2 gap-5 items-center">
        <div className="pr-5 border-r-2 border-secondary md:h-[60px]">
          <p className="flex items-center gap-2 font-medium">
            <MdOutlineDirections className="text-xl text-secondary" />
            Destination
          </p>
          <Dropdown
            options={places}
            placeholder="Search places"
            searchable
            values="dhaka"
            prefix="banner-search"
          />
        </div>
        <div className="pr-5 md:border-r-2 border-secondary md:h-[60px] text-center">
          <p
            onClick={() => setCheckInDateModalOpen(true)}
            className="flex items-center gap-2 font-medium cursor-pointer hover:text-primary mb-1"
          >
            <LuCalendarRange className="text-xl text-secondary" />
            Check-in date
          </p>
          <p>{checkInDate ? checkInDate.toLocaleDateString() : "Date"}</p>
          <DatePicker
            isOpen={isCheckInDateModalOpen}
            setIsOpen={setCheckInDateModalOpen}
            selectedDate={checkInDate}
            setDate={setCheckInDate}
          />
        </div>
        <div className="pr-5 border-r-2 border-secondary md:h-[60px] text-center">
          <p
            onClick={() => setCheckOutDateModalOpen(true)}
            className="flex items-center gap-2 font-medium cursor-pointer hover:text-primary mb-1"
          >
            <LuCalendarRange className="text-xl text-secondary" />
            Check-out date
          </p>
          <p>{checkOutDate ? checkOutDate.toLocaleDateString() : "Date"}</p>
          <DatePicker
            isOpen={isCheckOutDateModalOpen}
            setIsOpen={setCheckOutDateModalOpen}
            selectedDate={checkOutDate}
            setDate={setCheckOutDate}
          />
        </div>
        <div className="md:h-[60px]">
          <p className="flex items-center gap-2 font-medium">
            <MdOutlineLock className="text-xl text-secondary" />
            Price limit
          </p>
          <Dropdown
            options={prices}
            placeholder="Search places"
            searchable
            values="500"
            prefix="banner-search"
          />
        </div>
        <button className="md:block hidden bg-primary hover:bg-primary-500 h-[40px] py-1 px-6 rounded-full text-white font-semibold mt-5">
          Book Now
        </button>
      </div>
      <button className="md:hidden block bg-primary hover:bg-primary-500 h-[40px] py-1 px-6 rounded-full text-white font-semibold mt-5 w-full">
        Book Now
      </button>
    </div>
  );
};

export default SearchSelectionFields;
