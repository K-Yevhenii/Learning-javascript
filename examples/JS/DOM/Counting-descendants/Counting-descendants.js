//     < !--Считаем потомков
// важность: 5
// У нас есть дерево, структурированное как вложенные списки ul / li.

// Напишите код, который выведет каждый элемент списка < li >:

// Какой в нём текст(без поддерева) ?
//     Какое число потомков – всех вложенных < li > 
// (включая глубоко вложенные) ?-->

const itemsLi = document.getElementsByTagName("li");
for (let i = 0; i < itemsLi.length; i++) {
    const item = itemsLi[i];
    const message = `${item.firstChild.data.trim()}, ${item.getElementsByTagName('li').length}`;
    alert(message);
}