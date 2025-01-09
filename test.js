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
