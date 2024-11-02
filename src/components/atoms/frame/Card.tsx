import React from "react";

type Props = { className?: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card = (props: Props) => {
  const { className, ...others } = props;
  return (
    <div
      {...others}
      className={`h-full w-full bg-white rounded-3xl shadow ${className}`}
    />
  );
};