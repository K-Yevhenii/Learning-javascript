function arrayDeepEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1) !== Array.isArray(arr2)) {
            return false;
        }
        if (Array.isArray(arr1[i])
            && Array.isArray(arr2[i])) {
            const result = arrayDeepEqual(arr1[i], arr2[i])
            if (result === false) {
                return false;
            } //if(!result)
        }

        else if (arr2[i] !== arr1[i]) {
            return false;
        }

    }
    return true;


}
const arr1 = [1, 2, 3, [4, 5], [[6]]]
const arr2 = [1, 2, 3, [4, 5], [[6]]]

console.log(arrayDeepEqual(arr1, arr2));
