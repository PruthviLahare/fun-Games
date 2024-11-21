const welcome = '!!!Welcome to SEMON SAYS game 😃!!!';
const intro1 = 'Test your memory!!! \nWatch the pattern,';
const intro2 = ' repeat it, and keep up as the sequence grows.';
const ques = '\nHow far can you go?\n';
const instruct = 'So these are colors and its code\n';
const allColor = 'color      : 🟦 🟧 🟥 🟨 🟩 🟪 ⬜️\n';
const allColorCode = 'color code : b  o  r  y  g  p  w\n';

function getALine(length) {
  let line = '';
  for (let iterator = 0; iterator < length; iterator += 1) {
    line += '━';
  }

  return line;
}

function createMessageBox(message) {
  const box = '┏' + getALine(message.length) + '┓\n┃' + message + '┃\n┗';
  return box + getALine(message.length) + '┛\n';
}

function welcomeMsg() {
  console.log(createMessageBox(welcome));
}

function instruction() {
  console.log(intro1 + intro2 + ques);
  console.log(instruct + allColor + allColorCode);
}

function generateRandomColor() {
  return Math.ceil(Math.random() * 7);
}

function printColor(colorCode) {
  switch (colorCode) {
    case 1: return '🟦';
    case 2: return '🟧';
    case 3: return '🟨';
    case 4: return '🟩';
    case 5: return '🟪';
    case 6: return '⬜️';
    case 7: return '🟥';
  }
}

function getColorCode(colorCode) {
  switch (colorCode) {
    case 1: return 'b';
    case 2: return 'o';
    case 3: return 'y';
    case 4: return 'g';
    case 5: return 'p';
    case 6: return 'w';
    case 7: return 'r';
  }
}

function userTurn(params) {
  return prompt("👉Now, it's your turn! Remember & Repeat the sequence !!");
}

function getScore(computerColorCode, userChoice) {

  const colorCode = generateRandomColor();

  console.clear();
  instruction();

  console.log("Semon Says : " + printColor(colorCode));

  computerColorCode += getColorCode(colorCode);
  userChoice = userTurn();
  if (computerColorCode !== userChoice) {
    console.log("ohh No😮 ! The correct string was : " + computerColorCode);
    return 0;
  }

  return 1 + getScore(computerColorCode, userChoice);
}

function getMSG(score) {
  if (score > 15) {
    return "Hats off🫡 🙌";
  }
  if (score > 10 && score <= 15) {
    return "Your memory is really sharp👏🙌";
  }
  if (score <= 10 && score > 4) {
    return "Well Played🤩";
  }

  return score === 0 ? "Bad Luck 😕!!! Better Luck Next Time" : "You can still do better🙂🙃";
}

function startGame() {
  welcomeMsg();
  prompt("Let's start!!! press enter...");

  const name = prompt("Enter Your Name : ");
  const score = getScore('', '');
  console.log('\n' + name + " your score is " + (score));
  console.log(getMSG(score) + '\n');
}

startGame();
