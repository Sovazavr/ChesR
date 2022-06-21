import React, { useEffect, useState } from 'react';

import './App.css';
import BordComponent from './components/BordComponent';
import { Board } from './modules/Board';

function App() {

  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoarn = new Board()
    newBoarn.initCells()
    newBoarn.addFigures()
    setBoard(newBoarn)
  }

  return (
    <div className="app">
      <BordComponent
        board={board}
        setBoard={setBoard}
      />

    </div>
  );
}

export default App;
