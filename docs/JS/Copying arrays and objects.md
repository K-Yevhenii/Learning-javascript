# Copying arrays and objects

## Arrays

### Shallow copy

```js
const arr = [1, 2, 3];
const copy = arr.slice();

const copyPush = [];
for (let i = 0; i < arr.length; i++) {
  copyPush.push(arr[i]); // method 1
  copyPush[i] = arr[i]; // method 2
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const copy = [...arr1];
const copy = [...arr1, ...arr2];

const copyConcat = [].concat(arr);
```

## Objects

### Shallow copy

```js
const products = { name: "Radar", price: 1300, quantity: 4 };

const copyObj = { ...products };

const copyForIn = {};
for (const key in product) {
  copyForIn[key] = product[key];
}
```
