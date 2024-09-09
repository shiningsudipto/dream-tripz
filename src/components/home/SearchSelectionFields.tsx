import { MdOutlineDirections, MdOutlineLock } from "react-icons/md";
import { LuCalendarRange } from "react-icons/lu";

const SearchSelectionFields = () => {
  return (
    <div className="shadow-lg h-[100px] w-full rounded-full p-5">
      <div className="flex justify-between">
        <div>
          <div>
            <p className="flex items-center gap-2 font-medium">
              <MdOutlineDirections className="text-xl text-secondary" />
              Destination
            </p>
          </div>
        </div>
        <div>
          <p className="flex items-center gap-2 font-medium">
            <LuCalendarRange className="text-xl text-secondary" />
            Check-in dat
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2 font-medium">
            <LuCalendarRange className="text-xl text-secondary" />
            Check-out date
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2 font-medium">
            <MdOutlineLock className="text-xl text-secondary" />
            Price limit
          </p>
        </div>
        <div>Book Now</div>
      </div>
    </div>
  );
};

export default SearchSelectionFields;
