"use client";
import { MdOutlineDirections, MdOutlineLock } from "react-icons/md";
import { LuCalendarRange } from "react-icons/lu";
import Dropdown from "../ui/Dropdown";
import { places } from "@/utils/places.utils";
import { useState } from "react";
import DatePicker from "../ui/DatePicker";
import { prices } from "@/utils/prices.utils";

const SearchSelectionFields = () => {
  const [isCheckInDateModalOpen, setCheckInDateModalOpen] =
    useState<boolean>(false);
  const [isCheckOutDateModalOpen, setCheckOutDateModalOpen] =
    useState<boolean>(false);
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(new Date());

  return (
    <div className="shadow-lg h-[100px] w-full rounded-full p-5">
      <div className="flex justify-between items-center">
        <div className="border-r-2 border-secondary h-[60px]">
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
        <div className="pr-5 border-r-2 border-secondary h-[60px] text-center">
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
        <div className="pr-5 border-r-2 border-secondary h-[60px] text-center">
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
        <div className="h-[60px]">
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
        <button className="bg-primary hover:bg-primary-500 h-[40px] py-1 px-6 rounded-full text-white font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SearchSelectionFields;
