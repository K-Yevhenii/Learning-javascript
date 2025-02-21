// Old-fashioned way to get arguments
function sum() {
  let sum = 0;

  // arguments is iterable object - has .length property and its members can be accessed by index
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]; // Ok
  }

  console.log(arguments.length); // Ok

  // Will throw an error because arguments is not an array
  return arguments.reduce((acc, el) => acc + el, 0);
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15
sum(1, 2, 3, 4, 5, 6); // 21

// New way to get arguments
const sum = (...args) => args.reduce((acc, el) => acc + el, 0);

const arrowFn = () => {
  console.log(arguments); // Will throw an error because arguments doesn't exist in arrow functions
};

function sum() {
  // Arguments can be spread
  return [...arguments].reduce((acc, el) => acc + el, 0);
}

const arr = [1, 2, 3];

arr.map(function (el) {
  arguments;
  return (el += el);
});

arr.map((el) => (el += el));

