function formatDate(date) {
    const delta = new Date() - date;
    if (delta < 1000) {
        return 'прямо сейчас';
    }
    if (delta < 60 * 1000) {
        const seconds = Math.round(delta / 1000);
        return `${seconds} сек. назад`;
    }
    if (delta < 60 * 1000 * 60) {
        const minutes = Math.round(delta / 1000 / 60);
        return `${minutes} мин. назад`;
    }
    const year = date.getFullYear().toString().slice(2);
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + +1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
