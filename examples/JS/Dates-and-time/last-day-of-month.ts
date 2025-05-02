function getLastDayOfMonth(year: number, month: number) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2024, 1));
