function findLongestWord(string) {

    let longestWord = "";
    const wordArray = string.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        if (longestWord.length < wordArray[i].length)
            longestWord = wordArray[i]
    }

    return longestWord;

}
findLongestWord("The quick brown fox jumped over the lazy dog")



function findLongestWord(string) {
    let stringArray = string.split(" ");
    let longestWordLength = stringArray[0].length;
    let longestWord = stringArray[0];
    for (let i = 0; i < stringArray.length; i += 1) {
        if (stringArray[i].length > longestWordLength) {
            longestWordLength = stringArray[i].length;
            longestWord = stringArray[i]
        }
    }
    return longestWord;
}

function createArrayOfNumbers(min, max) {
    const numbers = [];
    for (let i = min; min <= max; i++) {
        numbers.push(min++)

    }
    return numbers;
}



function filterArray(numbers, value) {
    // Change code below this line
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
        newArray.push([i]);
        if (newArray > value) {
            newArray.push([i]);
        }
    }
    return newArray;


    // Change code above this line
}



function getCommonElements(array1, array2) {
    // Change code below this line
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {

        if (array2.includes(array1[i]))

            newArray.push(array1[i])
    }
    console.log(newArray);
    return newArray


    // Change code above this line
}
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])


function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line

    for (const element of order) {
        total += element;
    }
    console.log(total);

    // Change code above this line
    return total;
}
calculateTotalPrice([12, 85, 37, 4])


function filterArray(numbers, value) {
    // Change code below this line
    const filteredNumbers = [];

    for (let element of numbers) {

        if (element > value) {
            filteredNumbers.push(element);
        }
    }
    console.log(filteredNumbers);

    return filteredNumbers;
    // Change code above this line
}
filterArray([12, 24, 8, 41, 76], 38)


function getEvenNumbers(start, end) {
    // Change code below this line
    const arr = []
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            arr.push(i);

        }
    }
    return arr


    // Change code above this line
}

function sum(a, b, ...args) {
    // 3, 2, 2, 3 -> [3, 2, 2, 3]
    let result = 0
    for (let i = 0; i < args.length; i++) {
        result += args[i];

    }
    return result;
}
sum(3, 2, 2, 3)


const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const merged = [...arr1, ...arr2]


const obj = {
    foo: 'bar',
    baz: 'quux',
    far: null
}

const obj1 = {
    foo: 123
}

const result = {
    ...obj,
    ...obj1,
}

const { foo, ...restObj } = obj;

console.log(rest)

let x = a
let y = b
[x, y] = [y, x];


function isEmpty(obj) {
    for (const key in obj) {
        return false;
    }
    return true;
}

function ObjectEntries(obj) {
    return Object.entries(obj).length === 0;

}


const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const salariesList = Object.values(salaries)
let sum = 0;
for (let i = 0; i < salariesList.length; i++) {
    const element = salariesList[i];
    sum += element;

}

for (const element of salaries) {
    sum += element;
}

for (const key in salaries) {
    sum += salaries[key];
}


const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
};
const keys = [];
const values = [];
for (const key in apartment) {
    keys.push(key)
    values.push(apartment[key]);
}
