// CalendarDemo.tsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CalendarDemoProps {
  id?: string;
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}

const CalendarDemo: React.FC<CalendarDemoProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="font-medium text-sm">
          {label}
        </label>
      )}
      <DatePicker
  id={id}
  selected={value}
  onChange={onChange}
  dateFormat="dd-MM-yyyy"
  placeholderText={placeholder || "dd-mm-yyyy"}
  className="w-full border p-1 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:shadow-sm"
  popperPlacement="bottom-start"
  showPopperArrow={false}
  
/>
    </div>
  );
};

export default CalendarDemo;
