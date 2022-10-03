import React from "react";

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
    name:'January',
    days: 31,
  },
  {
    name:'February',
    days: 29,
  },
  {
    name:'March',
    days: 31,
  },
  {
    name:'April',
    days: 30,
  },
  {
    name:'May',
    days: 31,
  },
  {
    name:'June',
    days: 30,
  },
  {
    name:'July',
    days: 31
  },
  {
    name:'August',
    days: 31,
  },
  {
    name:'September',
    days: 30,
  },
  {
    name:'October',
    days: 31,
  },
  {
    name:'November',
    days: 30,
  },
  {
    name:'December',
    days: 31,
  }
]
const Calendar = () => {
  const today = new Date(Date.now());
  const cells: number[] = [];
  const currentMonthData = monthsData[today.getMonth();
  console.log(today, monthsData[today.getMonth()]);
  return (
    <div>
      {cells.map(() => (
        <div>{today.getDate()}</div>
      ))}
    </div>
  );
};

export default Calendar;
