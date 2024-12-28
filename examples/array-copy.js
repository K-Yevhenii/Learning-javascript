let foo = 'bar';
const baz = foo;

foo = 'qux'; // baz is still 'bar' because primitive values are copied by value

const arr = [1, 2, 3];
// arr2 is not copied but has the same reference to arr, i.e. changes in arr will affect arr2
const arr2 = arr;

// arrCopy has different reference but the same contents, i.e. changes in arr will not affect arrCopy
const arrCopy = arr.slice();
arr.push(5);

// arr2Copy has different reference but the same contents, i.e. changes in arr will not affect arr2Copy
const arr2Copy = [].concat(arr);
arr.push(6);

const board = [
  [1, [2, 3]],
  [4, 5, [6]],
  [7, 8, 9],
];

function deepCopyArray(arr) {
  const copy = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // deepCopy is called recursively for copying nested arrays
      const copiedElement = deepCopyArray(arr[i]);
      copy.push(copiedElement);
    } else {
      copy.push(arr[i]);
    }
  }

  return copy;
}

deepCopyArray(board);
