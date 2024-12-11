function countWhile() {
  let count = 10;
  while (count) {
    console.log('123');
    count = count - 1;
  }
}

function countFor() {
  for (let count = 10; count < 10; count = count - 1) {
    console.log(count);
  }
}
function forArr() {
  const arr = ['a', 'b', 'c'];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
forArr()