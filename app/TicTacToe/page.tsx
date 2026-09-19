"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { useState } from "react";
//Square is called by default return function and returns back buttons
//with null values. Clicking a button passes values to square and updates the board
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
        {value}
        </button>
    );
}
export default function Board() {
        //declare array of 9 w/ null values and xIsNext as true. Use state keeps it dynamic
        const [squares, setSquares] = useState(Array(9).fill(null));
        const [xIsNext, setXISNext] = useState(true);
        //set winner to what winner function finds
        const winner = calculateWinner(squares);
        //status bar
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (xIsNext ? "X" : "O");
        }
        //if square is full or if calculateWinner is truthy, return early
    // i here just gets replaced with whatever value handleClick is passed
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
        return;
        }
        //duplicate array to avoid mutation
        const nextSquares = squares.slice();
        if (xIsNext) {
        nextSquares[i] = "X";
        } else {
        nextSquares[i] = "O";
        }
        //every other turn xIsNext == true
        setSquares(nextSquares);
        setXISNext(!xIsNext);
}

  return (
    <>
      <div className="status">{status}</div>
      {/* () => is an arrow function, code after the arrow runs on click */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
