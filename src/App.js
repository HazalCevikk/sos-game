import { useState, useEffect } from 'react';
import './App.css';
import Game from './Components/Game'
import Squares from './Components/Squares';

const defaultSquares = () => (new Array(220)).fill('')

function App() {
  const [squares, setSquares] = useState(defaultSquares());

  useEffect(()=>{
    console.log(squares)
    const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
    if(isComputerTurn){
      alert('1')
    }
  },[squares])

  function handleClick(index) {
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = [];
      newSquares = [...squares]
      newSquares[index] = 'X';
      setSquares(newSquares)
    }
  }

  return (
    <main>
      <Game>
        {
          squares.map((square, index) => {
            return <Squares
              key={index}
              x={square === 'X' ? 1 : 0}
              o={square === 'O' ? 1 : 0}
              onClick={() => handleClick(index)} />
          }
          )
        }
      </Game>
    </main>

  );
}

export default App;
