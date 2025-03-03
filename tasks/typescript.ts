export const sum = (...args) => args.reduce((acc, el) => acc + el, 0);

const colors = {
  red: 'stop',
  green: 'go',
  // trailing comma
  yellow: 'prier to go',
};

function checkColor(color) {
  return colors[color] || null;
}
