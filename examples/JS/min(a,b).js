// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
function min(a, b) {
    let result;
    if (a > b) {
        result = a;
    }
    else if (a < b) {
        result = b;
    } else {
        result = a;
    }
    return result

}

