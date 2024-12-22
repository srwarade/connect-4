import { useState } from "react";
import GameBoard from "./GameBoard";
import GameHeader from "./GameHeader";

const initialBoard = new Array(6).fill(0).map(() => new Array(7).fill(0));

const Game = () => {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameBoard, setGameBoard] = useState(initialBoard);
  const [winner, setWinner] = useState(null);

  const resetBoard = () => {
    const defaultBoard = new Array(6).fill(0).map(() => new Array(7).fill(0));
    setGameBoard(defaultBoard);
    setPlayerTurn(1);
    setWinner(null);
  };

  return (
    <section className="game">
      <GameHeader resetBoard={resetBoard} />
      <GameBoard
        gameBoard={gameBoard}
        setGameBoard={setGameBoard}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        setWinner={setWinner}
      />
      <div className="player-turn">Player {playerTurn} turn</div>
      {winner !== null && (
        <div className="winner">
          <div className="winner-name">Player {winner} Win</div>
          <button className="reset-btn" onClick={resetBoard}>
            Reset
          </button>
        </div>
      )}
    </section>
  );
};

export default Game;
