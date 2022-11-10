import React, {useContext, useState} from 'react'
import { GameContext } from '../context'

const Welcome = () => {
  const [playerName, setPlayerName] = useState('')
  const { setGameSetup } = useContext(GameContext)

  const getPlayerName = e => {
    setPlayerName(e.target.value)
  }

  const startGame = (category) => {

    const newGameSetup = {
      playerName: playerName,
      category: category
    }

    setGameSetup(newGameSetup)
  }

  return (
    <div className='welcome'>
      <h1> Welcome to the Sond Game!</h1>
      <p>To play you can type your name and choose if you want to guess the name of the songs or who is playing.</p>
      <form className='welcome-form'>
        <label>Player:</label>
        <input
        onChange={getPlayerName}
        onKeyDown={e => { if(e.key.toLowerCase() === 'enter') { e.preventDefault(); startGame(); } }}
        type='text'
        name='PlayerName'
        id='PlayerName'/>
        <div className='welcome-form--buttons'>
          <button
          type='button'
          onClick={() => startGame('song-title')}>By Song Name</button>
          <button
          type='button'
          onClick={ ()=> startGame('artist')}>By Artist</button>
        </div>
      </form>
    </div>
  )
}

export default Welcome