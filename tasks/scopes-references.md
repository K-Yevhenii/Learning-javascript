# Scopes and references

```js
const numbers = [1, 42, 7, 15, 9];
const numbersCopy = numbers;

numbers.push(12);

console.log(numbers);
console.log(numbersCopy);
```

```js
const numbers = [1, 42, 7, 15, 9];
const numbersCopy = [];

for (let i = 0; i < numbers.length; i++) {
  numbersCopy.push(numbers[i]);
}

numbers.push(12);

console.log(numbers);
console.log(numbersCopy);
```

```js
const board = [
  ['x', 'o', 'x'],
  ['x', 'o', 'o'],
  ['o', 'x', 'o'],
];

const boardCopy = [];

for (let i = 0; i < board.length; i++) {
  boardCopy.push(board[i]);
}

board.push(['x', 'o', 'o']);

board[0][0] = 'o';

console.log(boardCopy[0][0]);
console.log(boardCopy.length);
```

```js
const cart = [
  // Here is items in order
];

calculateOrderTotal(cart);

function calculateOrderTotal(cart) {
  // Here is function body
}
```

```js
calculateOrderTotal(cart);

const cart = [
  // Here is items in order
];

function calculateOrderTotal(cart) {
  // Here is function body
}
```

```js
const itemPrices = [12.2, 10.8, 7.75, 4.35, 6.2];

function calculateOrder() {
  const total = 0;

  if (!itemPrices.length) {
    const isCartEmpty = true;
  }

  console.log(isCartEmpty);

  const isCartEmpty = false;

  for (price of itemPrices) {
    total += price;
  }

  return total;
}

console.log(total);
```
