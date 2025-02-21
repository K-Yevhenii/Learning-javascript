const products = [
  { id: 1, name: 'Banana', price: 20 },
  { id: 2, name: 'Sausages', price: 40 },
  { id: 3, name: 'Milk', price: 35 },
  { id: 4, name: 'Mineral water', price: 12 },
];

let productsCart = [
  { id: 1, name: 'Banana', price: 20, quantity: 1 },
  { id: 2, name: 'Sausages', price: 40, quantity: 3 },
  { id: 3, name: 'Milk', price: 35, quantity: 5 },
  { id: 4, name: 'Mineral water', price: 12, quantity: 7 },
];

// The same as array.findIndex
function getProductIndexInCart(productID) {
  for (let i = 0; i < productsCart.length; i++) {
    const product = productsCart[i];
    const { id } = product;
    if (productID === id) {
      //product.id
      return i;
    }
  }
  return null;
}

// The same as array.find
function getProductFromCatalog(productID) {
  for (const product of products) {
    const { id } = product;

    if (productID === id) {
      //product.id
      return product;
    }
  }
  return null;
}
