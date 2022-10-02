import React from "react";
import classNames from "classnames";

export enum Holidays {
  Public = "public",
  Company = "company",
}

interface HolidayProps {
  text: string;
  variant?: Holidays;
}

const Holiday = ({ text, variant = Holidays.Public }: HolidayProps) => {
  const holidayIconStyle = classNames("h-2 w-2 rounded-full", {
    "bg-dark-red": Holidays.Public === variant,
    "bg-strong-orange": Holidays.Company === variant,
  });

  return (
    <div className="flex justify-center items-center">
      <div className={holidayIconStyle} />
      <span className="pl-4 text-dark">{text}</span>
    </div>
  );
};

export default Holiday;
