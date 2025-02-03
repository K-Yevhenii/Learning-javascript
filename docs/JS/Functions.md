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

// Function that has 1 line of code, after array returns value immediately
const sum = (a, b) => a + b;

// If a function has 1 argument parenthesis (круглі дужки) can be omitted
const sum = a => a + a;

// If function returns object immediately after arrow, the object should be wrapped in parenthesis (круглі дужки)
const sum = (a, b) => ({ result: a + b });

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
```
