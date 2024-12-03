import React from "react";
import Text from "../Text/Text";

type Props = {
  className?: string;
  title?: string;
  titleColor?: string;
  titleBarSize?: string;
  isSquareBox?: boolean;
  isItalicHeader?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CardWithHeader = (props: Props) => {
  const { className, title="", titleColor = "", titleBarSize = "40px", isSquareBox = false, isItalicHeader = false, ...others } = props;
  return (
    <div className={`w-full h-fit flex flex-col gap-0 ${className}`}>
        <div className={`relative z-10 ${titleBarSize} ${titleColor ? titleColor : "bg-[#008EA1]"} ${isSquareBox ? "" : "rounded-t-3xl"} shadow-md p-4 flex flex-row items-center justify-center`}>
            <Text text={title} className={`text-[16px] text-white font-extrabold ${isItalicHeader ? "italic" : ""} ${titleColor}`} isBold/>
        </div>
      <div
        {...others}
        className={`h-full w-full bg-white ${isSquareBox ? "" : "rounded-b-3xl shadow"}`}
      />
    </div>
  );
};
