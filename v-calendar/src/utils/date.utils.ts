export const getElements = (monthData: any, today: Date) => {
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const days: any = [];

  for (let index = 1; index <= monthData.days; index++) {
    if (index < 1) {
      const nextDate = `${currentMonth + 1}/${index + 1}/${currentYear}`;
      const dateValue = new Date(nextDate);
      dateValue.setDate(dateValue.getDate() - today.getDate() - index);
      days.push(dateValue);
    } else {
      days.push(`${currentMonth + 1}/${index}/${currentYear}`);
    }
  }

  return days;
};
