// ## `For` cycle

// ### Count amount of letters

//     ** Goal ** - write a function that:

//     1. Asks user a letter(skip all validation, it's assumed that a user types a single letter)
// 2. Asks user a word
// 3. Calculates how many times a letter is found in the word and returns this count.

// For example, if user typed letter `a` and entered`banana`, the function should return `3`
// Write 2 versions using `for` cycle and`while`

//     ```js
// // Version with `for`
// function countLettersInWord() {}
// ```

//     ```js
// // Version with `while`
// function countLettersInWord() {}

function countLettersInWordFor() {
  // TODO: make first 2 variables const
  let word = prompt('Enter word');
  // TODO: letters -> letter
  let letters = prompt('Enter letter');
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    let currentChar = word[i];

    // TODO: use === instead
    if (letters.includes(currentChar)) {
      count++;
    }
  }

  // TODO: return count instead
  alert(count);
}

function countLettersInWordWhile() {
  // TODO: make str1 and str2 const
  let str1 = 'banana';
  let str2 = 'a';

  let count = 0;
  let i = 0;

  while (i < str1.length) {
    let currentChar = str1[i];

    // TODO: use === instead
    if (str2.includes(currentChar)) {
      count++;
    }

    i++;
  }

  return count;
}


// ### The biggest number

//     ** Goal ** - find the biggest number using for cycle.Important -
// discuss task before implementation.

// ```js
// const numbers = [5, -1, 45, 8, -22, 54];

function biggestNumber() {
  const numbers = [5, -1, 45, 8, -22, 54];
  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  console.log(maxNumber);
}
biggestNumber();
