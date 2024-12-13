function uppercaseLettersCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        if (letter !== " " && letter !== "." && letter.toUpperCase() === letter) {
            count += 1;
        }
    }
    return count;
}
console.log(uppercaseLettersCount('BaN . aNA'));

