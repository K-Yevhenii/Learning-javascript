const WEEK_DAYS_NAME = {
    0: 'Su',
    1: 'Mo',
    2: 'Tu',
    3: 'We',
    4: 'Th',
    5: 'Fr',
    6: 'Sa',
};

function getWeekDay(date) {
    const weekDaysIndex = date.getDay();
    return WEEK_DAYS_NAME[weekDaysIndex];
}
console.log(getWeekDay(new Date()));
