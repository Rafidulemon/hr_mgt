import { type FieldError } from "react-hook-form";

type Props = {
  className?: string;
  isRequired?: boolean;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  value?: string;
  error?: FieldError | undefined;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function EmailInput(props: Props) {
  const {
    id,
    className,
    isRequired = false,
    label,
    defaultValue,
    placeholder,
    value,
    error,
    onChange,
  } = props;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row gap-[5px] mb-2">
        <label htmlFor={id} className="text-[16px] font-bold text-text_bold">
          {label}
        </label>
        {isRequired && (
          <span className="text-[16px] font-bold text-tertiary">*</span>
        )}
      </div>
      <input
        id={id}
        type="email"
        className="w-full h-[40px] bg-white rounded-[5px] drop-shadow-2xl text-text_primary px-4 focus:outline-none mb-2"
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div className="text-[14px] text-tertiary">{error.message}</div>}
    </div>
  );
}

export default EmailInput;
