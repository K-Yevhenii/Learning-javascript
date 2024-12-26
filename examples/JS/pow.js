
// function exponentiation(x, n) {
//     result = Math.pow(x, n);
// }

function exponentiation(x, n) {
    let result = 1;
    const limit = n > 0 ? n : n * -1;

    for (let i = 0; i < limit; i++) {
        result *= x;

    }
    if (n < 0) {
        return 1 / result;
    }
    if (n === 0) {
        if (x === 0) {
            throw new Error('Cannot exponent 0 to 0')
        }
        return 1;
    }
    return result;
}
console.log(exponentiation(0, 0));

