import Select from "react-dropdown-select";

interface Option {
  name: string;
  value: string;
}

interface DropdownProps {
  label?: string;
  options: Option[];
  placeholder?: string;
  searchable?: boolean;
  name: string;
  setFieldValue: (field: string, value: any) => void;
  values: string;
  multi?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  placeholder = "Select...",
  searchable = false,
  name,
  setFieldValue,
  values = "",
  multi = false,
}) => {
  return (
    <div>
      {label && <p className="field-title">{label}</p>}
      <Select
        className="react-dropdown-select-custom-style input-field-shadow"
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
        onChange={(value) =>
          setFieldValue(
            name,
            multi ? value.map((v) => v.value) : value[0]?.value
          )
        }
      />
    </div>
  );
};

export default Dropdown;
