const arr = [1, 2, 3, 4];

function logger(element) {
  console.log(element);
}

arr.forEach(logger);

// Under the hood performs logger(arr[i]) - result in these calls:
// logger(arr[0])
// logger(arr[1])
// logger(arr[2])
// logger(arr[3])
