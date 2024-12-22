import Timer from "./Timer";

const GameHeader = ({ resetBoard }) => {
  return (
    <header className="header">
      <label className="title">Connect 4</label>
      <Timer />
      <button className="reset-btn" onClick={resetBoard}>
        Reset
      </button>
    </header>
  );
};

export default GameHeader;
