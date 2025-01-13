# Destructuring

## Simple destructuring

```js
// Retrieve 'bar'
const obj = { foo: "bar" };
const { foo } = obj;

// Retrieve first element
const arr = [1, 2, 3, 4];
const [first] = arr;
```

## Nested destructuring

```js
// Retrieve 'baz'
const obj = { foo: { bar: "baz" } };
const {
  foo: { bar },
} = obj;

// Retrieve middle element in the middle array
const ticTacToeBoard = [
  ["x", "o", "x"],
  ["o", "o", "x"],
  ["x", "x", "o"],
];
const [_, [__, second]] = ticTacToeBoard;

// Retrieve Anna's salary
const employees = [
  { name: "John", salary: 400 },
  { name: "Boris", salary: 450 },
  { name: "Anna", salary: 350 },
];
const [_, __, { salary }] = employees;

// Retrieve first value of rgb color
const color = {
  type: "rgb",
  value: [255, 255, 0],
};
const {
  value: [rgb],
} = color;

// Correct the errors in code
const user = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
  },
};
const {
  personalInfo: { firstName, email },
} = user;
const { email } = personaInfo; // Raises error because during nested destructuring intermediate objects aren't saved to constants
```

## Rest operator

```js
// Create an object copy without password
const user = { firstName: "John", lastName: "Doe", password: "12345678" };
const { password, ...userCopy } = user;

// Create an array copy without first 2 numbers
const fibonacciNumber = [0, 1, 1, 2, 3, 5, 8];
const [first, second, ...rest] = fibonacciNumber;

function Checkbox({ isValid, ...rest }) {
  // Destructure from function param an object without `isValid`
}

Checkbox({
  className: "checkbox",
  checked: true,
  disabled: true,
  isValid: false,
});

function convertRgbToHex([red]) {}
convertRgbToHex([10, 54, 23]);

// Collect all args in array

function getSum(...numbers) {}
getSum(1, 2, 3, 4, 5, 6, 7);
```

## Function params destructuring

```js
// Retrieve `className` from props
function Page({ className }) {}

Page({ className: "my-cool-component", path: "/home", status: "LOADED" });
```

## Fallback of destructured properties

```js
// Return first name of user or 'Unknown' if not provided
const firstUser = { firstName: "John", lastName: "Doe" };
const lastUser = { name: "User" };

// Return first name of user or 'Unknown' if not provided
function getUser({ firstName = "Unknown" }) {}

getUser({ firstName: "John", lastName: "Doe" });
getUser({ name: "User" });

// Print in console the first log or null if it's not available
const accessLogs = [];
const errorLogs = [
  { path: "components/Header/Header.tsx", line: 10, column: 20 },
  { path: "components/Cart/CartTotal.tsx", line: 58, column: 4 },
  { path: "store/users.ts", line: 27, column: 11 },
];
const [first = null] = accessLogs;
const [first] = errorLogs;
```

## Renaming of destructured properties

```js
const foo = 123;
// Retrieve foo
const obj = { foo: "baz" };
const { foo: foo1 } = obj;
```

## Access to object properties

```js
const obj = {};
console.log(obj.foo); // Returns `undefined`
console.log(obj.foo.bar); // Raises TypeError because cannot retrieve property bar from obj.foo that's `undefined`

const arr = [];
console.log(arr[0]); // Returns `undefined`
```
