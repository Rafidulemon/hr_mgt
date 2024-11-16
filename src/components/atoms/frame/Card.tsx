import React from "react";

type Props = { className?: string, background?: string, isSquareBox?: boolean; } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card = (props: Props) => {
  const { className,background,isSquareBox = false, ...others } = props;
  return (
    <div
      {...others}
      className={`h-full w-full ${isSquareBox ? "": "rounded-3xl"} shadow ${className} ${background ? `bg-${background}` : "bg-white"}`}
    />
  );
};