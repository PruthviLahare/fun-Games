function getNextChar(currentIndex, match, currentCharacter, replacement) {
  return currentIndex === match ? replacement : currentCharacter;
}

function replace(text, matchIndex, replacement) {
  let replacedText = '';

  for (let index = 0; index <= text.length; index++) {
    replacedText += getNextChar(index, matchIndex, text[index], replacement);
  }

  return replacedText;
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
        // break;
      }
      // if (setIndex === set.length - 1) {
      //   return false;
      // }
    }
  }
  // return true;
  return noOfElementMatched === 3;
}

function didPlayerWin(str) {
  if (str.length === 0) {
    return false;
  }
  if (isSubset('123', str) || isSubset('456', str) || isSubset('789', str)) {
    return true;
  }
  if (isSubset('147', str) || isSubset('258', str) || isSubset('369', str)) {
    return true;
  }
  if (isSubset('159', str) || isSubset('357', str)) {
    return true;
  }

  return false;
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

function getPlayerMove(symbol) {
  return prompt(symbol + ' :-');
}

function getPlayerChoice(whoseTurn) {
  const playerSymbol = isDivisible(whoseTurn, 2) ? "X" : "Y";
  return getPlayerMove(playerSymbol)
}

// getBoard(player1Moves, player2Moves);

function getBoard(placeValue, currentChoice, whoseTurn) {
  const newPlaceValue = getNewBoard(placeValue, currentChoice, whoseTurn);
  console.log(board(newPlaceValue));
  return newPlaceValue;
}


function getResult(player1Moves, player2Moves) {
  const string = 'Winner is : ';

  if (didPlayerWin(player1Moves)) {
    return string + 'player 1';
  }
  if (didPlayerWin(player2Moves)) {
    return string + 'player 2';
  }

  return "It's a tie";
}

function isInputValid(choice, placeValue) {
  return isSubset(choice, placeValue);
}

function isGameInPlay(player1Moves, player2Moves) {
  const movesOver = player1Moves.length + player2Moves.length;

  return movesOver < 9 && !(didPlayerWin(player1Moves) || didPlayerWin(player2Moves));
}

function startGame() {
  let player1Moves = '';
  let player2Moves = '';
  let placeValue = '123456789';
  let nextTurn = 0;

  console.log(board(placeValue));

  while (isGameInPlay(player1Moves, player2Moves)) {
    const choice = getPlayerChoice(nextTurn);

    // if (!isInputValid(choice, placeValue)) {
    //   console.log("Please Enter Valid Input");
    //   continue;
    // }
    if (isDivisible(nextTurn, 2)) {
      player1Moves += choice;
    } else {
      player2Moves += choice;
    }

    console.clear();

    placeValue = getBoard(placeValue, choice, nextTurn);
    nextTurn += 1;
  }

  console.log(getResult(player1Moves, player2Moves));
}

startGame();
