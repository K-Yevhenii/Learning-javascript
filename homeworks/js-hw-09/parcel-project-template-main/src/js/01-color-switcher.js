// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює 
// колір фону < body > 
// на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

//     Увага
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була 
// неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію 
// getRandomHexColor.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timer;
let interval = 100;
btnStart.addEventListener('click', () => {
    btnStart.disabled = true;

    timer = setTimeout(function changeBodyColor() {
        body.style.backgroundColor = getRandomHexColor();
        interval += 500;
        timer = setTimeout(changeBodyColor, interval);
    }, interval);

});
btnStop.addEventListener('click', () => {
    if (timer) {
        btnStart.disabled = false;
        clearTimeout(timer);
    }
});