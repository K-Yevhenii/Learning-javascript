// TODO: describe type
const catalog = [
  { id: 1, name: 'Banana', price: 20 },
  { id: 2, name: 'Sausages', price: 40 },
  { id: 3, name: 'Milk', price: 35 },
  { id: 4, name: 'Mineral water', price: 12 },
];

// TODO: use access modifiers for properties and methods
// TODO: create interface for Cart
class Cart {
  constructor(catalog) {
    this._productsCart = [];
    this._catalog = catalog;
  }

  // TODO: implement getter
  get totalPrice() {}

  // TODO: implement method
  clearCart() {}

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
  static #DEFAULT_DISCOUNT = 20;
  #discount;

  constructor(catalog, discount = null) {
    // Під час ініціалізації дочірнього класу потрібно викликати конструктор батьківського класу
    super(catalog);

    this.#discount = discount || CartWithDiscount.#DEFAULT_DISCOUNT;
  }

  get discount() {
    return this.#discount;
  }

  // TODO: add setter for discount that should be in range from 0 to 100

  // TODO: override totalPrice getter
}

const discountedCart = new CartWithDiscount(catalog, 30);

// discountedCart має доступ як до властивостей і методів CartWithDiscount, так і до Cart.
console.log(discountedCart.discount);
console.log(discountedCart.totalPrice);
console.log(discountedCart.addProduct(1));
console.log(discountedCart.deleteProduct(1));
