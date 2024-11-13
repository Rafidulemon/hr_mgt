import RadioButton from "./RadioButton";
import Text from "../Text/Text";

type RadioGroupProps = {
  options: { label: string; value: string }[];
  name: string;
  selectedValue?: string;
  onChange: (value: string) => void;
  title?: string;
};

function RadioGroup({
  options,
  title = "Select an option:",
  name,
  selectedValue,
  onChange,
}: RadioGroupProps) {
  return (
    <div className="radio-group flex flex-col gap-2 mt-4">
      <Text text={title} className="text-[20px] text-text_bold" isBold/>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          name={name}
          selectedValue={selectedValue || ""}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export default RadioGroup;
