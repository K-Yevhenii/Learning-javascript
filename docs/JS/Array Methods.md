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
    element === array[index];
    arr[index] *= 2;
}

arr.forEach(logger); // Prints in console 1, 2, 3, 4 as a separate log
```

## Sort

### Basic example

Sort mutates original array and returns its sorted.

```js
let productsCart = [
    { id: 3, name: 'Milk', price: 35, quantity: 5 },
    { id: 1, name: 'Banana', price: 20, quantity: 1 },
    { id: 2, name: 'Sausages', price: 40, quantity: 3 },
    { id: 4, name: 'Mineral water', price: 12, quantity: 7 },
];

// Sort by number in ascending order
productsCart.sort((a, b) => a.price - b.price);
// Sort by string in ascending order
productsCart.sort((a, b) => a.name.localeCompare(b.name)); // 1 - if a > b, -1 if a < b, 0 if a === b

// Sort by number in descending order
productsCart.sort((a, b) => b - a);
// Sort by string in descending order
productsCart.sort((a, b) => b.name.localeCompare(a.name)); // 1 - if b > a, -1 if b < a, 0 if a === b
```

### Stability of sorting

If elements have the same value of sorting key (in example, `grade`) they will be in the same order before and after the sorting - i.e. object with name `Alex` will be followed by `Delvin`.

```js
const students = [
    { name: 'Alex', grade: 15 },
    { name: 'Devlin', grade: 15 },
    { name: 'Eagle', grade: 13 },
    { name: 'Sam', grade: 14 },
];

students.sort((a, b) => a.grade - b.grade);
// Result
// [
//   { name: 'Eagle', grade: 13 },
//   { name: 'Sam', grade: 14 },
//   { name: 'Alex', grade: 15 },
//   { name: 'Devlin', grade: 15 },
// ];
```

## Замінює всі або деякі елементи масиву заданим значенням (змінюють масив)

| Name      | Description                                                      | Returns             |
| --------- | ---------------------------------------------------------------- | ------------------- |
| `push`    | Додає один або кілька елементів у кінець масиву.                 | New length of array |
| `pop`     | Видаляє останній елемент масиву та повертає його.                | Removed element     |
| `shift`   | Видаляє перший елемент масиву та повертає його.                  | Removed element     |
| `unshift` | Додає один або кілька елементів на початок масиву.               | New length of array |
| `splice`  | Додає, видаляє або замінює елементи масиву в зазначеній позиції. | Updated array       |
| `sort`    | Сортує елементи масиву за вказаною функцією порівняння.          | Sorted array        |
| `reverse` | Змінює порядок елементів масиву на зворотний.                    | Reversed array      |

## Методи, які не змінюють масив

|                                  |                                                          |                                          |
| -------------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| `map(callback)`                  | Створює новий масив, перетворюючи кожен елемент          | Новий масив                              |
| `filter(callback)`               | Створює новий масив з елементами, що відповідають умові  | Новий масив                              |
| `slice(start, end)`              | Вирізає частину масиву                                   | Новий масив                              |
| `concat(...arrays)`              | Об'єднує масиви                                          | Новий масив                              |
| `flat(depth)`                    | Розгладжує вкладені масиви                               | Новий масив                              |
| `reduce(callback, initialValue)` | Обчислює одне значення з усього масиву                   | Результат обчислення (агрегація)         |
| `find(callback)`                 | Шукає перший елемент, що відповідає умові                | Перший знайдений елемент або `undefined` |
| `findIndex(callback)`            | Шукає індекс першого елемента                            | Індекс або `-1`, якщо не знайдено        |
| `some(callback)`                 | Перевіряє, чи є хоча б один елемент, що відповідає умові | `true` або `false`                       |
| `every(callback)`                | Перевіряє, чи всі елементи відповідають умові            | `true` або `false`                       |
| `includes(value)`                | Перевіряє, чи є елемент у масиві                         | `true` або `false`                       |
| `indexOf(value)`                 | Шукає індекс елемента                                    | Індекс або `-1`, якщо не знайдено        |
| `lastIndexOf(value)`             | Шукає індекс останнього входження елемента               | Індекс або `-1`, якщо не знайдено        |
| `join(separator)`                | Об'єднує всі елементи масиву в рядок                     | Рядок                                    |
