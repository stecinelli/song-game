import React, { useContext } from 'react'
import { GameContext } from '../context'

const Result = ({score}) => {

  const context = useContext(GameContext);
  const playerName = context.gameSetup.playerName;

  return (
    <div className='result'>
      <img src='trophy.png' alt='trophy'/>
      <h1>Congratulations {playerName}!</h1>
      <p>This is your score:</p>
      <div className='result-corrects'>
        <div>{score} correct answers</div>
      </div>
    </div>
  )
}

export default Result