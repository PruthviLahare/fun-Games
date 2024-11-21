const welcome = '!!!Welcome to ROCK PAPER SCISSOR game 😃!!!';
const intro = 'Enter :\n1 - Paper 📄\n2 - Scissor ✂️\n3 - Rock 🪨';

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
  return +prompt("What would you like to choose ?");
  // printArticle(userChoice, 'your choice');
}

function printArticle(choice, msg) {
  switch (choice) {
    case 1: return console.log(msg + ' :- 📄');
    case 2: return console.log(msg + ' :- ✂️');
    case 3: return console.log(msg + ' :- 🪨');

    default: console.log('Please Enter Valid Input !!');
      return userTurn();
  }
}

function computerTurn() {
  return Math.ceil(Math.random() * 3);
}

function whoWins(user, computer) {
  if (user === computer) {
    return "\nIt's a Tie 🙃\n";
  }

  if (user === 2 && computer === 1 || user === 3 && computer === 2 || user === 1 && computer === 3) {
    return "\nCongrats!! You Won 🏆\n";
  }

  return "\nOhh!You Lost..\n";
}


function startGame() {
  welcomeMsg(welcome);
  instruction();
  let wouldLiketiPlayAgain = true;

  while (wouldLiketiPlayAgain) {
    const userChoice = userTurn();

    const computerChoice = computerTurn();
    printArticle(computerChoice, 'computer choice');

    console.log(whoWins(userChoice, computerChoice));

    wouldLiketiPlayAgain = confirm('Would you Like to Play Again ?');
  }
}

startGame();
