import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "./Modal";

interface TDatePicker {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setDate: (date: Date | null) => void;
  selectedDate: Date | null;
}

const DatePicker: React.FC<TDatePicker> = ({
  isOpen,
  setIsOpen,
  selectedDate,
  setDate,
}) => {
  const handleDateChange: CalendarProps["onChange"] = (date) => {
    setIsOpen(false);
    if (!Array.isArray(date)) {
      setDate(date);
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} width="w-fit">
      <Calendar
        className={"overflow-calendar"}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </Modal>
  );
};

export default DatePicker;
