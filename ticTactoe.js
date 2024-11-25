const winningChance1 = '123';
const winningChance2 = '456';
const winningChance3 = '789';
const winningChance4 = '147';
const winningChance5 = '258';
const winningChance6 = '369';
const winningChance7 = '159';
const winningChance8 = '357';


function getNextChar(currentCharacter, match, replacement) {
  return currentCharacter === match ? replacement : currentCharacter;
}

function replace(text, match, replacement) {
  let replaceText = '';

  for (let index = 0; index < text.length; index++) {
    replaceText += getNextChar(text[index], match, replacement);
  }

  return replaceText;
}

// function isPositionMatched(boardPos, PlayedPosition) {
//   let currentPosition = '';
//   for (let index = 0; index < PlayedPosition.length; index++) {
//     currentPosition = PlayedPosition[index];
//     if (+currentPosition === boardPos) {
//       return true;
//     }
//   }

//   return false;
// }

function board(choice, symbol) {
  const horizontal = '---------------';
  let board = '';

  for (let index = 1; index <= 9; index++) {
    board +=   '| ' + choice[index - 1] + ' |';

    if (index % 3 === 0) {
      board += '\n' + horizontal + '\n';
    }
  }
  console.log(board);
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

function didPlayerWin(str) {
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

function startGame() {
  let XChoice = '';
  let YChoice = '';
  let winner = 'tie';
  let totalChance = 1;

  board('', '');

  while (totalChance < 10) {
    XChoice += XTurn();
    console.clear();
    board(XChoice, '🅧');

    if (didPlayerWin(XChoice)) {
      winner = 'X';
      break;
    }

    YChoice += YTurn();
    console.clear();
    board(YChoice, '0️⃣');

    if (didPlayerWin(YChoice)) {
      winner = 'Y';
      break;
    }

    totalChance += 2;
  }
  console.log("Winner is : " + winner);
}

// startGame();
let boardPlaceValue = '         ';

board(boardPlaceValue);
