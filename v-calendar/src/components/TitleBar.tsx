import React from "react";
import classNames from "classnames";

interface BadgeProps {
  month: string;
  year: string;
  bgColor?: string;
  color?: string;
}

const TitleBar = ({
  month,
  year,
  bgColor = "bg-strong-blue",
  color = "text-white",
}: BadgeProps) => {
  const titleStyle = classNames("w-full px-4 py-1 h-12 flex justify-between items-center rounded-sm font-bold text-xl rounded-sm", {
    [bgColor]: true,
    [color]: true,
  });

  return <div className={titleStyle}>
    <p>{month}</p>
    <p>{year}</p>
  </div>;
};

export default TitleBar;
