// Write logic that converts temperature in Celsius to Fahrenheit.For it value should
// be multipled by 100, divided by 18 and added 32.
// Create logic that performs opposite conversion.
//     Important: should handle a situation when a temperature is 0.

// 0C -> 32F
// 100C -> 212F
// 10F -> -12.22222C
const celsius = 0;

function conversionFahrenheit() {
    fahrenheit = (celsius * 100 / 18) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}


function conversionFahrenheit2(celsius) {
    fahrenheit2 = (celsius * 9 / 5) + 32;
    console.log(fahrenheit2);
    return fahrenheit2;
}
conversionFahrenheit();
conversionFahrenheit2(200);

function convertCelsiusToFahrengeit(fahrenheit) {
    const celsius = (fahrenheit - 32) / 9 * 5;
    console.log(celsius);
    return celsius;

}
convertCelsiusToFahrengeit(180)

// If text has more than 30 symbols replace all content after 30th symbol
// by ellipis('...').If text has smaller length leave it as it's.

// const longText =
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     Praesentium beatae explicabo accusantium tenetur nesciunt, qui aperiam,
//     id aliquam quas sunt odit nemo, facilis ipsam dolore.Atque dicta recusandae
//      repudiandae deserunt ? '; // Expected 'Lorem ipsum dolor sit amet con...'

// const shortText = 'Hello world'; // Should remain unchanged

const MAX_LENGTH = 29;
function truncateString(str) {
    if (str.length > MAX_LENGTH) {
        return str.slice(0, MAX_LENGTH) + "...";
    } else {
        return str;
    }
}

const text = "";

console.log(truncateString(text));


// Create a logic that tries to find a match between provided input and saved registration plate.
// const SEARCH_TERM = 'gh1234';
// // All three should match
// const firstMatchingPlate = 'GH1234';
// const secondMatchingPlate = 'GH 1234';
// const thirdMatchingPlate = 'gh 1 2 3 4';

// // Shouldn't match
// const notMatchingPlate = 'po9876';

function searchPlates(search, searchPlate) {
    const normalizedSearch = search.toLowerCase().replaceAll(" ", "");
    const normalizedSearchPlate = searchPlate.toLowerCase();
    if (normalizedSearch === normalizedSearchPlate) {
        console.log("Match:", searchPlate);
    } else {
        console.log("Mismatch");
    }
}

let searchPlate = 'GH1234';
let entrancePlate = 'G  H1 234';

searchPlates(entrancePlate, searchPlate);
// normalizedSearch === normalizedSearchPlate ? console.log("Match:", searchPlate) : console.log("Mismatch");## Capitalize sentence

// Write logic that converts the first letter to uppercase and all other letters to lowercase.
// const str = 'lorem Ipsum Dolorem Sit Amet'; // Should be converted to 'Lorem ipsum dolorem sit amet'

const str = 'lorem Ipsum Dolorem Sit Amet';
function convertsFirstLetter(sentence) {
    const normalizedLetter = sentence.toLowerCase();
    const firstLatter = normalizedLetter.slice(0, 1).toUpperCase();
    const normalizeText = firstLatter + normalizedLetter.slice(1);
    console.log(normalizeText);

}
convertsFirstLetter(str)