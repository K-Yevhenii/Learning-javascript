const WEEK_DAYS_NAME = {
    0: 'Su',
    1: 'Mo',
    2: 'Tu',
    3: 'We',
    4: 'Th',
    5: 'Fr',
    6: 'Sa',
} as const;

export default function getWeekDay(date: Date) {
    const weekDaysIndex = date.getDay() as keyof typeof WEEK_DAYS_NAME;
    return WEEK_DAYS_NAME[weekDaysIndex];
}
console.log(getWeekDay(new Date()));
