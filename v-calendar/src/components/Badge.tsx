import React from "react";
import classNames from "classnames";

interface BadgeProps {
  text: string;
  bgColor?: string;
  color?: string;
}

const Badge = ({
  text,
  bgColor = "bg-very-soft-yellow",
  color = "text-darker-cyan",
}: BadgeProps) => {
  const badgeStyle = classNames("px-4 py-1 h-12 flex justify-center items-center", {
    [bgColor]: true,
    [color]: true,
  });

  return <div className={badgeStyle}>{text}</div>;
};

export default Badge;
