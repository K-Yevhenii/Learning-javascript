
function getDateAgo(date, daysAgo) {
    const day = date.getDate();
    const updatedDay = day - daysAgo;
    return date.setDate(updatedDay);
}

console.log(getDateAgo(new Date(), 1));
