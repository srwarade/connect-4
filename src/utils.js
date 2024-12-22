const checkVertically = (gameBoard, rowIndex, colIndex, playerTurn) => {
  let count = 1,
    i = rowIndex - 1,
    j = rowIndex + 1;
  while (i >= 0 && gameBoard[i][colIndex] === playerTurn) {
    count++;
    i--;
  }
  while (j < 6 && gameBoard[j][colIndex] === playerTurn) {
    count++;
    j++;
  }
  return count >= 4;
};

const checkHorizontally = (gameBoard, rowIndex, colIndex, playerTurn) => {
  let count = 1,
    i = colIndex - 1,
    j = colIndex + 1;
  while (i >= 0 && gameBoard[rowIndex][i] === playerTurn) {
    count++;
    i--;
  }
  while (j < 7 && gameBoard[rowIndex][j] === playerTurn) {
    count++;
    j++;
  }
  return count >= 4;
};

export const checkIfAnyWinner = (gameBoard, rowIndex, colIndex, playerTurn) => {
  return (
    checkHorizontally(gameBoard, rowIndex, colIndex, playerTurn) ||
    checkVertically(gameBoard, rowIndex, colIndex, playerTurn)
  );
};
