const board = [
  [1, [2, 3]],
  [4, 5, [6]],
  [7, 8, 9],
];

const outer = board[0];
const inner = outer[1];

const innerAndShorter = board[0][1];

console.log(inner);

const products = [
  { id: 1, name: 'Banana', price: 20 },
  { id: 2, name: 'Sausages', price: 40 },
  { id: 3, name: 'Milk', price: 35 },
  { id: 4, name: 'Mineral water', price: 12 },
];


const { name, ...rest } = products[2]; //{ id: 3, name: 'Milk', price: 35 },


function printObjectValueByKey(key) {
  const product = products[2]

  console.log(product[key])
}

printObjectValueByKey('name') // Milk
printObjectValueByKey('id') // 3
printObjectValueByKey('notExist') // undefined
