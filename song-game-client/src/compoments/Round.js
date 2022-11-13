import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context'

const Round = ({ addScore, goToNextRound, roundIndex, playedSongs, addPlayedSong }) => {
	const [round, setRound] = useState()
	const [selectedAnswer, setSelectedAnswer] = useState('')

	const context = useContext(GameContext);

	useEffect(() => {
		fetch(`/api/rounds?category=${context.gameSetup.category}&skip=${playedSongs.join(';')}`)
			.then(res => res.json())
			.then(res => setRound(res))
	}, [context.gameSetup.category])

	const selectAnswer = answer => {
		if (answer === round.correctAnswer) {
			addScore()
		}
		setSelectedAnswer(answer)
		addPlayedSong(round.correctAnswer)
	}

	return round && (
		<div className='round'>
			<h3>Which {context.gameSetup.category === 'song-title' ? 'SONG' : 'ARTIST'} is playing?</h3>
			<audio controls autoPlay src={round.songUrl}></audio>
			<div className='round-round-answerButton--container'>
        		{round.choices.map(choice => (
					<button
						type='button'
						className={`round-answerButton ${selectedAnswer === '' ? '' : (choice === round.correctAnswer ? 'correct' : 'wrong')}`}
						onClick={() => selectAnswer(choice)}
					>
						{choice}
					</button>
				))}
			</div>
			{	selectedAnswer !== ''
				&& <button
					type='button'
					onClick={goToNextRound}
					className='round-nextButton'
					>
					{roundIndex === 2 ? 'See results' : 'Go to next song'}
					</button>
			}
		</div>
	)
}

export default Round