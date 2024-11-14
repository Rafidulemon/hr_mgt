type Props = {
  label: string;
  text: string;
  labelColor?: string;
  textColor?: string;
  labelFontFamily?: string;
  textFontFamily?: string;
  labelFontWeight?: number;
  labelFontSize?: string;
  textFontWeight?: number;
  textFontSize?: string;
  className?: string;
};
const TextFeild = (props: Props) => {
  const {
    label,
    text,
    labelColor = "#555454",
    textColor = "#7E7D7D",
    labelFontFamily = "Inter, sans-serif",
    textFontFamily = "Inter, sans-serif",
    labelFontWeight = 600,
    labelFontSize = "16px",
    textFontWeight = 600,
    textFontSize = "14px",
    className,
  } = props;
  return (
    <div className={`flex flex-col gap-[20px] ${className}`}>
      <p
        style={{
          color: labelColor,
          fontWeight: labelFontWeight,
          fontSize: labelFontSize,
          fontFamily: labelFontFamily,
        }}
      >
        {label}
      </p>
      <p
        style={{
          color: textColor,
          fontWeight: textFontWeight,
          fontSize: textFontSize,
          fontFamily: textFontFamily,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TextFeild;
