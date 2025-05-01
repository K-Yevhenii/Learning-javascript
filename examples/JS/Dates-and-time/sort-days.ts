function sortDays(...dates: Date[]) {
    dates.sort((a, b) => a - b);

    return dates;
}

sortDays(new Date(), new Date(), new Date(), new Date(), new Date());
