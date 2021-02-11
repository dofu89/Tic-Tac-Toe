import React, { useState, useEffect } from 'react'
import Squares from './Squares'

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [playerX, setPlayerX] = useState(true)
  const [count, setCount] = useState(0)

  const handleClick = (index) => {
    const squares = [...board]
    if (squares[index] || hwoIsTheWinner(board)) return

    squares[index] = playerX ? 'X' : 'O'
    setBoard(squares)
    setPlayerX(!playerX)
    setCount(count + 1)
  }
  const hwoIsTheWinner = (boardArray) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i]
      if (
        boardArray[a] &&
        boardArray[a] === boardArray[b] &&
        boardArray[b] === boardArray[c]
      ) {
        const winLine = winningLines[i]
        return boardArray[a]
      }
    }
    return
  }

  const renderBoard = (index) => {
    return <Squares value={board[index]} onClick={() => handleClick(index)} />
  }
  const winner = hwoIsTheWinner(board)
  const draw = board.every((val) => val != null)
  console.log(winner)

  let status

  if (winner) {
    status = `Winner is ${winner}`
  } else if (count === 9 && winner) {
    status = `Winner is ${winner}`
  } else if (draw && count === 9) {
    status = 'Draw'
  } else {
    status = `Next turn: ${playerX ? 'X' : 'O'}`
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="game">
        <div className="board">
          {renderBoard(0)}
          {renderBoard(1)}
          {renderBoard(2)}
          {renderBoard(3)}
          {renderBoard(4)}
          {renderBoard(5)}
          {renderBoard(6)}
          {renderBoard(7)}
          {renderBoard(8)}
        </div>
      </div>
    </>
  )
}
