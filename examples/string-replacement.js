const str = 'QWERTY';

function replaceSymbol(symbol, replacement, str) {
  const index = str.indexOf(symbol);

  return str.slice(0, index) + replacement + str.slice(index + 1);
}

const result = replaceSymbol('E', 'X', str); // -> 'QWXRTY';
