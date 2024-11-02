import { type FieldError } from "react-hook-form"

type Props = {
  className?: string;
  isRequired?: boolean;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: FieldError | undefined;
  id?: string;
};

function TextInput(props: Props) {
  const {
    id,
    className,
    isRequired = false,
    label,
    defaultValue,
    placeholder,
    value,
    error
  } = props;


  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row gap-[5px] mb-2">
        <label className="text-[16px] text-text_bold font-bold">{label}</label>
        {isRequired && <span className="text-[16px] font-bold text-tertiary">*</span>}
      </div>
      <input
        id={id}
        className={`w-full h-[40px] bg-white rounded-[5px] drop-shadow-2xl text-text_primary px-4 focus:outline-none mb-2`}
        type="text"
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
      />
      {error && <div className="text-[14px] text-tertiary">{error.message}</div>}
    </div>
  );
}

export default TextInput;
