
function fibonacci(position) {

    if (position === 1) {
        return 0;
    }
    if (position === 2) {
        return 1;
    }
    if (position <= 0 || typeof position !== 'number') {
        throw new Error('Should be a positive integer')
    }

    let current = 1;
    let previous = 0;
    let sum = 1;

    for (let i = 3; i < position; i++) {
        previous = current;
        current = sum;
        sum = current + previous;

    }
    return sum;

}
console.log(fibonacci(3));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144