import React from "react";

type Props = { className?: string, isSquareBox?: boolean } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card = (props: Props) => {
  const { className, isSquareBox = false, ...others } = props;
  return (
    <div
      {...others}
      className={`h-full w-full bg-white ${isSquareBox ? "": "rounded-3xl"} shadow ${className}`}
    />
  );
};