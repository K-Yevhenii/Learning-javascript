const products = [
  { id: 1, name: 'Banana', price: 20 },
  { id: 2, name: 'Sausages', price: 40 },
  { id: 3, name: 'Milk', price: 35 },
  { id: 4, name: 'Mineral water', price: 12 },
];

let productsCart = {};

function addProduct(productID) {
  const product = getProductByID(productID);

  if (productsCart[product.id]) {
    productsCart = {
      ...productsCart,
      [product.id]: {
        ...productsCart[product.id],
        quantity: productsCart[product.id].quantity + 1,
      },
    };
  } else {
    productsCart = { ...productsCart, [product.id]: { ...product, quantity: 1 } };
  }

  return productsCart;
}

function getProductByID(productID) {
  for (const product of products) {
    const { id } = product;

    if (productID === id) {
      //product.id
      return product;
    }
  }
  return null;
}

console.log(addProduct(3));
console.log(addProduct(4));
console.log(addProduct(3));
