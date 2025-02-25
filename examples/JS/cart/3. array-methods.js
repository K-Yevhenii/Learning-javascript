// Read-only list of products
const catalog = [
  { id: 1, name: 'Banana', price: 20 },
  { id: 2, name: 'Sausages', price: 40 },
  { id: 3, name: 'Milk', price: 35 },
  { id: 4, name: 'Mineral water', price: 12 },
];

// Products in cart with quantity
let productsCart = [
  { id: 1, name: 'Banana', price: 20, quantity: 1 },
  { id: 2, name: 'Sausages', price: 40, quantity: 3 },
  { id: 3, name: 'Milk', price: 35, quantity: 5 },
  { id: 4, name: 'Mineral water', price: 12, quantity: 7 },
];

function getProductIndexInCart(productID) {
  return productsCart.findIndex(({ id }) => id === productID);
}

const sortProductsByProductTotal = productsCart.sort(
  (a, b) => a.price * a.quantity - b.price * b.quantity,
);

function getProductFromCatalog(productID) {
  return catalog.find(({ id }) => id === productID);
}

function addProduct(productID) {
  const productIndex = getProductIndexInCart(productID);

  if (productIndex !== -1) {
    productsCart = productsCart.map((product) =>
      product.id === productID ? { ...product, quantity: product.quantity + 1 } : product,
    );
  } else {
    const productPromCatalog = getProductFromCatalog(productID);
    productsCart = [...productsCart, { ...productPromCatalog, quantity: 1 }];
  }
}

function deleteProduct(productID) {
  const productIndex = getProductIndexInCart(productID);
  const hasProductInCart = productInCart.some(({ id }) => id === productID);

  if (hasProductInCart) {
    console.log(`There is no product ${productID} in cart`);
  }

  const productInCart = productsCart[productIndex];

  // This code removes element from array
  if (productInCart.quantity === 1) {
    // Option 1. Slice all elements before and after the element and spread them in a new array
    productsCart = [
      ...productsCart.slice(0, productIndex),
      ...productsCart.slice(productIndex + 1),
    ];

    // Option 2. Remove a single element starting from index of deleted element
    productsCart.splice(productIndex, 1);

    // Option 3. Filter element by id
    productsCart = productsCart.filter(({ id }) => id !== productID);

    // This code modifies an object in array by decreasing quantity by 1
  } else {
    // Option 1. Slice all elements before and after the element and spread them in a new array
    productsCart = [
      ...productsCart.slice(0, productIndex),
      { ...productsCart[productIndex], quantity: productsCart[productIndex].quantity - 1 },
      ...productsCart.slice(productIndex + 1),
    ];

    // Option 2. Using map
    productsCart = productsCart.map((product) =>
      product.id === productID ? { ...product, quantity: product.quantity - 1 } : product,
    );
  }
}
