// Option 1
function sumArguments(...args) {
  console.log(args);
}

function sumArguments() {
  console.log(arguments);
}

sumArguments(1, 2);
sumArguments(1, 2, 3);
sumArguments(1, 2, 3, 4, 5); // 15
