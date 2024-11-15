import React from "react";

type Props = { className?: string, background?: string; } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Card = (props: Props) => {
  const { className,background, ...others } = props;
  return (
    <div
      {...others}
      className={`h-full w-full rounded-3xl shadow ${className} ${background ? `bg-${background}` : "bg-white"}`}
    />
  );
};