import React, { useEffect, useState } from "react";
import { monthsData, weekDay } from "../constants";
import holidayList from "../data.json";

const Calendar = () => {
  const [cells, setCells] = useState<Date[]>([]);
  const today = new Date(Date.now());

  const getElements = (monthData: any, currentYear: number, currentMonth: number) => {
    const days: any = [];
    for (let index = 0; index <= monthData.days; index++) {
      days.push(`${index}/${currentMonth}/${currentYear}`);
    }
    setCells(days);
  };

  useEffect(() => {
    const currentMonthData = monthsData[today.getMonth()];
    getElements(currentMonthData, today.getFullYear(), today.getMonth());
  }, []);

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
        {cells.map((cell) => {
          console.log(cell);
          // const isHoliday = holidayList.map(holiday => {
          //   const currentDate = new Date(holiday.date)
          //   console.log(currentDate, cell)
          // })
          return (
            <div
              key={cell.getDate()}
              className="p-4 border-2 border-solid border-light-grayish-blue text-strong-orange"
            >
              {cell.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
