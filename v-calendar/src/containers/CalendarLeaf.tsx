import React, { useState } from "react";
import classNames from "classnames";

interface CalendarLeafProps {
  text: string;
  bgColor?: string;
  color?: string;
}

const CalendarLeaf = ({
  text,
  bgColor = "bg-very-soft-yellow",
  color = "text-darker-cyan",
}: CalendarLeafProps) => {
  const [currentLeafMonth , setCurrentLeafMonth] = useState();
  const CalendarLeafStyle = classNames("px-4 py-1 h-12 flex justify-center items-center rounded-sm", {
    [bgColor]: true,
    [color]: true,
  });

  return <div className={CalendarLeafStyle}>{text}</div>;
};

export default CalendarLeaf;
