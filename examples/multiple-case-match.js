const color = 'green';

switch (color) {
    case "red":
    case "orange":
    case "yellow":
        console.log("Warm color");
        break;
    case "blue":
    case "violet":
        console.log("Cold color");
        break;
    default:
        // 'Unknown color found' + color
        throw new Error(`Unknown color found ${color}`);
}

console.log(color);