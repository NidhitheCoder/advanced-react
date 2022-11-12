import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { monthsData, weekDay } from "../constants";
import holidayList from "../data.json";
import { getElements } from "../utils/date.utils";

const Calendar = () => {
  const [cells, setCells] = useState<Date[]>([]);
  const today = new Date(Date.now());

  useEffect(() => {
    const currentMonthData = monthsData[today.getMonth()];
    const dateCells = getElements(
      currentMonthData,
      today,
    );
    setCells(dateCells);
  }, []);

  const extraSpaceOnStart = today.getDate() % 6;

  for (let i = 0; i <= extraSpaceOnStart; i++) {
    cells.unshift(new Date("0"));
  }

  return (
    <div className="p-8">
      <div className="flex flex-row w-full justify-between text-xl font-bold">
        <p>{weekDay[today.getDay()]}</p>
        <div className="flex flex-row">
          <p className="pr-4">{today.getDate()}</p>
          <p>{monthsData[today.getMonth()].name}</p>
        </div>
        <p>{today.getFullYear()}</p>
      </div>
      <div className="grid grid-cols-7 border-2 border-solid border-light-grayish-blue">
        {cells.map((cell: Date) => {
          const dt = new Date(cell);
          const isToday =
            dt.toLocaleDateString("en-US") ===
            today.toLocaleDateString("en-US");

          const isHoliday = holidayList.find(
            (day) => day.date === cell.toString()
          )?.date;
          console.log(isHoliday);

          const textStyles = classNames(
            "p-4 border-2 border-solid border-light-grayish-blue",
            {
              "text-dark-red font-bold text-xl": isHoliday,
              "text-strong-orange font-bold text-xl": isToday,
              "text-white": !isHoliday && !isToday,
            }
          );

          return (
            <div key={dt.getDate()} className={textStyles}>
              {dt.getFullYear() === today.getFullYear() ? dt.getDate() : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
