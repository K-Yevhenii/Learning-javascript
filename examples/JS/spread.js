const numbers = [1, 2, 3];

function logArguments() {
    console.log(arguments);
}

logArguments(numbers); // Arguments with [1, 2, 3]; the same as logArgument([1, 2, 3])
logArguments(...numbers); // Arguments with 1, 2, 3; the same as logArgument(1, 2, 3)
