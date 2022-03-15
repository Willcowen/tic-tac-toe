import { useState, useEffect } from 'react';
import './App.css';
import Square from './components/square'
import winningCombinations from './components/winning-combinations'

const App = () => {
  console.log("rendering app...")
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [turn, setTurn] = useState('X')
  const [winner, setWinner] = useState('')
  const chooseSquare = (squareNumber) => {
    const boardCopy = board.map((value, index) => {
    if (index === squareNumber) {
      return turn
    }
    return value
    })
    setBoard(boardCopy)
    if (turn === 'X') {
      setTurn('O')
    }
    else {
      setTurn('X')
    }
  }

  useEffect(() => {
    checkWinnerX()
    checkWinnerO()
  }, [board])


  const checkWinnerX = () => {
    for (let i = 0; i<winningCombinations.winningX.length; i++) {
      let count = 0
      const space = winningCombinations.winningX[i]
      for (let j = 0; j < space.length; j++) {
        if (space[j] === '') {
          continue
        }
        if (space[j] === board[j]) {
          count++
          if (count === 3) {
           setWinner('X')
         }
        }
      }
    }
  }
  const checkWinnerO = () => {
    for (let i = 0; i<winningCombinations.winningO.length; i++) {
      let count = 0
      const space = winningCombinations.winningO[i]
      for (let j = 0; j < space.length; j++) {
        if (space[j] === '') {
          continue
        }
        if (space[j] === board[j]) {
          count++
          if (count === 3) {
           setWinner('O')
         }
        }
      }
    }
  }
 
  
  console.log(winner)

  
  return <div className="App">
    <h1 className="title">Will's Tic-Tac-Toe</h1>
    {!winner && <h2 className="player-select">Current player is: {turn}</h2>}
    <div className="board">
      <div className="row">
        <Square value={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
        <Square value={board[1]} chooseSquare={() => {chooseSquare(1)}}/>
        <Square value={board[2]} chooseSquare={() => {chooseSquare(2)}}/>
      </div>
      <div className="row">
      <Square value={board[3]} chooseSquare={() => {chooseSquare(3)}}/>
      <Square value={board[4]} chooseSquare={() => {chooseSquare(4)}}/>
      <Square value={board[5]} chooseSquare={() => {chooseSquare(5)}}/>
      </div>
      <div className="row">
      <Square value={board[6]} chooseSquare={() => {chooseSquare(6)}}/>
      <Square value={board[7]} chooseSquare={() => {chooseSquare(7)}}/>
      <Square value={board[8]} chooseSquare={() => {chooseSquare(8)}}/>
      </div>
    </div>
    {winner && <h2>Winner is {winner}</h2>}
  </div>
}

export default App;
