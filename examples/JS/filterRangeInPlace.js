let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 2, 5);

function filterRangeInPlace(arr, a, b) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (a <= item && item <= b) {
            result.push(item)
        }

    }
    arr = result;
    // alert(result)
}
console.log(arr);
console.log(arr.constructor.name);
Array.isArray(arr)