# Spread and rest

## Element exclusion

**Goal** - exclude an item from an array and an object

```js
// Goal - create an object without key `c` using rest operator
const obj = { a: null, b: 'foo', c: true, d: [1, 2, 3] };

// Goal - create an array without the first and last iten
const array = ['foo', null, 42, {}];
```

## Nested destructuring

**Goal** - retrieve key using destructuring assignment

```js
const obj = {
  a: { b: { c: [[{ d: 'target' }]] } },
};
```

## Sum of elements

Create a function that accepts arbitrary amount of arguments and sums them if an argument is number. Should return a number.

## Cart review

Which console.logs will throw an error? How to fix it?

```js
const cart = [
  {
    name: 'Product 1',
    price: 10.25,
    location: [
      { name: 'Store A', id: 1 },
      { name: 'Store B', id: 2 },
    ],
  },

  {
    name: 'Product 2',
    price: 7.45,
    location: [
      { name: 'Store A', id: 2 },
      { name: 'Store C', id: 3 },
    ],
  },
  {
    name: 'Product 3',
    price: 12.5,
    location: [
      { name: 'Store A', id: 1 },
      { name: 'Store B', id: 2 },
    ],
  },
];

const [{ inStock }] = cart;

const { name } = cart;

const [
  {
    location: { coordinates },
  },
  ..._
] = cart;

const [
  ..._,
  {
    location: { coordinates },
  }
] = cart;

const [
  ..._,
  {
    location: [{ coordinates: {latitude} }],
  }
] = cart;
```

Bonus goals:

1. Find sum of cart.
2. Find at which store there are all products.
