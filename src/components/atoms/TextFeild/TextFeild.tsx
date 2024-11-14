type Props = {
  label: string;
  text: string;
  labelColor?: string;
  textColor?: string;
  labelFontSize?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textFontSize?: string;
  gap?: string;
};
export default function TextFeild(props: Props) {
  const {
    label,
    text,
    labelColor = "#555454",
    labelFontWeight = "bold",
    labelFontSize = "16px",
    textColor = "#7E7D7D",
    textFontWeight = "normal",
    textFontSize = "14px",
    gap = "20px",
  } = props;
  return (
    <div className={`flex flex-col gap-${gap}`}>
      <p>{label}</p>
      <p>{text}</p>
    </div>
  );
}
