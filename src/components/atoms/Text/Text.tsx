import React from "react";

type Props = {
  className?: string;
  text: string | React.ReactNode;
  isBold?: boolean;
  color?: string;
  align?: "left" | "center" | "right";
  lineHeight?: string;
  fontFamily?: string;
};

const Text: React.FC<Props> = ({
  className = "",
  text,
  isBold = false,
  color,
  align = "left",
  lineHeight,
  fontFamily,
}) => {
  return (
    <p
      className={`${className} ${align} ${isBold && "font-bold"}`}
      style={{
        color,
        lineHeight,
        fontFamily,
      }}
    >
      {text}
    </p>
  );
};

export default Text;
