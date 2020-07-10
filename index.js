// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 has a function nested inside of another function which allows
 * the result to be saved. Each time the code is run, the result is incremented
 * by 1.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * The second function takes advantage of closure by accessing the count
 * variable outside of the scope of it's function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *Counter 1 would be preferable if you wish to keep track of the data invoking
 a function produces.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){
    let inningRoundScore = Math.round(Math.random() * 10);
    return inningRoundScore;

}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(scoreEachRound_Function, totalInnings){

  let bothScores = {
    "home": 0,
    "away":0,
  };

  for (i= 0; i < totalInnings ; i++) {
    bothScores.home = bothScores.home + scoreEachRound_Function();
    bothScores.away = bothScores.away + scoreEachRound_Function();

  };
  console.log(bothScores)

};

finalScore(inning, 9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreBoard(scoreEachRound_Function, totalInnings) {
  let bothScores = {
    "home": 0,
    "away":0,
  };

  for (i= 0; i < totalInnings ; i++) {

    bothScores.home = bothScores.home + scoreEachRound_Function();
    bothScores.away = bothScores.away + scoreEachRound_Function();

    switch(i) {
      case 0:
        console.log(`${i+1}st inning: ${bothScores.home}-${bothScores.away}`);
        break;
        case 1: 
        console.log(`${i+1}nd inning: ${bothScores.home}-${bothScores.away}`);
        break;
        case 2:
        console.log(`${i+1}rd inning: ${bothScores.home}-${bothScores.away}`);
        break;
        default:
        console.log(`${i+1}th inning: ${bothScores.home}-${bothScores.away}`);
    };

  };

};




  scoreBoard(inning, 9);
