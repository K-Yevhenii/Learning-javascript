// Напиши скрипт, який змінює кольори фону елемента
//   < body > через інлайн - стиль по кліку на
// button.change - color і виводить значення кольору в span.color.


const button = document.getElementsByClassName('change-color')[0];
const span = document.getElementsByClassName('color')[0];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  span.textContent = color;
  document.body.style.backgroundColor = color;
});