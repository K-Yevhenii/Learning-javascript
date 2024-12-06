// ** Goal ** - improve this code using `if...else` and`switch`.
const mark = Math.floor(Math.random() * 5 + 1);
const result = mark

switch (mark) {
    case 5:
        console.log('Excellent');
        break;
    case 4:
        console.log('Good');

        break;
    case 3:
        console.log('Ok');

        break;
    case 2:
        console.log('Bad. Please, try better next time');

        break;
    case 1:
        console.log('Very bad');

        break;
    default:
        console.log('Unknown mark');

}

if (mark === 5) {
    console.log('Excellent');
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
    if (mark === 1) {
        return 'red'
    }
    if (mark === 2) {
        return 'green'
    }
    if (mark === 3) {
        return 'yellow'
    }
    if (mark === 4) {
        return 'blinks red'
    }
    if (mark === 5) {
        return 'blinks gre'
    }

    return null;
}
