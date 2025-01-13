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


function deepCopyObject(obj) {
  const copy = {};
  for (const key in object) {
    const element = object[key];

    if (typeof element === 'object' && !!element) {
      copy[key] = deepCopyObject(element)
    } else if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        copy[key] = []

        if (Array.isArray(element[i])) {

        }
        else if (typeof element[i] === 'object' && !!element[i]) {
          copy[key][i] = deepCopyObject(element[i])
        } else {
          copy[key][i] = element
        }
      }

      return copy;
    } else {
      copy[key] = element
    }
  }
}
deepCopyArray(board);


const arr5 = [1, 2, 3, 4, 5];
const [first, second, ...newArr] = arr5;

const [first1, second1] = arr5;

// const [_, second2] = arr5

const arr6 = [{ foo: 'bar' }, { 'baz': 123 }];
const [_, second3] = arr6;

const { baz: baz1 } = arr6;