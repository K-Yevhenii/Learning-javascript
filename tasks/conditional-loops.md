# Tasks

## Conditionals

### Fix ternary operator hell

**Goal** - improve this code using `if...else` and `switch`.

```js
const mark = Math.floor(Math.random() * 5 + 1); // Don't pay attention; in this variable random integer between 1 and 5
const result =
  mark === 5
    ? 'Excellent'
    : mark === 4
    ? 'Good'
    : mark === 3
    ? 'Ok'
    : mark === 2
    ? 'Bad. Please, try better next time'
    : mark === 1
    ? 'Very bad'
    : 'Unknown mark';
```

```js
// Your version with `if...else`
```

```js
// Your version with `switch`
```

### Traffic light

**Goal** - write a function that performs state of traffic light. It should return a string that tells driver what to do. The function accepts a `colour` as a single param. `colour` will be always a string:

- if colour is read, return `Stop`
- if colour is green, return `Go`
- if colour is yellow, return `Prepare to go`
- if colour isn't red, green or yellow return `Unknown color`.

**Important**: write 2 variants of check in function - with `switch` and with `if...else`.

```js
function checkTrafficLight(colour) {
  // Write implementation with `if...else`
}
```

```js
function checkTrafficLight(colour) {
  // Write implementation with `switch`
}
```

## `For` cycle

### Count amount of letters

**Goal** - write a function that:

1. Asks user a letter (skip all validation, it's assumed that a user types a single letter)
2. Asks user a word
3. Calculates how many times a letter is found in the word and returns this count.

For example, if user typed letter `a` and entered `banana`, the function should return `3`
Write 2 versions using `for` cycle and `while`

```js
// Version with `for`
function countLettersInWord() {}
```

```js
// Version with `while`
function countLettersInWord() {}
```

### The biggest number

**Goal** - find the biggest number using for cycle. Important - discuss task before implementation.

```js
const numbers = [5, -1, 45, 8, -22, 54];

// Add your solution here
```

### Reverse string

**Goal** - write a function reads value passed by user and reverses string. If user doesn't enter anything return a message `Please, provide your message`. Don't use built-in `.reverse method`
For example, `asdfqwer` should return `rewqfdsa`.

```js
function reverseString(str) {}
```

```js
const str = 'ewewqeqweqwe';
```

## Multi-match

**Goal** - rewrite this code to `if...else`

```js
const color = prompt('Enter your color');

switch (color) {
  case 'red':
  case 'orange':
  case 'yellow':
    console.log('Warm color');
    break;
  case 'blue':
  case 'violet':
    console.log('Cold color');
    break;
}
```
