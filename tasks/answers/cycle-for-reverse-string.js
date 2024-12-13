
// ### Reverse string

//     ** Goal ** - write a function reads value passed by user and reverses string.If user doesn't enter anything return a message `Please, provide your message`. Don't use built -in `.reverse` method, use`for` instead.
// For example, `asdfqwer` should return `rewqfdsa`.



let str = "asdfqwer"
// let result = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
// }
let result = "";
for (let index = 0; index < str.length; index++) {
    result = str[index] + result;

}
console.log(result);