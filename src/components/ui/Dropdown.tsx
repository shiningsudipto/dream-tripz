"use client";
import Select from "react-dropdown-select";
import "./style.css";

interface Option {
  name: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  prefix?: string;
  options: Option[];
  placeholder?: string;
  searchable?: boolean;
  values?: string;
  multi?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  placeholder = "Select...",
  searchable = false,
  values = "",
  multi = false,
  prefix,
}) => {
  return (
    <div>
      {label && <p className="field-title">{label}</p>}
      <Select
        className={`${prefix}--react-dropdown-select`}
        labelField="name"
        valueField="value"
        placeholder={placeholder}
        searchable={searchable}
        options={options}
        multi={multi}
        values={
          multi
            ? options.filter((option) => values?.includes(option.value))
            : options.filter((option) => option.value === values)
        }
        dropdownPosition="auto"
        onChange={(value) => console.log(value)}
      />
    </div>
  );
};

export default Dropdown;
