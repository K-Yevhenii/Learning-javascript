const catalog = [
  { id: 1, name: 'Banana', price: 20 },
  { id: 2, name: 'Sausages', price: 40 },
  { id: 3, name: 'Milk', price: 35 },
  { id: 4, name: 'Mineral water', price: 12 },
];

class Cart {
  constructor(catalog) {
    this._productsCart = [];
    this._catalog = catalog;
  }

  get totalPrice() {}

  addProduct(productID) {
    const productIndex = this._getProductIndexInCart(productID);

    if (productIndex !== -1) {
      this._productsCart = this._productsCart.map((product) =>
        product.id === productID ? { ...product, quantity: product.quantity + 1 } : product,
      );
    } else {
      const productPromCatalog = this._getProductFromCatalog(productID);
      this._productsCart = [...this._productsCart, { ...productPromCatalog, quantity: 1 }];
    }
    return this;
  }

  _getProductIndexInCart(productID) {
    return this._productsCart.findIndex(({ id }) => id === productID);
  }

  _getProductFromCatalog(productID) {
    return this._catalog.find(({ id }) => id === productID);
  }

  deleteProduct(productID) {
    const productIndex = this._getProductIndexInCart(productID);
    const hasProductInCart = this._productsCart.some(({ id }) => id === productID);

    if (!hasProductInCart) {
      console.log(`There is no product ${productID} in cart`);
      return;
    }

    const productInCart = this._productsCart[productIndex];

    if (productInCart.quantity === 1) {
      this._productsCart = this._productsCart.filter(({ id }) => id !== productID);
    } else {
      this._productsCart = this._productsCart.map((product) =>
        product.id === productID ? { ...product, quantity: product.quantity - 1 } : product,
      );
    }

    return this;
  }
}

const cart = new Cart(catalog);
cart.addProduct(1).deleteProduct(2).addProduct(1);

class CartWithDiscount extends Cart {
  static #DISCOUNT = 20;

  get discount() {
    return CartWithDiscount.#DISCOUNT;
  }
}

const discountedCart = new CartWithDiscount(catalog);

console.log(discountedCart instanceof CartWithDiscount); // true
console.log(discountedCart instanceof Cart); // true
console.log(discountedCart.constructor === CartWithDiscount); // true
console.log(discountedCart.constructor === Cart); // false

console.log(discountedCart.discount);
console.log(discountedCart.totalPrice);
console.log(discountedCart.addProduct(1));
console.log(discountedCart.deleteProduct(1));
