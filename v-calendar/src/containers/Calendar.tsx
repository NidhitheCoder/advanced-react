import React, { useEffect, useState } from "react";

const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsData = [
  {
    name: "January",
    days: 31,
  },
  {
    name: "February",
    days: 29,
  },
  {
    name: "March",
    days: 31,
  },
  {
    name: "April",
    days: 30,
  },
  {
    name: "May",
    days: 31,
  },
  {
    name: "June",
    days: 30,
  },
  {
    name: "July",
    days: 31,
  },
  {
    name: "August",
    days: 31,
  },
  {
    name: "September",
    days: 30,
  },
  {
    name: "October",
    days: 31,
  },
  {
    name: "November",
    days: 30,
  },
  {
    name: "December",
    days: 31,
  },
];

const Calendar = () => {
  const [cells, setCells] = useState<number[]>([]);
  const today = new Date(Date.now());

  const getElements = (monthData: any, currentWeekDay: number) => {
    const days: any = [];
    for (let index = 0; index <= monthData.days; index++) {
      days.push(index);
    }
    setCells(days);
  };

  useEffect(() => {
    const currentMonthData = monthsData[today.getMonth()];
    getElements(currentMonthData, today.getDay());
  }, []);

  return (
    <div className="p-8">
      <div className="flex flex-row w-full justify-between">
        <p>{weekDay[today.getDay()]}</p>
        <p>{monthsData[today.getMonth()].name}</p>
        <p>{today.getFullYear()}</p>
      </div>
      <div className="grid grid-cols-7">
        {cells.map((cell) => (
          <div className="p-4 border-2">{cell}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
