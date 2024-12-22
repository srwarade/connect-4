import { checkIfAnyWinner } from "./utils";

const GameBoard = ({
  gameBoard,
  setGameBoard,
  playerTurn,
  setPlayerTurn,
  setWinner,
}) => {
  const setBoardNewState = (rowIndex, colIndex, turn, nextTurn) => {
    setGameBoard((prev) => {
      let newState = [...prev];
      newState[rowIndex][colIndex] = turn;
      return newState;
    });
    setPlayerTurn(nextTurn);
  };

  const handleClick = (rowIndex, colIndex, player) => {
    if (gameBoard[rowIndex][colIndex] !== 0) return;
    let newRowIndex = rowIndex;
    while (newRowIndex < 5 && gameBoard[newRowIndex + 1][colIndex] === 0) {
      newRowIndex++;
    }

    if (player === 1) {
      setBoardNewState(newRowIndex, colIndex, 1, 2);
    } else {
      setBoardNewState(newRowIndex, colIndex, 2, 1);
    }

    const playerWon = checkIfAnyWinner(
      gameBoard,
      newRowIndex,
      colIndex,
      player
    );
    if (playerWon) {
      setWinner(player);
    }
  };

  return (
    <section className="game-board">
      {gameBoard.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell cell-${cell}`}
              onClick={() => handleClick(rowIndex, colIndex, playerTurn)}
            ></div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default GameBoard;
