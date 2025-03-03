const catalog = [
  { id: 1, name: 'Banana', price: 20 },
  { id: 2, name: 'Sausages', price: 40 },
  { id: 3, name: 'Milk', price: 35 },
  { id: 4, name: 'Mineral water', price: 12 },
];

let productsCart = {
  1: { id: 1, name: 'Banana', price: 20 },
  2: { id: 2, name: 'Sausages', price: 40 },
  3: { id: 3, name: 'Milk', price: 35 },
  4: { id: 4, name: 'Mineral water', price: 12 },
};

productsCart[productID];

function getProductFromCatalog(productID) {
  for (const product of catalog) {
    const { id } = product;
    if (productID === id) {
      //product.id
      return product;
    }
  }
  return null;
}

function addProduct(productID) {
  const product = getProductFromCatalog(productID);

  if (productsCart[product.id]) {
    productsCart = {
      ...productsCart,
      [product.id]: {
        ...productsCart[product.id],
        quantity: productsCart[product.id].quantity + 1,
      },
    };
  } else {
    productsCart = {
      ...productsCart,
      [product.id]: {
        ...product,
        quantity: 1,
      },
    };
  }
  return productsCart;
}

function removeProductFromCart(productID) {
  if (productsCart[productID]) {
    const { quantity } = productsCart[productID];
    if (quantity === 1) {
      delete productsCart[productID];
    } else {
      productsCart = {
        ...productsCart,
        [productID]: {
          ...productsCart[productID],
          quantity: productsCart[productID].quantity - 1,
        },
      };
    }
  }
  return productsCart;
}
