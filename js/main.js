//Global elements
window.addEventListener('load', init);

// const easy = document.querySelector("#level1");
// const medium = document.querySelector("#level2");
// const hard = document.querySelector("level3");

const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

let currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//Dom Elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDispaly = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const start = document.querySelector('#startGame');

const words = [
  'new',
  'old',
  'complicated',
  'awesome',
  'hurry',
  'length',
  'president',
  'bootylicious',
  'prick',
  'nickampoop'
];

//pick & show a random word

function init() {
  seconds.innerHTML = currentLevel;
  showWord(words);
  wordInput.addEventListener('input', startMatch);
  setInterval(countDown, 1000);
  setInterval(checkStatus, 50);
  level.addEventListener('toggle', changeLevel);
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score == -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'CORRECT';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

function showWord(words) {
  const randomWord = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomWord];
}

function countDown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  timeDispaly.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game over man !!!';
    score = -1;
  }

  start.addEventListener('click', startPlaying);
}

function startPlaying(e) {
  if (!isPlaying && time === 0) {
    wordInput.value = '';
    message.innerHTML = 'Start new Game ';
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
}

function changeLevel() {}
