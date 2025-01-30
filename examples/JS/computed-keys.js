const user = {
  firstName: 'Alex',
  lastName: 'Smith',
  age: 25,
  orders: [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Coke', price: 2 },
  ],
};

// Computed property for object can be any JS expression that returns a string
const keys = ['firstName', 'lastName', 'age'];
user[keys[1]];

const key = 'firstName';
user[key];

const obj = { key: 'firstName' };

user[obj.key]; // -> user['firstName']

function getKey() {
  return 'firstName';
}

user[getKey()];

// Computed index for array can be any JS expression that returns a number
const numbers = [1, 2, 3, 4, 5];
numbers[0];
numbers[numbers.length - 1]; // Returns last element
