let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    const result = []
    for (item of arr) {
        if (a >= item && item <= b) {
            result.push(item)
        }
    }
    return result;
}
console.log(filterRange(arr, 3, 2));
