//Додаток який задасть питання, потім виведе відповідь.
// Наприклад:
//Привіт!
//Як тебе звати? - Пишемо ім'я
//Як звати твого друга? - Пишемо ім'я
//Скільки яблок у того друга? -Пишемо кількість
//Скільки яблок у тебе?- Пишемо кількість
// Далі вивести відповідь скільки у вас всього яблок
//   let hello = alert("Hello!");
//   let answerYourName = prompt("What's your name?");
//   let answerFriendName = prompt("What's your friend's name?");
//   let answerApplesFriend = prompt("How many apples your friend has?");
//   let answerApplesYour = prompt("How many apples do you have?");
//   let toNumbApplesFriend = Number(answerApplesFriend);
//   let toNumbApplesYour = Number(answerApplesYour);
//   let sumApples = Number(answerApplesFriend) + Number(answerApplesYour);
//   console.log(sumApples);

//   let answerApplesSum = alert(
//     answerYourName +
//       " and " +
//       answerFriendName +
//       " have " +
//       sumApples +
//       " apples "
//   );

alert('Hello!');
let answerYourName2 = prompt("What's your name?");
let answerFriendName2 = prompt("What's your friend's name?");
let answerApplesFriend2 = +prompt('How many apples your friend has?');
let answerApplesYour2 = +prompt('How many apples do you have?');
let sumApples2 = answerApplesFriend2 + answerApplesYour2;
console.log(sumApples2);

let answer = `${answerYourName2} and ${answerFriendName2} have ${sumApples2} apples`;
alert(answer);
console.log(answer);