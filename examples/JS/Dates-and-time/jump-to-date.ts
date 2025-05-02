function getDateAgo(date: Date, daysAgo: number) {
    const day = date.getDate();
    const updatedDay = day - daysAgo;
    const updatedTimestamp = date.setDate(updatedDay);
    return new Date(updatedTimestamp);
}

console.log(getDateAgo(new Date(), 1));
