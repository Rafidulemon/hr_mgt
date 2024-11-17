import React from "react";
import Text from "../Text/Text";

type Props = {
  className?: string;
  background?: string;
  isSquareBox?: boolean;
  title?: string;
  isTransparentBackground?: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card = (props: Props) => {
  const {
    className,
    background,
    isSquareBox = false,
    isTransparentBackground = false,
    title,
    ...others
  } = props;
  return (
    <div
      className={`h-full w-full py-4 ${
        isSquareBox ? "" : "rounded-3xl"
      } ${!isTransparentBackground && "shadow"} ${className} ${isTransparentBackground && "bg-transparent"} ${background ? `bg-${background}` : "bg-white"}`}
    >
      {title && (
        <Text text={title} className="px-6 text-[24px] font-semibold" />
      )}
      <hr className={`w-full border border-[1px] border-[#7E7D7D] my-4 ${isTransparentBackground && "mx-6"}`} />
      <div {...others} className="px-6" />
    </div>
  );
};
