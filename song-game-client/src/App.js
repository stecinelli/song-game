import React, { useState } from 'react'
import Container from './compoments/Container'
import { GameContext } from './context'

import './App.css';

function App() {
  const [gameSetup, setGameSetup] = useState({})
  const contextValue = { gameSetup, setGameSetup }

  return (
    <div className='App'>
      <GameContext.Provider value={contextValue}>
        <Container>
        </Container>
      </GameContext.Provider>
    </div>
  );
}

export default App;
