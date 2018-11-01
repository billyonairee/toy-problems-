/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  var res = [];
  var resCount = 0
  var find = function(string, startIdx){
    var startIdx = startIdx || 0
    for(var i = startIdx; i < string.length; i++){
      if(string[startIdx] !== string[i]){
        if(i - startIdx > resCount){
          res = [startIdx, i-1]
          resCount = (i - startIdx)+1
          startIdx = i
          find(string, resCount+1)
        }
      }
    }
  }
  find(string, 0)
  return res
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
