// ** Goal ** - improve this code using `if...else` and`switch`.
const mark = Math.floor(Math.random() * 5 + 1);
let result;

switch (mark) {
    case 5: {
        result = 'Excellent';
        break;
    }
    case 4: {
        result = 'Good';
        break;
    }

    case 3:
        result = 'Ok';

        break;
    case 2:
        result = 'Bad. Please, try better next time';

        break;
    case 1:
        result = 'Very bad';

        break;
    default:
        result = 'Unknown mark'
}

console.log(result);


if (mark === 5) {
    console.log('Excellent'); //result = 'Excellent'
} else if (mark === 4) {
    console.log('Good');
} else if (mark === 3) {
    console.log('Ok');
} else if (mark === 2) {
    console.log('Bad. Please, try better next time');
} else if (mark === 1) {
    console.log('Very bad');
} else {
    console.log('Unknown mark');
}

// ** Goal ** - write a function that performs state of traffic light.It should return a string that tells driver what to do.The function accepts a`colour` as a single param. `colour` will be always a string:

// - if colour is read, return `Stop`
//     - if colour is green, return `Go`
//         - if colour is yellow, return `Prepare to go`
//             - if colour isn't red, green or yellow return `Unknown color`.


function checkColor(color) {
    if (color === 'red') {
        return 'stop'
    }
    if (color === 'green') {
        return 'go'
    }
    if (color === 'yellow') {
        return 'prier to go'
    }

    return null;
}

const colors = {
    red: 'stop',
    green: 'go',
    // trailing comma
    yellow: 'prier to go',
}

// Computed object key
function checkColor(color) {
    return colors[color] || null;
}




function countLettersInWord() { }

let letterCount = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        letterCount += 1 // letterCount = letterCount +1
    }
}
countLettersInWord()
