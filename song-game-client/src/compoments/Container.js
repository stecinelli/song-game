import React, {useContext} from 'react'
import { GameContext } from '../context'
import Game from './Game'
import Welcome from './Welcome'

const Container = () => {

  const context = useContext(GameContext)
  const { setGameSetup } = useContext(GameContext)

  if(!context.gameSetup.playerName)
  return (
    <Welcome></Welcome>
  )

  return (
    <React.Fragment>
      <Game></Game>
      <button className='home-button' onClick={() => setGameSetup({})}>Return to home</button>
    </React.Fragment>
  )

}

export default Container