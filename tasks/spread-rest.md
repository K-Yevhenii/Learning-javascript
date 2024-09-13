# Spread and rest

## Rest operators

**Goal** - exclude an item from an array and an object

```js
// Goal - create an object without key `c` using rest operator
const obj = { a: null, b: 'foo', c: true, d: [1, 2, 3] };

// Goal - create an array without the first and last iten
const array = ['foo', null, 42, {}];
```

**Goal** - retrieve key using destructuring assignment

```js
const obj = {
  a: { b: { c: [[{ d: 'target' }]] } },
};
```
