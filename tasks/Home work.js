
let str = 'вася'

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
}

// let result = ucFirst(str);
// console.log(result);

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

let message = ''

function checkSpam(message) {
    // if (!message)
    //     return message;
    message = message.toLowerCase();
    let result = message.includes('ViAgRA') || message.includes('ree xxxxx');

    if (result) {
        console.log('spam');

        // } else if (result == !message) {


        //     console.log("incorrect message");

    } else {


        console.log('innocent rabbit');

    }
    return result;
    console.log(result);

}
// checkSpam(message)
// ucFirst();
// checkSpam()

let strMes = ('Вот, что мне хотелось бы сказать на эту тему')
function truncate(strMes) {

    if (strMes.length > 16) {
        strMes = strMes.slice(0, 17) + '...'
        console.log(strMes.length);
    } else {

        console.log(strMes);
    }

    return strMes


}
truncate(strMes)

let str2 = 'Вот, что мне хотелось бы сказать на эту тему:';

function truncate2(str2, maxlength) {
    return (str2.length > maxlength) ?
        str2.slice(0, maxlength - 1) + '…' : str2;
}

let maxlength = 20;
let result = truncate2(str2, maxlength);
console.log(result);

truncate2(str2, maxlength)

let currency = '$120'
function extractCurrencyValue(currency) {
    if (!currency) return currency

    currency = currency.slice(1)
    console.log(currency);

    let values = Number(currency)
    console.log(values);

}
extractCurrencyValue(currency)


function sumNumber() {
    let userNumber = Number(prompt('enter number one'));
    let userNumber2 = Number(prompt('enter number second'));
    let sumNumberUs = userNumber + userNumber2;
    let promptSum = `the sum of your numbers'${sumNumberUs}`;
    console.log(promptSum);
    prompt(promptSum);

}
sumNumber()