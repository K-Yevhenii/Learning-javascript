# Array methods

## Method

```js
const obj = {
  sum(a, b) {
    return a + b;
  },
};

function sum(a, b) {
  return a + b;
}

// obj.sum - method
// sum - not method because doesn't belong to object
```

## Callbacks

```js
function calculateSum() {
  return 2 + 2;
}

function double() {
  return 2 * 2;
}

// Executes calculateSum, logs its result and returns it - i.e. add extra functionality without modifying original function
// func is callback
function logger(func) {
  const result = func();
  console.log(result);

  return result;
}

// Will log 4 and returns it in sum
const sum = logger(calculateSum);
const doubled = logger(double);
```

## Array methods with callbacks

```js
const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

function logger(element) {
  console.log(element);
}

function double(element, index) {
  element === array[index]
  arr[index] *= 2
}

arr.forEach(logger); // Prints in console 1, 2, 3, 4 as a separate log
```

## Замінює всі або деякі елементи масиву заданим значенням.

| Name      | Description                                                      | Returns                  |
| --------- | ---------------------------------------------------------------- | ------------------------ |
| `push`    | Додає один або кілька елементів у кінець масиву.                 | New length of array      |
| `pop`     | Видаляє останній елемент масиву та повертає його.                | Removed element          |
| `shift`   | Видаляє перший елемент масиву та повертає його.                  | Removed element          |
| `unshift` | Додає один або кілька елементів на початок масиву.               | New length of array      |
| `splice`  | Додає, видаляє або замінює елементи масиву в зазначеній позиції. | Array of removed element |
| `sort`    | Сортує елементи масиву за вказаною функцією порівняння.          | Sorted array             |
| `reverse` | Змінює порядок елементів масиву на зворотний.                    | Reversed array           |

## Методи, які не змінюють масив

| Name        | Description                                                             | Returns          |
| ----------- | ----------------------------------------------------------------------- | ---------------- |
| `concat`    | Об'єднує два або більше масивів у новий масив.                          | New array        |
| `slice`     | Створює новий масив, вибравши частину існуючого масиву.                 | Removed elements |
| `map`       | Створює новий масив, виконавши функцію для кожного елемента.            |                  |
| `filter`    | Створює новий масив із елементів, що пройшли перевірку у функції.       |                  |
| `reduce`    | Обчислює одне значення, послідовно застосовуючи функцію до елементів.   |                  |
| `forEach`   | Виконує функцію для кожного елемента масиву.                            |                  |
| `find`      | Повертає перший елемент, який задовольняє умову у функції.              |                  |
| `findIndex` | Повертає індекс першого елемента, що відповідає умові у функції.        |                  |
| `includes`  | Перевіряє, чи містить масив певний елемент.                             |                  |
| `indexOf`   | Повертає перший індекс зазначеного елемента (або -1, якщо не знайдено). | Number           |
| `every`     | Перевіряє, чи всі елементи масиву відповідають умові у функції.         |                  |
| `some`      | Перевіряє, чи хоча б один елемент масиву відповідає умові у функції.    |                  |
