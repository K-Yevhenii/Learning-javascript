DEFAULT_VALUE = 2;

function double(x = DEFAULT_VALUE) {
  return x * 2;
}

function double(x) {
  return (x || DEFAULT_VALUE) * 2;
}
