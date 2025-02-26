function sum() {
  // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function (a, b) {
    return a + b;
  });
}

function mul() {
  // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function (a, b) {
    return a * b;
  });
}

function applyAll(fun, ...arg) {
  return fun(...arg);
}

function applyAllWithArguments() {
  const fn = arguments[0];

  // Option with bind
  const getArgs = [].slice.bind(arguments, 1);
  const argsWithBind = getArgs();

  // Option with .call
  const argsWithCall = [].slice.call(arguments, 1);

  // Option with .apply
  const argsWithApply = [].slice.apply(arguments, [1]);

  return fn(...argsWithBind);
}

console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24
