
Number.parseInt()
//парсит з рядка ціле число

console.log(Number.parseInt('5px'));        // 5
console.log(Number.parseInt('12ewer74'))    // 12
console.log(Number.parseInt('12.46ewer79')) // 12
console.log(Number.parseInt('ewer'))        // NaN

//парсит з рядка дробове число
Number.parseFloat()

console.log(Number.parseFloat('5x'));       // 5
console.log(Number.parseFloat('12ewer'))     // 12
console.log(Number.parseFloat('12.46ewer'))  // 12.46
console.log(Number.parseFloat('ewer'))       // NaN

//Властивість
length // Можна дізнатися довжину рядка, тобто кількість символів у рядку
length // Числова властивість а не функція

const message = 'Welcome to Bahamas'

console.log(message.length); //19
console.log('There is nothing impossible to him who will try'.length); // 47
//Методи
toLowerCase()
toUpperCase()

//Повертають новий рядок у відповідному регістрі, не змінюючи оригінал рядка
const message2 = 'Welcome to Bahamas!'

console.log(message2.toLowerCase); // "welcome to bahamas!"
console.log(message2.toUpperCase); // "WELCOME TO BAHAMAS!"

// нормалізація рядка у відповідний регістр не змінюючи оригінала рядка
const BRAND_NAME = 'SAMSUNG'
const userInput = 'saMsUng'
const normalizedToupperCaseInput = userInput.toUpperCase();

console.log(userInput); //SaMsUng
console.log(userInput === BRAND_NAME);                   // false
console.log(normalizedToupperCaseInput);                 // 'SAMSUNG'
console.log(normalizedToupperCaseInput === BRAND_NAME);  // true

//Метод
indexOF()// Повертає позицію (індекс), на якій знаходиться збіг рядка
// або -1, якщо нічого не знайдено.
const message3 = 'Welcome to Bahamas!';

console.log(message3.indexOf('to')); // 8
console.log(message3.indexOf('hello')); // -1  (не знайдено 'hello' в тексті)

//Метод
includes()
//Перевіряє чи міститься підрядок в рядку, повертає буль
true // якщо міститься
false // в іншому випадку 
//Регістр символів має значення 'a' не дорівнює 'A'
'a' !== 'A'

const productName = 'Ремонтний дроїд';

console.log(productName.includes('н'));          // tru
console.log(productName.includes('H'))           // false
console.log(productName.includes('дроїд'));      // tru
console.log(productName.includes('Дроїд'));      // false 
console.log(productName.includes('Ремонтній'));  // true  
console.log(productName.includes('ремонтний'));  // false

//Метод
endSWith()
//Дозволяє визначити, чи завершується рядок символами (підрядком),
//значення в дужках перетворює 
true
//або 
false

const jsFileName = 'script.js'
console.log(jsFileName.endsWith('.js')); // true

const cssFilename = 'style.css';
console.log(cssFilename.endsWith); // false


//Методи 
replace()
replaceAll()
//Повертає новий рядок, в якому перше 
replace
// або усі збіги
replaceAll // підрядка замінені на вказане значення. 

const jsFileName2 = 'script.js';
const minifiedCssNames = jsFileName2.replace('.js', '.min.js');

console.log(minifiedCssNames); // 'script.min.js'

const cssFilename2 = 'styles.css, about.css, portfolio.css'
const minifiedCssNames2 = cssFilenames.replaceAll('.css', 'min.css');

console.log(minifiedCssNames2); // 'styles.min.css, about.min.css, portfolio.min.css

//Метод
slice()
// Метод рядків
slice(startIndex, endIndex) // використовуються для створення  копії частини 
// або всього рядка. Він робить копію елементів рядка від
startIndex // i до, але не включно 
endIndex// і повертає новий рядок, не змінюючи оригінал.

const productName2 = 'Repair droid';

console.log(productName2.slice(0, 4)); // 'Repa'
console.log(productName2.slice(3, 9));        //  'air dr'
console.log(productName2.slice(0, productName2.length)); // 'Repair droid'
console.log(productName2.slice(7, productName.length)); // 'droid'
// останній символ не вкл

