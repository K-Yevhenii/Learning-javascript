// TODO: describe type
export interface CatalogItem {
    id: number;
    name: string;
    price: number;
}
interface CartItem extends CatalogItem {
    quantity: number;
}

const catalog: CatalogItem[] = [
    { id: 1, name: "Banana", price: 20 },
    { id: 2, name: "Sausages", price: 40 },
    { id: 3, name: "Milk", price: 35 },
    { id: 4, name: "Mineral water", price: 12 },
];

// TODO: use access modifiers for properties and methods
// TODO: create interface for Cart

class Cart {
    private catalog: CatalogItem[];
    private productsCart: CartItem[];
    constructor(catalog: CatalogItem[]) {
        this.productsCart = [];
        this.catalog = catalog;
    }

    // TODO: implement getter
    get totalPrice(): number {
        return this.productsCart.reduce((acc, { price, quantity }) => price * quantity + acc, 0);
    }

    // TODO: implement method
    clearCart() {
        this.productsCart = [];
        return this;
    }

    addProduct(productID: number) {
        const productIndex = this.getProductIndexInCart(productID);

        if (productIndex !== -1) {
            this.productsCart = this.productsCart.map((product) =>
                product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
            );
        } else {
            const productPromCatalog = this.getProductFromCatalog(productID);
            if (productPromCatalog) {
                this.productsCart = [...this.productsCart, { ...productPromCatalog, quantity: 1 }];
            }
        }
        return this;
    }

    private getProductIndexInCart(productID: number) {
        return this.productsCart.findIndex(({ id }) => id === productID);
    }

    private getProductFromCatalog(productID: number) {
        return this.catalog.find(({ id }) => id === productID);
    }

    deleteProduct(productID: number) {
        const productIndex = this.getProductIndexInCart(productID);
        const hasProductInCart = this.productsCart.some(({ id }) => id === productID);

        if (!hasProductInCart) {
            console.log(`There is no product ${productID} in cart`);
            return this;
        }

        const productInCart = this.productsCart[productIndex];

        if (productInCart.quantity === 1) {
            this.productsCart = this.productsCart.filter(({ id }) => id !== productID);
        } else {
            this.productsCart = this.productsCart.map((product) =>
                product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
            );
        }

        return this;
    }
}

const cart = new Cart(catalog);
cart.addProduct(1).deleteProduct(2).addProduct(1);

class CartWithDiscount extends Cart {
    private static readonly DEFAULT_DISCOUNT = 20;
    private discount: number;

    constructor(catalog: CatalogItem[], discount: number | null = null) {
        // Під час ініціалізації дочірнього класу потрібно викликати конструктор батьківського класу
        super(catalog);

        this.discount = discount || CartWithDiscount.DEFAULT_DISCOUNT;
    }

    // get discount() {
    //     return this.#discount;
    // }

    // TODO: add setter for discount that should be in range from 0 to 100

    // TODO: override totalPrice getter
}

const discountedCart = new CartWithDiscount(catalog, 30);

// discountedCart має доступ як до властивостей і методів CartWithDiscount, так і до Cart.
console.log(discountedCart.discount);
console.log(discountedCart.totalPrice);
console.log(discountedCart.addProduct(1));
console.log(discountedCart.deleteProduct(1));
