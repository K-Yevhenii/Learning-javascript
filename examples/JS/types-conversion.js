console.log(77);
console.log(String(77)); //number to string
console.log('44');
console.log(Number('44')); // string to number
console.log(4 * 'String'); //= NaN
console.log((1 * '2') / '4' + 2); //= 2.5 валідне
console.log(1 + 2 + '3' + 4 + 5); //=3345 тому що після числа строка, і все інші перетворилися в строку
console.log(1 + NaN); // 1NaN
console.log(5 + 'String'); //5String
console.log('4-5'); // 4-5
console.log(8 * '4'); // =32
console.log(8 / '4'); // =2
console.log('' - 3 - 2); // = -5
console.log(NaN + 2); // NaN
console.log(NaN - NaN); // NaN
console.log(null + 2); // NaN
console.log(null - null); // 0
console.log(undefined + 2); //NaN
console.log(undefined + undefined); //NaN
console.log(undefined - undefined); //NaN
console.log('n\t' - 2); //NaN

//False "", null, undefined, NaN