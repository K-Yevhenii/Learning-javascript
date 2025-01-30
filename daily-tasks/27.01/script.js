const languages = {
  family: {
    IndoEuropean: {
      Germanic: ['English', 'German'],
      Roman: {
        WestRoman: ['Italian', 'Spanish', 'French'],
        EastRoman: 'Romanian',
      },
      Greek: 'Greek',
    },
  },
};
const languagesGerman = languages.family['Indo-European'].Germanic[1];
const languagesFrench = languages.family['Indo-European'].Roman.WestRoman[2];
const languagesGreek = languages.family['Indo-European'].Greek;
const { family: { IndoEuropean: { Germanic: [, german] } } } = languages;
const { family: { IndoEuropean: { Roman: { WestRoman: [, , french] } } } } = languages;
const { family: { IndoEuropean: { Greek } } } = languages;
// Retrieve German, French and Greek languages 1. using destructuring 2. and using dot notation

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

// 1. Get name of the second order 1. using destructuring 2. and using dot notation
// 2.Get price of the last order 1. using destructuring 2. and using dot notation

const keys = ['firstName', 'lastName', 'age'];
user[keys[1]];
const userOrder = user.orders[1].name;
const lastOrder = user.orders[2].price;

const { orders: [, { name, price: burgerPrice }, { price }] } = user

// What will be printed in the console?

const vehicles = [
  { type: 'car', brand: 'Toyota', model: 'Corolla', color: 'red' },
  { type: 'motorbike', brand: 'Honda', model: 'CBR', color: 'black' },
  { type: 'car', brand: 'Hyndai', model: 'Trail', color: 'orange' },
  { type: 'car', brand: 'Mazda', model: 'Corolla', color: 'red' },
];
const typeCar = vehicles[2].type;
const brandMoto = vehicles[1].brand;
const [, { brand }, { type }] = vehicles;
// 1. Get type of the orange vehicle 1. using destructuring 2. and using dot notation
// 2. Get model of the motorbike 1. using destructuring 2. and using dot notation
