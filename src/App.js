import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/board";
import winningCombinations from "./components/winning-combinations";

const App = () => {
  console.log("rendering app...");
  const initialBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [maxTurns, setMaxTurns] = useState(0);
  const [gameMode, setGameMode] = useState(null);
  const [computerTurn, setComputerTurn] = useState(null);
  const [isGameWon, setIsGameWon] = useState(false);

  const computer = 'computer'
  const solo = 'solo'
  const chooseSquare = (squareNumber) => {
    setMaxTurns(maxTurns + 1);
    const boardCopy = board.map((value, index) => {
      if (index === squareNumber) {
        return turn;
      }
      return value;
    });
    setBoard(boardCopy);
    if (turn === "X" && gameMode === solo) {
      setTurn("O");
    } else if (gameMode === computer && isGameWon === false) {
      if (computerTurn === false) {
        setComputerTurn(true);
      } else setComputerTurn(false);
    } else {
      setTurn("X");
    }
  };

  useEffect(() => {
    checkWinnerX();
    checkWinnerO();
  }, [board]);

  useEffect(() => {
    if (computerTurn !== null && isGameWon === false) {
      setTimeout(() => {
        takeComputerTurn();
      }, 1500);
    }
  }, [computerTurn]);

  const takeComputerTurn = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const availablePositions = board.map( (element, index) => element === "" ? index : -1 ).filter( element => element >= 0)
    const filteredArray = availablePositions.filter((element) => element >= 0);
    let randomNumber = getRandomInt(filteredArray.length - 1);
    const cpuMoveIndex = filteredArray[randomNumber];
    const boardCopy = [...board];
    boardCopy[cpuMoveIndex] = "O";
    setBoard(boardCopy);
  };

  const checkWinnerX = () => {
    checkWinner("X");
  };

  const checkWinnerO = () => {
    checkWinner("O");
  };

  const checkWinner = (player) => {
    for (let i = 0; i < winningCombinations.winning.length; i++) {
      let count = 0;
      const space = winningCombinations.winning[i];
      for (let j = 0; j < space.length; j++) {
        if (space[j] === "") {
          continue;
        }
        if (board[j] === player) {
          count++;
          if (count === 3) {
            setWinner(player);
            setIsGameWon(true);
            return;
          }
        }
      }
    }
  };

  const reset = () => {
    setBoard(initialBoard);
    setMaxTurns(0);
    setWinner("");
    setGameMode(null);
    setTurn("X");
    setIsGameWon(false);
    setComputerTurn(null);
  };

  return (
    <div className="App">
      {gameMode !== null && <h1 className="title">Tic-Tac-Toe</h1>}
      {gameMode === null && <h1 className="title">CHOOSE GAME MODE</h1>}
      {gameMode === null && (
        <div className="mode-select">
          <h3 className="button" onClick={() => setGameMode(solo)}>
            SOLO
          </h3>
          <h3 className="button" onClick={() => setGameMode("computer")}>
            VS. COMPUTER
          </h3>
        </div>
      )}
      {gameMode === solo && <h2>(PLAYING: SOLO)</h2>}
      {gameMode === computer && <h2>(PLAYING VS. COMPUTER)</h2>}
      {gameMode !== null && !winner && (
        <h3 className="player-select">Current player is: {turn}</h3>
      )}
      {gameMode !== null && (
        <div>
          <Board
            chooseSquare={chooseSquare}
            board={board}
            setBoard={setBoard}
          />
          {winner && <h2>Winner is {winner}</h2>}
          {!winner && maxTurns === 9 && <h2>Max Turns Reached!</h2>}
          <h2 className="reset" onClick={() => reset()}>
            RESTART
          </h2>
        </div>
      )}
    </div>
  );
};

export default App;
