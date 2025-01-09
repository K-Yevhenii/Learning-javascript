# Destructuring

## Simple destructuring

```js
// Retrieve 'bar'
const obj = { foo: 'bar' };

// Retrieve first element
const arr = [1, 2, 3, 4];
```

## Nested destructuring

```js
// Retrieve 'baz'
const obj = { foo: { bar: 'baz' } };

// Retrieve middle element in the middle array
const ticTacToeBoard = [
  ['x', 'o', 'x'],
  ['o', 'o', 'x'],
  ['x', 'x', 'o'],
];

// Retrieve Anna's salary
const employees = [
  { name: 'John', salary: 400 },
  { name: 'Boris', salary: 450 },
  { name: 'Anna', salary: 350 },
];

// Retrieve first value of rgb color
const color = {
  type: 'rgb',
  value: [255, 255, 0],
};

const user = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

// Correct the errors in code
const {
  personalInfo: { firstName },
} = user;
const { email } = personaInfo;
```

## Rest operator

```js
// Create an object copy without password
const user = { firstName: 'John', lastName: 'Doe', password: '12345678' };

// Create an array copy without first 2 numbers
const fibonacciNumber = [0, 1, 1, 2, 3, 5, 8];

function Checkbox(props) {
  // Destructure from function param an object without `isValid`
}

Checkbox({ className: 'checkbox', checked: true, disabled: true, isValid: false });

// Collect all args in array
function getSum() {}
getSum(1, 2, 3, 4, 5, 6, 7);
```

## Function params destructuring

```js
// Retrieve `className` from props
function Page(props) {}

Page({ className: 'my-cool-component', path: '/home', status: 'LOADED' });
```

## Fallback of destructured properties

```js
// Return first name of user or 'Unknown' if not provided
const firstUser = { firstName: 'John', lastName: 'Doe' };
const lastUser = { name: 'User' };

// Return first name of user or 'Unknown' if not provided
function getName(user) {}

getUser({ firstName: 'John', lastName: 'Doe' });
getUser({ name: 'User' });

// Print in console the first log or null if it's not available
const accessLogs = [];
const errorLogs = [
  { path: 'components/Header/Header.tsx', line: 10, column: 20 },
  { path: 'components/Cart/CartTotal.tsx', line: 58, column: 4 },
  { path: 'store/users.ts', line: 27, column: 11 },
];
```

## Renaming of destructured properties

```js
const foo = 123;
// Retrieve foo
const obj = { foo: 'baz' };
```
