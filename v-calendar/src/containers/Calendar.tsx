import React, { useEffect, useState } from "react";
import { monthsData, weekDay } from "../constants";
// import holidayList from "../data.json";

const Calendar = () => {
  const [cells, setCells] = useState<Date[]>([]);
  const today = new Date(Date.now());

  const getElements = (
    monthData: any,
    currentYear: number,
    currentMonth: number
  ) => {
    const days: any = [];
    for (let index = 1; index <= monthData.days; index++) {
      if (index < 1) {
        const nextDate = `${currentMonth + 1}/${index + 1}/${currentYear}`;
        const dt = new Date(nextDate);
        dt.setDate(dt.getDate() - today.getDate() - index);
        days.push(dt);
      } else {
        days.push(`${currentMonth + 1}/${index}/${currentYear}`);
      }
    }
    setCells(days);
  };

  useEffect(() => {
    const currentMonthData = monthsData[today.getMonth()];
    getElements(currentMonthData, today.getFullYear(), today.getMonth());
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

          // const isHoliday = holidayList.map(holiday => {
          //   const currentDate = new Date(holiday.date)
          //   console.log(currentDate, cell)
          // })
          return (
            <div
              key={dt.getDate()}
              className={`p-4 border-2 border-solid border-light-grayish-blue ${
                isToday ? "text-strong-orange" : "text-strong-blue"
              }`}
            >
              {dt.getFullYear() === today.getFullYear() ? dt.getDate() : '' }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
