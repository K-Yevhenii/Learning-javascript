const styles = ['jazz', 'blues'];
styles.push('Rock-n-roll');
const index = styles.length % 2 === 0 ? styles.length / 2 : (styles.length - 1) / 2;
styles.splice(index, 1, 'Classic')
const element = styles.shift();
styles.unshift('Rap', 'Reggie')
console.log(element);
console.log(index);
console.log(styles);


