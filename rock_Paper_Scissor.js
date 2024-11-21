const welcome = '!!!Welcome to ROCK PAPER SCISSOR game 😃!!!';
const intro = 'Enter :\n1 - Paper\n2 - Scissor\n3 - Rock';

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
  console.log(intro);
}

function userTurn() {
  return prompt("What would you like to choose ?");
}

function computerTurn() {
  return Math.ceil(Math.random() * 3);
}

function whoWins(user, computer) {
  if (user === computer) {
    return "It's a Tie 🙃";
  }

  if (user === 2 && computer === 1 || user === 3 && computer === 2 || user === 1 && computer === 3) {
    return "Congrats!! You Won🏆";
  }

  return "Ohh!You Lost..";
}

function startGame() {
  welcomeMsg(welcome);
  instruction();
  const userChoice = userTurn();
  const computerChoice = computerTurn();
  console.log(computerChoice);

  console.log(whoWins(userChoice, computerChoice));

}

startGame();
