const productsCart = [
  { id: 1, name: 'Banana', price: 20, quantity: 1 },
  { id: 2, name: 'Sausages', price: 40, quantity: 3 },
  { id: 3, name: 'Milk', price: 35, quantity: 5 },
  { id: 4, name: 'Mineral water', price: 12, quantity: 7 },
];
function doublePrice() {
  const doubleCart = [];
  for (let i = 0; i < productsCart.length; i++) {
    const { price, ...rest } = productsCart[i];
    doubleCart = [...doubleCart, { ...rest, price: price * 2 }];
  }
  return doubleCart;
}

function hasExpensiveItem(threshold) {
  for (let i = 0; i < productsCart.length; i++) {
    const { price } = productsCart[i];
    if (price > threshold) {
      return true;
    }
  }
  return false;
}

function deleteProductById(productId) {
  let indexToDelete = null;
  for (let i = 0; i < productsCart.length; i++) {
    const { id } = productsCart[i];
    if (productId === id) {
      indexToDelete = i;
      break;
    }
  }
  if (!indexToDelete) {
    return productsCart;
  }
  return [...productsCart.slice(0, indexToDelete), ...productsCart.slice(indexToDelete + 1)];
}

function calculateSum() {
  let totalPrice = 0;
  for (let i = 0; i < productsCart.length; i++) {
    const { price, quantity } = productsCart[i];
    totalPrice += price * quantity;
  }
  return totalPrice;
}

const result = productsCart.reduce((accumulator, product) => {
  const { price, quantity } = product;
  accumulator += price * quantity;

  return accumulator;
}, 0);


const data = {
    foo: 'bar',
    baz: null,
    quux: 1234,
    abc: 'ololo',
};


const payload = {};

Object.entries(data).forEach(([key, value]) => {
  if (value) {
    payload[key] = value;
  }
});


const resultReduce = Object.entries(data).reduce((accumulator, [key, value]) => {
    if (value) {
        accumulator[key] = value;
    }

    return accumulator
}, {});

console.log(resultForEach);
console.log(resultReduce);