import React from "react";
import classNames from "classnames";

interface BadgeProps {
  text: string;
  bgColor?: string;
  color?: string;
}

const Badge = ({
  text,
  bgColor = "very-soft-yellow",
  color = "darker-cyan",
}: BadgeProps) => {
  const badgeStyle = classNames("px-4 py-1", {
    [bgColor]: true,
    [color]: true,
  });

  return <div className={badgeStyle}>{text}</div>;
};

export default Badge;
