// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, 
// які ми вже додали у вихідні файли завдання.

const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', (event) => {
    if (event.target.dataset.length <= event.target.value.length) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
})