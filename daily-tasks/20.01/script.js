// TODO: retrieve c and d
const a = { b: { c: { d: 1 } } };
const objB = a.b
// const { b } = a
const { b: { c } } = a;
const { d: e } = c;

// TODO:
// 1. Copy array and add 10 to copied one
// 2. Exclude from copy the first 2 elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersCopy = [...numbers, 10];
const obj = { foo: 'bar' }
const copy = { ...obj, baz: 'quux' }
const [, , ...rest] = numbers;
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
const copy2 = [...arr1, ...arr2]//[1,2,3,1,2,3]

// TODO: Merge two objects into one

const first = { b: 1 };
const second = { b: 2 };
const objMerge = { ...first, ...second } // {b:2}
const objMerge2 = { ...first, ...second, b: 3 } // {b:3}
const objMerge3 = { ...second, b: 3, ...first, } // {b:1}
const fourth = { b: 4, a: 1 }
const objMerge4 = { ...first, ...second, b: 3, ...fourth } //{ b: 4, a: 1 }
const objMerge5 = { ...fourth, ...first, ...second, b: 3 } //{a:1, b:3}

// TODO: exclude password from user
const user = { firstName: 'John', lastName: 'Doe', email: 'john@doe.com', password: 'Qwerty123!' };
const { password, ...userRest } = user;

// TODO: add new order to customer
let customer = {
  firstName: 'John',
  lastName: 'Doe',
  orders: [
    { id: 1, sum: 2300 },
    { id: 2, sum: 1500 },
    { id: 3, sum: 3000 },
  ],
};

customer = { ...customer, orders: [...customer.orders, { id: 4, sum: 1400 }] }