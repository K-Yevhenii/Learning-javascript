# Functions

```js
// Function declaration
function sum(a, b) {
  return a + b;
}

// Function expression
const sum = function (a, b) {
  return a + b;
};

// Object method
const obj = {
  sum(a, b) {
    return a, b;
  },
};
```

## Arrow functions

```js
// Basic example
const sum = (a, b) => {
  return a + b;
};

// Function without arguments
const sum = () => 2 + 2;

// Function that has 1 line of code, after array returns value immediately
const sum = (a, b) => a + b;

// If a function has 1 argument parenthesis (круглі дужки) can be omitted
const sum = (a) => a + a;

// If function returns object immediately after arrow, the object should be wrapped in parenthesis (круглі дужки)
const sum = (a, b) => ({ result: a + b });
// console.log(sum(2, 5)); -> { result: 7 }

// The longest form
function sum(a, b) {
  return {
    result: a + b,
  };
}

// A little bit longer form
const sum = (a, b) => {
  return { result: a + b };
};

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
// If param of arrow function is destructured, it should be wrapped in parenthesis (круглі дужки)
colorPickerOptions.findIndex(({ label }) => label === 'blue'); // 2

const color = { label: 'red', color: '#F44336' };
Object.entries(color).forEach(([key, value]) => console.log(key, value)); // Will print 'label', 'red' and in the second log 'color', '#F44336'
```
