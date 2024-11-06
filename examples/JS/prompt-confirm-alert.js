// alert();- виводить значення
//confirm();
// prompt(); виводить та приймає значення
function testPrompt() {
  let answer = prompt('Do you see this message?');
  console.log(answer);
  let typeOfMessage = typeof answer; //не бере значення в дужки typeof (sMessage);
  console.log(typeOfMessage);
}
function testConfirm() {
  let isHes = confirm('Are you there?');
  console.log(isHes);
}
function taskAlert() {
  let tAlert = alert('');
  console.log(tAlert);
  let typeAlert = typeof tAlert;
  console.log();
}
function taskNumber() {
  // Convert string to number
  let number30plus = Number(prompt('enter number 30+')); // or +prompt("enter number 30+")
  console.log(number30plus);
  let typeoFnumber = typeof number30plus;
  console.log(typeoFnumber);
}
function taskPrompt() {
  let alertPush = alert('press to push further');
  let promptQuestion = prompt('What is your question?');
  console.log(promptQuestion);
  let promptQuestion2 = prompt('Are you human?');
  console.log(promptQuestion2);
}
function testOperator() {
  let sum1 = 0.1 + 0.4;
  console.log(sum1);
  let sum2 = 0.1 + 0.2;
  console.log(sum2.toFixed(1));
}

// testOperator();
// taskPrompt();
// taskNumber();
// taskAlert();
// testConfirm();
// testPrompt();
