
function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
    const words = message.split(" ");
    const wordsCount = words.length;
    const sum = wordsCount * pricePerWord;
    return sum;
    // Change code above this line
}
calculateEngravingPrice("JavaScript is in my blood", 10)