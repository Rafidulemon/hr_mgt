import React from "react";

type Props = {
  className?: string;
  title?: string;
  titleColor?: string;
  titleBarSize?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const CardWithHeader = (props: Props) => {
  const { className, title, titleColor = "", titleBarSize = "40px", ...others } = props;
  return (
    <div className={`w-full h-full flex flex-col gap-0 ${className}`}>
        <div className={`relative z-10 ${titleBarSize} ${titleColor ? titleColor : "bg-[#008EA1]"} rounded-t-3xl shadow-md p-4 flex flex-row items-center justify-center`}>
            <h2 className={`text-[16px] text-white font-extrabold ${titleColor}`}>{title}</h2>
        </div>
      <div
        {...others}
        className={`-mt-[40px] h-full w-full bg-white rounded-3xl shadow`}
      />
    </div>
  );
};
