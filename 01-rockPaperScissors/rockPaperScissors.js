/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {
  var example = ['rock', 'paper', 'scissors'];
  res = [];
  for(var i = 0; i<example.length; i++){
    for(var j = 0; j<example.length; j++){
      for(var z = 0; z<example.length; z++){
        res.push([example[i],example[j],example[z]])
      }
    }
  }
  return res;
};
