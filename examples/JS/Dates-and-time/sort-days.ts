function sortDays(...dates: Date[]) {
    dates.sort((a, b) => a.valueOf() - b.valueOf());

    return dates;
}

sortDays(new Date(), new Date(), new Date(), new Date(), new Date());
