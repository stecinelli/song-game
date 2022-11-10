import React, {useState} from 'react'
import Round from './Round'
import Result from './Result'

const Game = () => {
    const [roundIndex, setRoundIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [playedSongs, setPlayedSongs ] = useState([])

    const goToNextRound = () => setRoundIndex(roundIndex + 1)
    const addScore = () => setScore(score + 1)
    const addPlayedSong = playedSong => setPlayedSongs([...playedSongs, playedSong])

  return (
    <div>
        {roundIndex === 0 && <Round goToNextRound={goToNextRound} addScore={addScore} roundIndex={roundIndex} addPlayedSong={addPlayedSong} playedSongs={playedSongs}></Round>}
        {roundIndex === 1 && <Round goToNextRound={goToNextRound} addScore={addScore} roundIndex={roundIndex} addPlayedSong={addPlayedSong} playedSongs={playedSongs}></Round>}
        {roundIndex === 2 && <Round goToNextRound={goToNextRound} addScore={addScore} roundIndex={roundIndex} addPlayedSong={addPlayedSong} playedSongs={playedSongs}></Round>}
        {roundIndex === 3 && <Result score={score}></Result>}
    </div>
  )
}

export default Game