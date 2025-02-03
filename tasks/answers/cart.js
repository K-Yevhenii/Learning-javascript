const products = [
    { id: 1, name: "Banana", price: 20 },
    { id: 2, name: "Sausages", price: 40 },
    { id: 3, name: "Milk", price: 35 },
    { id: 4, name: "Mineral water", price: 12 },
];

// {
//     let productsCart = {};
//     function addProduct(productID) {
//         const product = getProductByID(productID);
//         if (productsCart[product.id]) {
//             productsCart = {
//                 ...productsCart, [product.id]: {
//                     ...productsCart[product.id],
//                     quantity: productsCart[product.id].quantity + 1
//                 }
//             }
//         } else {
//             productsCart = { ...productsCart, [product.id]: { ...product, quantity: 1 } }
//         }
//         return productsCart;
//     }
//     function getProductByID(productID) {
//         for (const product of products) {
//             const { id } = product;
//             if (productID === product.id) {
//                 //product.id
//                 return product;
//             }
//         }
//         return null;
//     }

//     function removeProductFromCart(productID) {
//         const product = getProductByID(productID);
//         if (productsCart[productID]) {
//             const { quantity } = productsCart[productID];
//             if (quantity === 1) {
//                 delete productsCart[productID];
//             } else {
//                 productsCart = {
//                     ...productsCart, [productID]: {
//                         ...productsCart[productID],
//                         quantity: productsCart[productID].quantity - 1
//                     }
//                 }
//             }
//         }
//         return productsCart;
//     }

//     console.log(addProduct(3));
//     console.log(addProduct(4));

// }



let productsCart = [
    { id: 1, name: 'Banana', price: 20, quantity: 1 },
    { id: 2, name: 'Sausages', price: 40, quantity: 3 },
    { id: 3, name: 'Milk', price: 35, quantity: 5 },
    { id: 4, name: 'Mineral water', price: 12, quantity: 7 },
];
function getProductInCart(productID) {
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

function getProductByID(productID) {
    for (const product of products) {
        const { id } = product;
        if (productID === product.id) {
            //product.id
            return product;
        }
    }
    return null;
}

function addProduct(productID) {
    const productIndex = getProductInCart(productID);

    if (productIndex !== null) {
        productsCart = [...productsCart.slice(0, productIndex),
        { ...productsCart[productIndex], quantity: productsCart[productIndex].quantity + 1 },
        ...productsCart.slice(productIndex + 1)]
    } else {
        const productPromCatalog = getProductByID(productID);
        productsCart = [...productsCart, { ...productPromCatalog, quantity: 1 }]
    }
}

addProduct(3);

function deleteProduct(productID) {
    const productIndex = getProductInCart(productID);
    if (!productIndex) {
        console.log(`There is no product ${productID} in cart`);
    }
    const productInCart = productsCart[productIndex]
    if (productInCart.quantity === 1) {
        // productsCart = [...productsCart.slice(0, productIndex),
        // ...productsCart.slice(productIndex + 1)]
        productsCart.splice(productIndex, 1)
    } else {
        productsCart = [...productsCart.slice(0, productIndex),
        { ...productsCart[productIndex], quantity: productsCart[productIndex].quantity - 1 },
        ...productsCart.slice(productIndex + 1)]
    }

}