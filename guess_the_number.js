function welcomeMsg(rangeStart, rangeEnd, maxAttempts) {
  console.log('***🤩Welcome to Guess the Number Game!🤩***\n');
  console.log('The secret number is between 👉' + rangeStart + ' and ' + rangeEnd);
  console.log('\nYou have👉 ' + maxAttempts + ' attempts to find it.');
}

function generateSecretNumber(rangeStart, rangeEnd) {
  const secretNumber = Math.round(Math.random() * rangeEnd);

  if (secretNumber > rangeStart) {
    return secretNumber;
  }

  return generateSecretNumber(rangeStart, rangeEnd);
}

function isNumber(userChoice) {
  return '' + userChoice === 'NaN';
}

function userTurn(remainingAttempts, rangeStart, rangeEnd, secretNumber) {
  if (remainingAttempts < 1) {
    return "Oh no! You've used all your attempts. Better luck next time🙂!";
  }

  const userChoice = +prompt('Take a guess🤔! (Remaining attempts: ' + remainingAttempts + ') -');

  if (isNumber(userChoice)) {
    console.log("Invalid input! Please enter a number.🫡😬");
    return userTurn(remainingAttempts, rangeStart, rangeEnd, secretNumber);
  }

  return getValidityMsg(userChoice, rangeStart, rangeEnd, secretNumber, remainingAttempts);
}

function getValidityMsg(userChoice, rangeStart, rangeEnd, secretNumber, remainingAttempts) {
  if (userChoice === secretNumber) {
    return "🥳🤩Bravo! You've nailed it. The number was " + secretNumber + "!";
  }

  const avg = (rangeStart + rangeEnd) / 2;

  if (userChoice < avg) {
    console.log(userChoice + " ⬇️ Too low! Try a higher number.");
  }

  if (userChoice > avg) {
    console.log(userChoice + "⬆️ Too high! Try a smaller number.");
  }

  return userTurn(remainingAttempts - 1, rangeStart, rangeEnd, secretNumber);
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  const secretNumber = generateSecretNumber(rangeStart, rangeEnd);
  // console.log(secretNumber);

  welcomeMsg(rangeStart, rangeEnd, maxAttempts);

  console.log(userTurn(maxAttempts, rangeStart, rangeEnd, secretNumber));
}

startGame(1000, 2000, 6);
