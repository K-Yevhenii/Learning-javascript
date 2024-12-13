// ## Multi - match

//     ** Goal ** - rewrite this code to`if...else`

//         ```js
// const color = prompt("Enter your color");

// switch (color) {
//   case "red":
//   case "orange":
//   case "yellow":
//     console.log("Warm color");
//     break;
//   case "blue":
//   case "violet":
//     console.log("Cold color");
//     break;
// }
// ```

// const color = prompt("Enter your color");
const color = 'red'
if (color === 'red' || color === 'orange' || color === 'yellow') {
    console.log("Warm color");
} else if (color === 'blue' || color === 'violet') {
    console.log("Cold color");
} else {
    console.log('Choose a different color');

}

