import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { monthsData, weekDays } from "../constants";
import holidayList from "../data.json";
import { getElements } from "../utils/date.utils";

const Calendar = () => {
  const [cells, setCells] = useState<Date[]>([]);
  const today = new Date(Date.now());

  useEffect(() => {
    const currentMonthData = monthsData[today.getMonth()];
    const dateCells = getElements(currentMonthData, today);
    setCells(dateCells);
  }, []);

  useEffect(() => {
    if (cells.length < 32) {
      const extraSpaceOnStart = today.getDate() % 6;

      for (let i = 0; i <= extraSpaceOnStart; i++) {
        cells.unshift(new Date("0"));
      }
    }
  }, [cells]);

  return (
    <div className="p-8">
      <div className="flex flex-row w-full h-auto justify-around text-xl font-bold text-left pt-4 mb-2">
        <p>{weekDays[today.getDay()]}</p>
        <div className="flex flex-row">
          <p className="pr-4">{today.getDate()}</p>
          <p>{monthsData[today.getMonth()].name}</p>
        </div>
        <p>{today.getFullYear()}</p>
      </div>
      <div className="flex flex-row justify-between border-2 border-solid border-light-grayish-blue">
        {
          weekDays.map(day => 
            <p className="w-full bg-very-soft-green text-center border-2 border-solid border-light-grayish-blue">{day}</p>)
        }
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
