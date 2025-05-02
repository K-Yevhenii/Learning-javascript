import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input = document.getElementById('datetime-picker');
const btnStart = document.querySelector('[data-start]');
btnStart.disabled = false;
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


let selectedDay;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose([selectedDate]) {
        selectedDay = selectedDate;
        btnStart.disabled = selectedDate <= new Date();
    },
};
flatpickr("#datetime-picker", options);


btnStart.addEventListener('click', () => {
    const timer = setInterval(() => {
        const delta = selectedDay - new Date();
        if (delta <= 0) {
            clearInterval(timer);
            return;
        }
        const { days, hours, minutes, seconds } = convertMs(delta);
        dataDays.textContent = days;
        dataHours.textContent = hours;
        dataMinutes.textContent = minutes;
        dataSeconds.textContent = seconds;
    }, 1000);

});

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

