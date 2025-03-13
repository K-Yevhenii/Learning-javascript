// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.
const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

// const list = [];
// for (let i = 0; i < ingredients.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = ingredients[i];
//     li.classList.add('item');
//     list.push(li);
// }
const list = ingredients.map((ingredient) => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    li.classList.add('item');
    return li;
});

const ul = document.getElementById('ingredients');
if (ul) {
    ul.append(...list);
}