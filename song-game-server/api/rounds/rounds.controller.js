const archive = require('../../files/archive.json');

const getFullSongUrl = fileName => `http://localhost:8000/files/${fileName}`;

const getRandomSong = (skip, categoryAttribute) => {
  const availableSongs = archive.filter(song => !skip.some(skipSong => song[categoryAttribute] === skipSong));
  // Math.random returns random number from 0 to 1
  // Math.ceil rounds the number to the next integer
  // -1 is used because the array index is zero-based
  // random number multiplied by N produces a random number from 0 to N
  const randomIndex = Math.ceil(Math.random() * availableSongs.length) - 1;
  return availableSongs[randomIndex];
};

const getRound = (category, skip) => {
  const categoryAttribute = category === 'song-title' ? 'title' : 'artist';
  const correctSong = getRandomSong(skip, categoryAttribute);

  const wrongAnswers = archive
    .filter(song => song.file !== correctSong.file)
    .map(song => song[categoryAttribute])
    .slice(0, 3);

  const correctAnswer = correctSong[categoryAttribute];

  const choices = [...wrongAnswers, correctAnswer];
  // sort array with random number,
  // -0.5 makes the random return negative values, since it can only return from 0 to 1
  choices.sort(() => Math.random() - 0.5);

  return {
    songUrl: getFullSongUrl(correctSong.file),
    correctAnswer: correctAnswer,
    choices: choices
  };
};

module.exports = {
  getRound,
};