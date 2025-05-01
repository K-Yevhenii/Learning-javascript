
function getSecondsToday() {
    const currentDay = new Date();
    const hours = currentDay.getHours();
    const minutes = currentDay.getMinutes();
    const seconds = currentDay.getSeconds();
    const totalSecondsCurrentDay = hours * 60 * 60 + minutes * 60 + seconds;
    console.log(totalSecondsCurrentDay);
    return totalSecondsCurrentDay;

}
getSecondsToday();

function getSecondsToTomorrow() {
    const now = new Date();
    const startToMoro = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return (startToMoro - now) / 1000;
}
console.log(getSecondsToTomorrow());
