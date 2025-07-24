// Example 1
function double(a) {
    return a * 2;
}

// Example 2
function double() {
    a = a * 2;
    return a;
}

// Example 3
const obj = {
    a: 5,
};

function double(obj) {
    obj.a *= 2;

    return obj;
}

// Example 4
const obj = {
    a: 5,
};

function double(obj) {
    const result = { ...obj, a: obj.a * 2 };

    return result;
}
