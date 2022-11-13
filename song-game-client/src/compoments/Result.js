import React, { useContext } from 'react'
import { GameContext } from '../context'

const Result = ({score}) => {

  const context = useContext(GameContext);
  const playerName = context.gameSetup.playerName;

  return (
    <div className='result'>
      <img src='trophy.png' alt='trophy'/>
      <h3>Congratulations {playerName}!</h3>
      <h5>This is your score:</h5>
      <div className='result-corrects--container'>
        <div className='result-corrects'>{score} correct answers</div>
      </div>
    </div>
  )
}

export default Result