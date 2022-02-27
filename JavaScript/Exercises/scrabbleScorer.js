// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble!");
  let wordInput = input.question("Enter a word to score: ")
  return wordInput;
};

function simpleScore(word) {
  let score = word.length;
  return score;
}

function vowelBonusScore(word) {
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      score += 3;
    } else {
      score++;
    }
  }
  return score;
}


let scrabbleScore = function(word) {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += Number(newPointStructure[word[i]]);
  }
  return score;
};


const scoringAlgorithms = [

  {
    name: "Simple Score ",
    number: '0',
    description: "0- Simple: One point per character  ",
    scoreFunction: simpleScore
  },
  {
    name: " Bonus Vowels",
    number: '1',
    description: "1- Vowel Bonus: Vowels are worth 3 points ",
    scoreFunction: vowelBonusScore
  },

  {
    name: "Scrabble ",
    number: '2',
    description: "2- Scrabble: Uses scrabble point system",
    scoreFunction: scrabbleScore
  }

];




function scorerPrompt(word) {
  numberInput = input.question(`\nWhich scoring algorithm would you like to use?\n
    0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
    1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
    2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
    \nPlease enter 0, 1, or 2: `);

  
  if (numberInput === '0') {
    return (`Score for ${word}: ${scoringAlgorithms[0].scoreFunction(word)}`);

  } else if (numberInput === '1') {
    return (`Score for ${word}: ${scoringAlgorithms[1].scoreFunction(word)}`);

  } else if (numberInput === '2') {
    return (`Score for ${word}: ${scoringAlgorithms[2].scoreFunction(word)}`);

  } else {
    console.log('Invalid number, please try again.');
    scorerPrompt();
  }
};

function transform(oldPointStructure) {
  let newStructure = {};
  for (let key in oldPointStructure) {
    let letterArray = oldPointStructure[key];
  
    /* This is what I wanted to use here but for whatever reasons I am stuck on how to go about this hence I googled the alternative below & seems to be working as well.
    for (let value of arr)
    {console.log(value);
    */
    for (let i = 0; i < letterArray.length; i++) {
      newStructure[letterArray[i]] = Number(key);

    }
  }
  return newStructure;

};

let newPointStructure = transform(oldPointStructure);

function runProgram() {

  let prompt = initialPrompt();
  console.log(scorerPrompt(prompt));
  transform(oldPointStructure);
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};

