import { ChangeEvent } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectBoxProps = {
  label?: string;
  options: Option[];
  className?: string;
  isRequired?: boolean;
  onChange?: (value: string) => void;
};

export default function SelectBox({
  label = "Select Option",
  options = [],
  className = "",
  isRequired = false,
  onChange,
}: SelectBoxProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const allOptions = [{ label: "Select Any", value: "default" }, ...options];
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-1 mb-2">
        <label
          className="text-[16px] text-text_bold font-semibold"
          htmlFor={label}
        >
          {label}
        </label>
        {isRequired && (
          <span className="text-[16px] font-bold text-tertiary">*</span>
        )}
      </div>

      <select
        id={label}
        name={label}
        onChange={handleChange}
        className={`p-[12px] text-[16px] text-text_bold font-semibold rounded-lg shadow-xl bg-white 
        focus:outline-none hover:cursor-pointer ${className}`}
      >
        {options.length > 0 ? (
          allOptions.map((option, index) => (
            <option
              key={index}
              value={option.value}
              className="hover:bg-primary"
            >
              {option.label}
            </option>
          ))
        ) : (
          <option disabled>No options available</option>
        )}
      </select>
    </div>
  );
}
