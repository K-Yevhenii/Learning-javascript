// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника 
// та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.



const counter = document.getElementById('counter');
const decrementBtn = counter.querySelector('[data-action=decrement]');
const incrementBtn = counter.querySelector('[data-action=increment]');
let counterValue = 0;

function handleIncrement() {
    counterValue += 1;
    renderCount();
}

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    renderCount();
});
incrementBtn.addEventListener('click', handleIncrement);
// incrementBtn.removeEventListener('click', handleIncrement);

function renderCount() {
    const value = document.getElementById('value');
    value.textContent = counterValue;
}