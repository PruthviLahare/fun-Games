const winningChance1 = '123'; //conditions
const winningChance2 = '456';
const winningChance3 = '789';
const winningChance4 = '147';
const winningChance5 = '258';
const winningChance6 = '369';
const winningChance7 = '159';
const winningChance8 = '357';


function getNextChar(currentIndex, match, currentCharacter, replacement) {
  return currentIndex === match ? replacement : currentCharacter;
}

function replace(text, matchIndex, replacement) {
  let replaceText = '';

  for (let index = 0; index <= text.length; index++) {
    replaceText += getNextChar(index, matchIndex, text[index], replacement);
  }

  return replaceText;
}

function board(choice) {
  const horizontal = '---------------';
  let board = '';

  for (let index = 1; index <= 9; index++) {
    board += '| ' + choice[index - 1] + ' |';

    if (index % 3 === 0) {
      board += '\n' + horizontal + '\n';
    }
  }
  return board;
}

function isSubset(str, set) {
  let noOfElementMatched = 0;

  for (let index = 0; index < str.length; index++) {
    for (let setIndex = 0; setIndex < set.length; setIndex++) {
      if (str[index] === set[setIndex]) {
        noOfElementMatched += 1;
        break;
      }
      if (setIndex === set.length - 1) {
        return false;
      }
    }
  }
  return true;
}

function didPlayerWin(str, winner) {
  if (str.length === 0) {
    return false;
  }
  
  let win = isSubset(winningChance1, str);
  win = win || isSubset(winningChance2, str);
  win = win || isSubset(winningChance3, str);
  win = win || isSubset(winningChance4, str);
  win = win || isSubset(winningChance5, str);
  win = win || isSubset(winningChance6, str);
  win = win || isSubset(winningChance7, str);
  win = win || isSubset(winningChance8, str);

  return win;
}

function XTurn() {
  return prompt("X : ");
}

function YTurn() {
  return prompt("Y : ");
}

function getMark(Xturn) {
  return Xturn ? '*' : '@';
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function getNewBoard(boardPlaceValue, currentTurn, whoseTurn) {
  return replace(boardPlaceValue, currentTurn - 1, getMark(isDivisible(whoseTurn, 2)));
}

function getPlayerChoice(whoseTurn) {
  return isDivisible(whoseTurn, 2) ? XTurn() : YTurn();
}

function getBoard(placeValue, currentChoice, whoseTurn) {
  const newPlaceValue = getNewBoard(placeValue, currentChoice, whoseTurn); 
  console.log(board(newPlaceValue));
  return newPlaceValue;
}

function startGame() {
  let player1 = ''; 
  let player2 = ''; 
  let winner = 'tie';
  let placeValue = '123456789';
  let whoseTurn = 0;

  board(placeValue);

  for (let turn = 1; turn < 9; turn++) { 
    const choice = getPlayerChoice(whoseTurn); 

    isDivisible(whoseTurn, 2) ? player1 += choice : player2 += choice;

    console.clear();

    placeValue = getBoard(placeValue, choice, whoseTurn);
    whoseTurn += 1;

    if (didPlayerWin(player1, 'X') || didPlayerWin(player2, 'O')) {
      // winner = 'X';
      break;
    }
  }

  console.log("Winner is : " + winner);
}

startGame();
