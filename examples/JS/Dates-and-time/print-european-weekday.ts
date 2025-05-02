const WEEK_DAYS_NAME = [7, 1, 2, 3, 4, 5, 6] as const;

function getWeekDay(date: Date) {
    const weekDaysIndex = date.getDay();
    return WEEK_DAYS_NAME[weekDaysIndex];
}
console.log(getWeekDay(new Date()));
