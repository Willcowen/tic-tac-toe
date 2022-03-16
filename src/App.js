import { useState, useEffect } from "react";
import "./App.css";
import Square from "./components/square";
import Board from "./components/board";
import winningCombinations from "./components/winning-combinations";

const App = () => {
  console.log("rendering app...");
  const emptyboard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(emptyboard);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [maxTurns, setMaxTurns] = useState(0);
  const [gameMode, setGameMode] = useState(null);
  const [computerTurn, setComputerTurn] = useState(null);
  const [isGameWon, setIsGameWon] = useState(false)

  const chooseSquare = (squareNumber) => {
    setMaxTurns(maxTurns + 1);
    const boardCopy = board.map((value, index) => {
      if (index === squareNumber) {
        return turn;
      }
      return value;
    });
    setBoard(boardCopy);
    if (turn === "X" && gameMode === "solo") {
      setTurn("O");
    } else if (gameMode === "vs computer" && setIsGameWon(false)) {
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
    if(computerTurn === true) {
    computer();
    }
  }, [computerTurn]);

  const computer = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const newArray = board.map(function (element, index) {
      if (element === "") {
        return index;
      } else {
        return -1;
      }
    });

    console.log(newArray);

    const filteredArray = newArray.filter((element) => element >= 0);

    let randomNumber = getRandomInt(filteredArray.length - 1);

    const cpuMoveIndex = filteredArray[randomNumber];
    const boardCopy = [...board];
    boardCopy[cpuMoveIndex] = "O";

    setBoard(boardCopy);
  };

  const checkWinnerX = () => {
    for (let i = 0; i < winningCombinations.winningX.length; i++) {
      let count = 0;
      const space = winningCombinations.winningX[i];
      for (let j = 0; j < space.length; j++) {
        if (space[j] === "") {
          continue;
        }
        if (space[j] === board[j]) {
          count++;
          if (count === 3) {
            setWinner("X");
            setIsGameWon(true)
          }
        }
      }
    }
  };

  const checkWinnerO = () => {
    for (let i = 0; i < winningCombinations.winningO.length; i++) {
      let count = 0;
      const space = winningCombinations.winningO[i];
      for (let j = 0; j < space.length; j++) {
        if (space[j] === "") {
          continue;
        }
        if (space[j] === board[j]) {
          count++;
          if (count === 3) {
            setWinner("O");
            setIsGameWon(true)
          }
        }
      }
    }
  };

  const reset = () => {
    setBoard(emptyboard);
    setMaxTurns(0);
    setWinner("");
    setGameMode(null);
    setTurn("X");
    setIsGameWon(false);
    setComputerTurn(false)
  };

  console.log(board);

  return (
    <div className="App">
      {gameMode !== null && <h1 className="title">Tic-Tac-Toe</h1>}
      {gameMode === null && <h1 className="title">CHOOSE GAME MODE</h1>}
      {gameMode === null && (
        <div className="mode-select">
          <h3 className="button" onClick={() => setGameMode("solo")}>
            SOLO
          </h3>
          <h3 className="button" onClick={() => setGameMode("vs computer")}>
            VS. COMPUTER
          </h3>
        </div>
      )}
      {gameMode === "solo" && <h2>(PLAYING: SOLO)</h2>}
      {gameMode === "vs computer" && <h2>(PLAYING VS. COMPUTER)</h2>}
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
