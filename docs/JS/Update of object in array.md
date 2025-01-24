# Update of object in array

**Task** - increase quantity of milk by 1:

```js
let cart = [
  { id: 1, name: 'Banana', price: 20, quantity: 1 },
  { id: 2, name: 'Sausages', price: 40, quantity: 2 },
  { id: 3, name: 'Milk', price: 35, quantity: 3 },
  { id: 4, name: 'Mineral water', price: 12, quantity: 4 },
];
```

## Mutable

Update quantity in mutable way:

```js
cart[2].quantity += 1;
```

## Immutable

Steps:

1. Find index of element - id: 3
2. Create new version of cart that will consist of:
   2.1. All elements before element with index
   2.2. Add updated element - {...productInCart, quantity: productInCart + 1}
   2.3. All elements after element with index

```js
// Long version
const before = cart.slice(0, index); // [{ id: 1, name: 'Banana', price: 20, quantity: 1 }, { id: 2, name: 'Sausages', price: 40, quantity: 2 }]
const updatedItem = { ...cart[index], quantity: cart[index].quantity + 1 };
const after = cart.slice(index + 1); // [{ id: 4, name: 'Mineral water', price: 12, quantity: 4 },]

cart = [...before, updatedItem, ...after];

// Short version

cart = [
  ...cart.slice(0, index),
  { ...cart[index], quantity: cart[index].quantity + 1 },
  ...cart.slice(index + 1),
];
```
