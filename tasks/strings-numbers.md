# Strings and numbers

## Greeting

Write logic that asks name of user and greets them in console. If no name is provided, use `stranger` instead of name.

```js
// If user enters Alex expected to see 'Hello, Alex!'
// If user enters Bob expected to see 'Hello, Bob!'
// If user doesn't enter a name expected to see 'Hello, stranger!'
```

## Value in console

What will be printed in console? Why?

```js
typeof NaN;
7 + 'x';
7 + '7';
7 * 7;
7 == '7';
7 === 7;
```

## Conversion to Fahrenheit

1. Write logic that converts temperature in Celsius to Fahrenheit. For it value should be multipled by 100, divided by 18 and added 32.
2. Create logic that performs opposite conversion.

**Important**: should handle a situation when a temperature is 0.

```js
// 0C -> 32F
// 100C -> 212F
// 10F -> -12.22222C
```

## Vehicle plate check

Create a logic that tries to find a match between provided input and saved registration plate;

```js
const SEARCH_TERM = 'gh1234';

// All three should match
const firstMatchingPlate = 'GH1234';
const secondMatchingPlate = 'GH 1234';
const thirdMatchingPlate = 'gh 1 2 3 4';

// Shouldn't match
const thirdMatchingPlate = 'po9876';
```

## Capitalize sentence

Write logic that converts the first letter to uppercase and all other letters to lowercase

```js
const str = 'lorem Ipsum Dolorem Sit Amet'; // Should be converted to 'Lorem ipsum dolorem sit amet'
```
