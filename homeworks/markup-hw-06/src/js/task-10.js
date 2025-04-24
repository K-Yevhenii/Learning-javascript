// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input 
// і натискає кнопку Створити, після чого рендериться
// колекція.Натисненням на кнопку Очистити, колекція 
// елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.Функція створює стільки < div >, скільки 
// вказано в amount і додає їх у div#boxes.

//     Розміри найпершого < div > - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим 
// від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

const divContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10;

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
  }

  divContainer.append(...boxes);
}

function destroyBoxes() {
  divContainer.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const inputValue = Number(input.value);
  createBoxes(inputValue);
});

destroyButton.addEventListener('click', destroyBoxes);