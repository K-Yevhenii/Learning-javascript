// const mark = Math.floor(Math.random() * 5 + 1); // Don't pay attention; in this variable random integer between 1 and 5
// const result =
//     mark === 5
//         ? 'Excellent'
//         : mark === 4
//             ? 'Good'
//             : mark === 3
//                 ? 'Ok'
//                 : mark === 2
//                     ? 'Bad. Please, try better next time'
//                     : mark === 1
//                         ? 'Very bad'
//                         : 'Unknown mark';


function ifN() {
    const n = 10
    const mark = Math.floor(Math.random() * (n + 1))
    if (mark === 5) {
        console.log('Excellent');

    } else if (mark === 4) {
        console.log('Good');

    } else if (mark === 3) {
        console.log(OK);

    } else if (mark === 2) {
        console.log('Bad. Please, try better next time');

    } else if (mark === 1) {
        console.log('Very bad');

    } else {
        console.log('Unknown mark');

    }
}



function switchN() {
    const n = 5
    const mark = Math.floor(Math.random() * (n + 1))
    switch (mark) {
        case 5:
            console.log('Excellent');
            break;

        case 4:
            console.log('GOOD');
            break;

        case 3:
            console.log('Ok');
            break;

        case 2:
            console.log('Bad.Please, try better next time');
            break;

        case 1:
            console.log('Very bad');
            break;

        default:
            console.log('Unknown mark');
            break;
    }
}

// ### Traffic light

//     ** Goal ** - write a function that performs state of traffic light.
//It should return a string that tells driver what to do.The function accepts a`color` 
//as a single param. `
//color` will be always a string:

// - if color is read, return `Stop`
//     - if color is green, return `Go`
//         - if color is yellow, return `Prepare to go`
//             - if color isn't red, green or yellow return `Unknown color`.

//                 ** Important **: write 2 variants of check in function 
//- with `switch` and with `if...else`.

function trafficLight() {
    const light = 3;
    const read = 'Stop';
    const green = 'Go';
    const yellow = 'Prepare to go';

    if (light === 1) {
        return read

    } else if (light === 2) {
        return green

    } else if (light === 3) {
        return yellow

    } else {

    }
}
// console.log(trafficLight());

function traffic() {
    const light = 3;
    const read = 'Stop';
    const green = 'Go';
    const yellow = 'Prepare to go';
    switch (light) {
        case 1:
            return read
            break;
        case 2:
            return green
        case 3:
            return yellow

        default:
            break;
    }
}
//  

function tempColor() {
    const color = "red";
    const red = "Warm color";
    const orange = "Warm color";
    const yellow = "Warm color";
    const blue = "Cold color";
    const violet = "Cold color";

    if (color === 'red' || color === 'yellow' || color === 'orange') {
        return "Warm color";
    }

    if (color == red) {
        return red

    } else if (color == orange) {
        return orange

    } else if (color == yellow) {
        return yellow

    } else if (color == blue) {
        return blue

    } else if (color == violet) {
        return violet

    } else {
        throw new Error(`Unknown color found ${color}`);
    }
}

tempColor()

function tempColorMass() {
    // const color = prompt("Enter your color");
    const color = 'blue'
    const warmColor = ['red', 'orange', 'yellow']
    const coldColor = ['blue', 'violet']
    if (warmColor.includes(color)) {
        // alert('Warm color')
        console.log('Warm color');

    } else if (coldColor.includes(color)) {
        // alert('Cold color')
        console.log('Cold color');

    } else {
        throw new Error(`Unknown color found ${color}`);
    }
}
// tempColorMass()